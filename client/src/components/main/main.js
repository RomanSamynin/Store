import React from 'react';
import './main.sass';
import ProductBox from './component/productCards';
import Up from '../up/up'
import Pages from './component/Pages';
import support from './content/IconAdvantages/support.svg';
import guarantee from './content/IconAdvantages/guarantee.svg';
import trophy from './content/IconAdvantages/trophy.svg';
import shipping from './content/IconAdvantages/shipping.svg';
import img_1 from './content/Rectangle41.jpg';
import img_2 from './content/Rectangle42.jpg';
import img_3 from './content/Rectangle43.jpg';
import img_4 from './content/Rectangle44.jpg';
import img_5 from './content/Rectangle45.jpg';
import img_6 from './content/Rectangle36.jpg';
import img_7 from './content/Rectangle37.jpg';
import img_8 from './content/Rectangle38.jpg';
import img_9 from './content/Rectangle39.jpg';

const Main = () => {
    return (
        <>
            <div className="wrapper">
                <div className="container_block">
                    <div className="advantages">
                        <div className="advantages_item grid_adnantages_1">
                            <img src={trophy}></img>
                            <div>
                                <h1>High Quality</h1>
                                <h2>crafted from top materials</h2>
                            </div>
                        </div>
                        <div className="advantages_item grid_adnantages_2">
                            <img src={guarantee}></img>
                            <div>
                                <h1>Warrany Protection</h1>
                                <h2>Over 2 years</h2>
                            </div>
                        </div>
                        <div className="advantages_item grid_adnantages_3">
                            <img src={shipping}></img>
                            <div>
                                <h1>Free Shipping</h1>
                                <h2>Order over 150 $</h2>
                            </div>
                        </div>
                        <div className="advantages_item grid_adnantages_4">
                            <img src={support}></img>
                            <div>
                                <h1>24 / 7 Support</h1>
                                <h2>Dedicated support</h2>
                            </div>
                        </div>
                    </div>
                    <h1 className="products_name">Our Products</h1>
                    <div>
                        <div className="products">
                            <ProductBox/>
                        </div>
                    </div>
                    <Pages/>
                </div>
                <Up/>
            </div>
            <div  className="galleryWrap">
                <img className="img_1" src={img_1}></img>
                <img className="img_2" src={img_2}></img>
                <img className="img_3" src={img_3}></img>
                <img className="img_4" src={img_4}></img>
                <img className="img_5" src={img_5}></img>
                <img className="img_6" src={img_6}></img>
                <img className="img_7" src={img_7}></img>
                <img className="img_8" src={img_8}></img>
                <img className="img_9" src={img_9}></img>
            </div>
        </>
    )
}

export default Main;