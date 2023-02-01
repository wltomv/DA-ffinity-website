import React from 'react';
import PostSection from '../../components/PostSection/PostSection';

import './Home.scss';

function Home() {
    return (
        <div className="home-container">
            <div className="profile-section" />
            <PostSection />
            <div className="right-section" />
        </div>
    );
}

export default Home;
