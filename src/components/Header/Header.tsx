import React from "react";
import headerStyles from './Header.module.scss';

const Header = () => {

    function btnClick() {
        console.log("hello from me");
    }

    return (
        <>
            <div className={headerStyles.header_main_block}>
                <div className={headerStyles.header_logo_block}>
                    <div className={headerStyles.header_logo_img}>
                        <img src="./book_logo.png" alt="" />
                    </div>
                    <div className={headerStyles.header_logo_name}>
                        <h2>Treasure shelf</h2>
                        <h5>Buy and sell used books</h5>
                    </div>
                </div>

                <div className={headerStyles.header_search_book}>
                    <input
                        className={headerStyles.search_book_input}
                        type="text"
                        placeholder="Search for books and authors"
                    />
                    <button
                        className={headerStyles.search_book_btn}
                        onClick={btnClick}
                    >
                        <img src="./search_btn_icon.png" alt="" />
                    </button>
                </div>
                <div className={headerStyles.login}>
                    <a><img className={headerStyles.login_lang_icon} src="./lang.png" alt="" />Language</a>
                    <a><img className={headerStyles.login_login_icon} src="./login.png" alt="" />Log in</a>
                </div>
            </div>

            <div className={headerStyles.main_block_inner}>
                <div className={headerStyles.book_categories_block}>
                    <ul>
                        <li>Books</li>
                        <li>Magazines</li>
                        <li>Comics</li>
                        <li>Merch</li>
                    </ul>
                </div>
                <div className={headerStyles.icon_block}>
                    <img src="./money_icon.png" alt="" />
                    <img src="./basket_icon.png" alt="" />
                    <img src="./flag_icon.png" alt="" />
                </div>
            </div>

            <div className={headerStyles.category_top_line}></div>
            <div>Routing</div>
        </>
    )
};

export default Header;