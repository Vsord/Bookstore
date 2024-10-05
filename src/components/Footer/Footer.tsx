import React from "react";
import footerStyles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={footerStyles.footer_main_block}>
            <div className={footerStyles.footer_inner_block}>
                <p>About us</p>
                <img src="./book_logo.png" alt="" />
                <button><img src="./Line7.png" alt="" /></button>
            </div>
        </div>
    )
};

export default Footer;