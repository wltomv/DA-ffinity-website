import { useContext } from 'react';
import Loader from '../../components/Loader/Loader';
import NewPost from '../../components/NewPost/NewPost';
import { PostContext } from '../../context/PostsContext';
import Posts from '../Posts/Posts';
import './PostSection.scss';

function PostSection() {
    const { posts, loading } = useContext(PostContext);
    return (
        <div className="Post-section">
            <NewPost />
            {!loading ? <Posts posts={posts} /> : <Loader />}
        </div>
    );
}

export default PostSection;
