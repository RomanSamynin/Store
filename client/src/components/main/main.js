import React from 'react';
import './main.sass';
import TypeBar from './component/TypeBar';
import ProductBox from './component/productCards';
import Up from '../up/up'
import Pages from './component/Pages';
import support from './content/IconAdvantages/support.svg';
import guarantee from './content/IconAdvantages/guarantee.svg';
import trophy from './content/IconAdvantages/trophy.svg';
import shipping from './content/IconAdvantages/shipping.svg';

const Main = () => {
    return (
        <div className="wrapper">
            <div className="container_block">
                <div className="advantages">
                    <div className="advantages_item">
                        <img src={trophy}></img>
                        <h1>High Quality</h1>
                        <h2>crafted from top materials</h2>
                    </div>
                    <div className="advantages_item">
                        <img src={guarantee}></img>
                        <h1>Warrany Protection</h1>
                        <h2>Over 2 years</h2>
                    </div>
                    <div className="advantages_item">
                        <img src={shipping}></img>
                        <h1>Free Shipping</h1>
                        <h2>Order over 150 $</h2>
                    </div>
                    <div className="advantages_item">
                        <img src={support}></img>
                        <h1>24 / 7 Support</h1>
                        <h2>Dedicated support</h2>
                    </div>
                </div>
                <h1 className="products_name">Our Products</h1>
                <div>
                    <div className="products">
                        {/* <TypeBar/> */}
                        <ProductBox/>
                    </div>
                </div>
                <Pages/>
            </div>
            <Up/>
        </div>
    )
}

export default Main;