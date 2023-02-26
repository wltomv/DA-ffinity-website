import PropTypes from 'prop-types';
import Post from '../../components/Post/Post';
import './Posts.scss';

function Posts({ posts }) {
    return (
        <div className="posts">
            {posts.length !== 0 && posts.map((post) => <Post data={post} />)}
        </div>
    );
}
Posts.propTypes = { posts: PropTypes.arrayOf(PropTypes.shape).isRequired };

export default Posts;
