import React from 'react';
import productStyles from './Product.module.scss';

const Product = () => {
    return (
        <div className={productStyles.product_main_block}>
            <div className={productStyles.product_description}>
                <img src="./offers_product.png" alt="" />
                <p>The product name</p>
                <p>The author's name</p>
                <img src="./stars.png" alt="" />
            </div>
            <div className={productStyles.product_price}>
                <p>₴00</p>
                <button>Buy</button>
            </div>
        </div>
    )
};

export default Product;