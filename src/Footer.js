import React from "react";

const newDate = new Date().getFullYear();

const Footer = () => {
    return (
        <>
        <div className = "w-100 text-center bg-light">
            <p> @{newDate} retail system. All Rights reserved | Terms and Condition </p>
        </div>
        </>
    );
};

export default Footer;