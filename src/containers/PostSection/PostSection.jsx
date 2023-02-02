import React from 'react';
import NewPost from '../../components/NewPost/NewPost';
import Posts from '../Posts/Posts';
import './PostSection.scss';

function PostSection() {
    return (
        <div className="Post-section">
            <NewPost />
            <Posts />
        </div>
    );
}

export default PostSection;
