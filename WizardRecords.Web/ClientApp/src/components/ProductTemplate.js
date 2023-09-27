import React from 'react';
import '../styles/ProductTemplate.css';

function ProductTemplate({ type, albumCoverSource }) {
    const placeholderSrc = type === 'CD'
        ? require('./Images/CoverTemplate/CDBase.png')
        : require('./Images/CoverTemplate/VinylBase.png');
    return (
        <div className="album-template">
            if (item == Type.CD) {
                <img
                    className="album-placeholder"
                    src={require("./Images/CoverTemplate/CDBase.png")}
                    alt="Album Placeholder"
                />
            }
            else if (item == Type.Vinyl){
                <img
                    className="album-placeholder"
                    src={require("./Images/CoverTemplate/VinylBase.png")}
                    alt="Album Placeholder"
                />
            }
            <img
                className="album-cover"
                src={albumCoverSource}
                alt="Album Cover"
            />
        </div>
    );
}