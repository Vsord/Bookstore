import React from "react";
import headerStyles from './Header.module.scss';

const Header = () => {
    return (
        <div className={headerStyles.header_main}>
            <div className={headerStyles.header_logo}>
                <div>
                    <img src="./book_logo.png" alt="" />
                </div>
                <div className={headerStyles.logo_name}>
                    <h2>Treasure shelf</h2>
                    <h5>Buy and sell used books</h5>
                </div>
            </div>

            <div className={headerStyles.header_search_book}>
                <input type="text" />
            </div>
            <div className={headerStyles.login}>
                <a><img src="./lang.png" alt="" />language</a>
                <a><img src="./login.png" alt="" /> log in</a>
            </div>
        </div>
    )
};

export default Header;