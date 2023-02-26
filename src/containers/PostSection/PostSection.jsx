import { useContext } from 'react';
import NewPost from '../../components/NewPost/NewPost';
import { PostContext } from '../../context/PostsContext';
import Posts from '../Posts/Posts';
import './PostSection.scss';

function PostSection() {
    const { posts } = useContext(PostContext);
    return (
        <div className="Post-section">
            <NewPost />
            <Posts posts={posts} />
        </div>
    );
}

export default PostSection;
