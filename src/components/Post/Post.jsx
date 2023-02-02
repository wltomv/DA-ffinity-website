import PropTypes from 'prop-types';
import { SlLike } from 'react-icons/sl';
import './Post.scss';

function Post({ data }) {
    return (
        <div className="post">
            <div className="post__header">
                <span>Autor</span>
            </div>
            <div className="post__body">
                <p>{data.content}</p>
                <img src={data.image} alt="" />
            </div>

            <div className="post__footer">
                <SlLike size={24} />
                <span>{data.likes}</span>
            </div>
        </div>
    );
}

Post.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string,
        content: PropTypes.string.isRequired,
        likes: PropTypes.number,
    }).isRequired,
};

export default Post;
