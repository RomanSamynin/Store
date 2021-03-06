import React, { useContext } from 'react';
import {Context} from '../index';
import { observer } from 'mobx-react-lite';
import { SHOP_ROUTE } from '../utils/consts';
import {Redirect} from "react-router-dom";
import Header from '../components/header';
import Footer from '../components/footer';
import LikeItem from '../components/like/likeItem'
import './Basket.sass';

const Like = observer( () => {
    const {basket} = useContext(Context)
    
    return (
        <div>
            <div className="header_bg">
                <Header/>
                    <div className="wrapper">
                        {(basket.like.length) ? <div></div> : <Redirect to={SHOP_ROUTE}/>}
                        <div className="basket_box">
                            {basket.like.map(data =>
                            <LikeItem key={data.id} Like={data}/>
                            )}
                        </div>
                    </div>
                <Footer/>
            </div>
        </div>
    )
});
    

export default Like