import React from "react";
import bodyStyles from './Body.module.scss';
import Post from "../Category/Category";
import Product from "../Product/Product";
import Category from "../Category/Category";


const Body = () => {
    return (
        <div className={bodyStyles.body_main_block}>
            <div className={bodyStyles.category_main_block}>
                <Category />
                <Category />
                <Category />
                <Category />
            </div>

            <div className={bodyStyles.category_bottom_line_outer_block}>
                <h3>New offers</h3>
                <div className={bodyStyles.category_bottom_line}></div>
            </div>

            <div className={bodyStyles.product}>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>

            <div className={bodyStyles.product_bottom_line_outer_block}>
                <h4>See all</h4>
                <div className={bodyStyles.product_bottom_line}></div>
            </div>
        </div>
    )
};

export default Body;
