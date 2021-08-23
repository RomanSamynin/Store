import React, {useState, useContext} from 'react';
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
import Header from '../components/header';
import Footer from '../components/footer';
import BasketItem from '../components/basket/basketItem'
import Pop_up from '../components/pop-up/pop-up';
import {createBasket} from "../http/basketApi";
import { SHOP_ROUTE } from '../utils/consts';
import {Redirect} from "react-router-dom";
import jwt_decode from "jwt-decode";
import './Basket.sass';

const Message = () => {

    const {user} = useContext(Context)

    let style_Children = {
        color: "#E89F71",
        fontSize: "20px",
        fontWeight: "bold",
        textAlign: "center"
    }

    return (
        <>
        {user.isAuth ?
            <div style={style_Children}>
                Thanks for your order!
            </div>
            :
            <div style={style_Children}>
                Please, log in!
            </div>
        }
    </>

    )
}

const Basket = observer( () => {

    const {basket} = useContext(Context)
    const {user} = useContext(Context)
    const [showModal, setShowModal] = useState(false) 

    let newTotalPrice = basket.totalPrice.map( item => item.price )
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let total = newTotalPrice.reduce(reducer, 0);


    let click = async () => {

        if (user.isAuth) {

            let valueUser = jwt_decode(localStorage.getItem('token')).id;
            
            await basket.basket.map(async e => {
                for (let i = 0; i < e.count; i++) { 
                    await createBasket({deviceId: e.id, basketId: valueUser}).then(data => {
                        return console.log(data)
                    })
                }
            })

            await setShowModal(true)

            let clear = () => {
                basket.basket.map(e => {
                    basket.deleteBasket(e.id)
                })
            }

            await setTimeout(clear, 3000)

        } else {
            setShowModal(true)
        }  
    }

    return (
        <div>
            <div className="header_bg">
            <Pop_up showModal={showModal} setShowModal={setShowModal} Children={Message}/>
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
