import React, {useState, useEffect, useContext, useMemo} from 'react';
import { observer } from 'mobx-react-lite';
import { fetchOneDevice } from '../../http/deviceApi';
import { useMediaQuery } from 'react-responsive';
import {Context} from '../../index';
import '../basket/basketItem.sass';
import './like.sass';

const Like = observer( ({Like}) => {
    const [device, setDevice] = useState({info:[]})
    const {basket} = useContext(Context)

    const isMobile = useMediaQuery({ maxWidth: 830});
    
    useEffect( () => {
        fetchOneDevice(Like).then(data => setDevice(data))
     
    });

    return (
            <div className="wrapper">
                <div className="container_block">
                    <div className="itemBasket">
                        {isMobile &&
                            <button 
                                className="delete_Mobile_btn"
                                onClick={() => basket.deleteLike(Like)}
                                >
                                Х
                            </button>
                        }
                        <img className="imgBasket" src={process.env.REACT_APP_API_URL + "api/" + device.img}></img>
                        <div className="counterBasket">
                            <div className="nameBasket">{device.name}</div>
                            <button 
                                className="sendBasket_btn"
                                disabled={basket.basket.some(item => item.id == Like)} 
                                onClick={() => {basket.setBasket(Like, 1); basket.deleteLike(Like)}}
                            >
                                Add to basket
                            </button>
                            {!isMobile &&
                                <button 
                                    className="sendOrder"
                                    onClick={() => basket.deleteLike(Like)}
                                    >
                                    Х
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
    )
});
    

export default Like
