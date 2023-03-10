import { createContext, useState, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import DaffiArtifact from '../config/artifacts/DAffinity.contract';
import useContract from '../hooks/useContract';

export const PostContext = createContext();

export function PostsProvider({ children }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const daffiContract = useContract(DaffiArtifact);

    const getPosts = async () => {
        const postsCount = await daffiContract.methods.postCount().call();
        const poststemp = [];
        for (let i = postsCount; i >= 1; i -= 1) {
            // eslint-disable-next-line no-await-in-loop
            const post = await daffiContract.methods.posts(i).call();
            poststemp.push({
                id: post.id,
                image: `https://${post.ipfsHash}.ipfs.w3s.link`,
                likes: post.likes,
                content: post.message,
            });
        }
        console.log(postsCount);
        setPosts(poststemp);
    };

    useEffect(() => {
        setLoading(true);
        getPosts();
        setLoading(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const postContextValue = useMemo(
        () => ({
            posts,
            setPosts,
            loading,
        }),
        [posts, setPosts, loading]
    );

    return (
        <PostContext.Provider value={postContextValue}>
            {children}
        </PostContext.Provider>
    );
}

PostsProvider.propTypes = { children: PropTypes.node.isRequired };
