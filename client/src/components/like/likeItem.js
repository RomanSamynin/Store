import React, {useState, useEffect, useContext, useMemo} from 'react';
import { observer } from 'mobx-react-lite';
import { fetchOneDevice } from '../../http/deviceApi';
import {Context} from '../../index';
import '../basket/basketItem.sass';
import './like.sass';

const Like = observer( ({Like}) => {
    const [device, setDevice] = useState({info:[]})
    const {basket} = useContext(Context)
    
    useEffect( () => {
        fetchOneDevice(Like).then(data => setDevice(data))
     
    });


    return (
            <div className="wrapper">
                <div className="itemBasket">
                    <img className="imgBasket" src={process.env.REACT_APP_API_URL + device.img}></img>
                    <div className="counterBasket">
                        <div className="nameBasket">{device.name}</div>
                        <button 
                            className="sendBasket_btn"
                            onClick={() => {basket.setBasket(Like, 1); basket.deleteLike(Like)}}
                        >
                            Add to basket
                        </button>
                        <button 
                            className="sendOrder" 
                            onClick={() => basket.deleteLike(Like)}
                            >
                            Х
                        </button>
                    </div>
                </div>
            </div>
    )
});
    

export default Like
