import React from "react";
import categoryStyles from './Category.module.scss';

const Category = () => {
    return (
        <div className={categoryStyles.categories_block}>
            <div className={categoryStyles.categories_inner_block}>
                <img src="fic_img.png" alt="" />
                <p>Fiction</p>
            </div>
        </div>
    )
};

export default Category;