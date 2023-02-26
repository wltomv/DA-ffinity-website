import { useContext, useState } from 'react';
import { FaImages } from 'react-icons/fa';
import { BiImageAdd } from 'react-icons/bi';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { Web3Storage } from 'web3.storage';
import { useWeb3React } from '@web3-react/core';
import readfile from '../../utils/readFile';
import images from '../../constants/images';
import Avatar from '../Avatar/Avatar';
import './CreatePost.scss';
import useContract from '../../hooks/useContract';

import DaffiArtifact from '../../config/artifacts/DAffinity.contract';
import notify from '../../utils/notify';
import { PostContext } from '../../context/PostsContext';
import Loader from '../Loader/Loader';

function CreatePost() {
    const token = import.meta.env.VITE_IPFS_DAFFI_TOKEN;
    const storage = new Web3Storage({ token });
    const daffiContract = useContract(DaffiArtifact);
    const { account } = useWeb3React();
    const { setPosts } = useContext(PostContext);

    const [addMedia, setAddMedia] = useState(false);
    const [media, setMedia] = useState({});
    const [content, setContent] = useState('');
    const [sendPost, setSendPost] = useState(false);

    const changeInput = (e) => {
        const newImage = readfile(e);
        setMedia(newImage);
    };

    const handleChangeContent = (e) => {
        const val = e.target.value;
        setContent(val);
    };

    const deleteImage = () => {
        setMedia({});
        setAddMedia(false);
    };

    const publish = async () => {
        setSendPost(true);
        const storageOptions = { wrapWithDirectory: false };
        const cid = await storage.put([media.file], storageOptions);

        daffiContract.methods
            .newPost(cid, content)
            .send({ from: account })
            .on('transactionHash', (txHash) => {
                notify('info', `transaccion enviada, hash: ${txHash}`);
            })
            .on('receipt', ({ events }) => {
                notify('success', 'publicacion creada');
                const { returnValues } = events.PostCreated;
                const newPost = {
                    id: returnValues.id,
                    image: `https://${returnValues.ipfsHash}.ipfs.w3s.link`,
                    likes: returnValues.likes,
                    content: returnValues.description,
                };
                setPosts((posts) => [newPost, ...posts]);

                setMedia({});
                setContent('');

                setSendPost(false);
            })
            .on('error', (error) => {
                notify('error', `transaccion fallida ${error.message}`);
                setSendPost(false);
            });
    };

    return (
        <div>
            {!sendPost ? (
                <div className="create__post">
                    <div className="create__post-options">
                        <div className="autor">
                            <Avatar imgSrc={images.userImg} />
                            <span>autor</span>
                        </div>
                        {!addMedia && (
                            <button
                                type="button"
                                onClick={() => setAddMedia(true)}
                            >
                                <FaImages size={32} />
                            </button>
                        )}
                    </div>
                    <textarea
                        className="create__post-content"
                        placeholder="Contenido de la publicación..."
                        onChange={handleChangeContent}
                        value={content}
                    />
                    {addMedia && (
                        <div className="create__post-media">
                            <button type="button">
                                <AiOutlineCloseCircle
                                    size={32}
                                    onClick={() => deleteImage()}
                                />
                            </button>

                            {media.file ? (
                                <div className="create__post-media_img">
                                    <img src={media.url} alt="new-content" />
                                </div>
                            ) : (
                                <div className="create__post-media_add">
                                    <label htmlFor="add">
                                        <BiImageAdd
                                            size={32}
                                            className="icon"
                                        />
                                        <input
                                            id="add"
                                            type="file"
                                            accept="image/*"
                                            hidden
                                            multiple
                                            onChange={changeInput}
                                        />
                                    </label>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="create__post-submit">
                        <button type="button" onClick={() => publish()}>
                            Publicar
                        </button>
                    </div>
                </div>
            ) : (
                <div className="createPost__loader">
                    <Loader />
                </div>
            )}
        </div>
    );
}

export default CreatePost;
