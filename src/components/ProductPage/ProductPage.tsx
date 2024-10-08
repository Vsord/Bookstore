import React from "react";
import productPageStyles from './ProductPage.module.scss';


const ProductPage = () => {
    return (
        <>
            <div className={productPageStyles.productPage_main_block}>
                <div className={productPageStyles.productPage_imgs}>
                    <button>
                        <img src="./btn_flag_icon.png" alt="" />
                    </button>
                    <img src="./huge_product_book_pic.png" alt="" />
                    <button>
                        <img src="./small_product_book_pic.png" alt="" />
                    </button>
                </div>

                <div className={productPageStyles.productPage_description}>
                    <div className={productPageStyles.product_price}>
                        <p>The product name</p>
                        <p>₴00</p>
                    </div>
                    <p>The author's name</p>
                    <p>Language: English</p>
                    <p>Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Nulla quam velit. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit.
                        Nulla quam velit. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nulla quam velit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Nulla quam velit.
                    </p>
                    <div className={productPageStyles.seller_ratings}>
                        <img src="./seller_profile_photo.png" alt="" />
                        <p>Seller name</p>
                        <img src="./seller_ratings.png" alt="" />
                    </div>
                    <div className={productPageStyles.product_seller_contacts}>
                        <button>Buy</button>
                        <button>Contact the seller</button>
                    </div>
                </div>
            </div>
            <div className={productPageStyles.product_book_ID}>
                <p>ID: 0123456</p>
                <div className={productPageStyles.product_complaint}>
                    <img src="./complaint_flag.png" alt="" />
                    <p>Complain</p>
                </div>
            </div>
        </>
    )
};

export default ProductPage;