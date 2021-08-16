import React, {useState, useEffect, useContext, useMemo} from 'react';
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
import Header from '../components/header';
import Footer from '../components/footer';
import BasketItem from '../components/basket/basketItem'
import {createBasket} from "../http/basketApi";
import { fetchOneDevice } from '../http/deviceApi';
import { ADMIN_ROUTE, INSPIRATIONS_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from '../utils/consts';
import {Redirect} from "react-router-dom";
import './Basket.sass';


const Basket = observer( () => {
    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    const [response, setResponse] = useState()
    

    let newTotalPrice = basket.totalPrice.map( item => item.price )

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let total = newTotalPrice.reduce(reducer, 0);



 

    let valueUser = JSON.parse(localStorage.getItem('UserID'));

 
    let click = () => {
        basket.basket.map(e => {
            for (let i = 0; i < e.count; i++) { 
                createBasket({deviceId: e.id, basketId: valueUser}).then(data => {
                    console.log(data)
                    if(data !== undefined) {
                        setResponse(1)
                    } else {
                        return setResponse(2) 
                    }
                })
            }
        })
    }
  

    useEffect(() => {
        if(response === 1) {
            console.log("ОК") 
        } else if(response === 2) {
            console.log("bad")
        }
    }, [response, setResponse])

    return (
        <div>
            <div className="header_bg">
                <Header/>
                    <div className="wrapper">
                        <div className="basket_box">
                            {basket.basket.map(data =>
                            <BasketItem key={data.id} Basket={data}/>
                            )}
                            {(basket.basket.length) ? 
                            <div  className="basket_footer">
                                <div className="basket_footer_total">Total Price {total} $</div>
                                <button onClick={click} className="sendOrder_btn">Order</button>
                            </div> 
                            :
                            <Redirect to={SHOP_ROUTE}/>}
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    )
});
    

export default Basket
