import React from 'react';
import Images from "./Images.jsx";

function Card(prop) {
    return (
        <>
            <div className="card">
                <div className="img_body">
                    <Images imgsrc={prop.imgsrc} />
                </div>
                <div className="card_body">
                    <span> {prop.title}</span>
                    <h3> {prop.cardtitle}</h3>
                    <a href={prop.link} className="linkNext" target="_blank">
                        <button> Watch Now</button>
                    </a>
                </div>
            </div>
        </>
    );
};

export default Card;