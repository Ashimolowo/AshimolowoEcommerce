import React from 'react';
import './menu-items.scss';
import { useNavigate } from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        console.log('Navigating to:', linkUrl);
        navigate(linkUrl);
    };

    return (
        <div onClick={handleClick} className={`${size} menu-item`}>
            <div 
                className="background-image"
                style={{ backgroundImage: `url(${imageUrl})` }}
            >
                <div className="content">
                    <h1 className="title">{title.toUpperCase()}</h1>
                    <span className="subtitle">Visit Now</span>
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
