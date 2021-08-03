import React, {useContext, useState, useEffect, useMemo} from 'react';
import { observer } from 'mobx-react-lite';
import './productCards.sass';
import {useHistory} from "react-router-dom";
import {Context} from '../../../index';
import {DEVICE_ROUTE} from "../../../utils/consts"

const ProductCardsItem = observer( ({device}) => {
    const history = useHistory()
    const {basket} = useContext(Context)

    const [showLike, setShowLike] = useState(false)
    

    const clickShowLike = () => setShowLike(!showLike)

    useEffect(()=> {
        setShowLike(basket.like.some((id) => {
            return id == device.id
        }))
    },[]);

    useEffect(()=> {

        if (showLike) {
            basket.setLike(device.id)
        } else {
            basket.deleteLike(device.id)
        }
    });

    return (
        <div className="product_card">
            <div className="product_card_blackout">
                <div className="blackout"></div>
                <button className="btn_card" onClick={() => history.push(DEVICE_ROUTE + '/' + device.id)}>Show</button>
                <div className="link">
                    <a className="share">Share</a>
                    <a className="like" onClick={clickShowLike} >
                        {(showLike) ?
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="Red" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9996 19.0542C-8 8.00003 5.99999 -3.99997 11.9996 3.58809C18 -3.99997 32 8.00003 11.9996 19.0542Z" stroke="Red" stroke-width="1.8"/>
                            </svg>
                        :
                            <svg width="24" height="21" viewBox="0 0 24 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.9996 19.0542C-8 8.00003 5.99999 -3.99997 11.9996 3.58809C18 -3.99997 32 8.00003 11.9996 19.0542Z" stroke="white" stroke-width="1.8"/>
                            </svg>
                        }
                        Like
                    </a>
                </div>
            </div>
            {/* <div className="discount"><div className="discount_descr"></div></div> */}
            <img className="product_card_img" src={process.env.REACT_APP_API_URL + device.img}></img>
            <div className="discription">
                <h1>{device.name}</h1>
                <h3>Price {device.price}</h3>
                <div className="discription_price">
                    <h2 className="priceNow"></h2>
                    <h2 className="priceTo"><div className="priceTo_line"></div></h2> 
                </div>
            </div>
        </div>

    )
})

export default ProductCardsItem
