import React, {useState, useEffect, useContext, useMemo} from 'react';
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
import Navbar from '../components/header/components/NavBar';
import BasketItem from '../components/basket/basketItem'
import {createBasket} from "../http/basketApi";
import { fetchOneDevice } from '../http/deviceApi';
import { ADMIN_ROUTE, INSPIRATIONS_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from '../utils/consts';
import {Redirect} from "react-router-dom";
import './Basket.sass';


const Basket = observer( () => {
    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    

    let newTotalPrice = basket.totalPrice.map( item => item.price )

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let total = newTotalPrice.reduce(reducer, 0);


    // newTotalPrice.forEach(e => {
    //     console.log(e)
    // })

    // console.log(total)

 



 
    let click = () => {
        //  basket.basket.map((id) => {

        //         cre(id)
        //     }
        // )   
    }
    
    function cre(id) {
         createBasket(id)
  
    }
    return (
        <div>
            <div className="header_bg">
            <Navbar/>
                <div className="wrapper">
                    <div className="basket_box">
                        {basket.basket.map(data =>
                        <BasketItem key={data.id} Basket={data}/>
                        )}
                        {(basket.basket.length) ? 
                        <div  className="basket_footer">
                            <div className="basket_footer_total">Total Price {total}</div>
                            <button onClick={click} className="sendOrder_btn">Order</button>
                        </div> 
                        :
                        <Redirect to={SHOP_ROUTE}/>}
                    </div>
                </div>
            </div>
        </div>
    )
});
    

export default Basket
