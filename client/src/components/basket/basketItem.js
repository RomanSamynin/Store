import React, {useState, useEffect, useContext, useMemo} from 'react';
import { observer } from 'mobx-react-lite';
import { fetchOneDevice } from '../../http/deviceApi';
import {Context} from '../../index';
import './basketItem.sass'

const Basket = observer( ({Basket}) => {
    const [device, setDevice] = useState({info:[]})
    const [count, setCount] = useState(Basket.count)

    const {basket} = useContext(Context)

    if (count < 1) {
        setCount(count + 1)
    };

    let totalPriceItem = device.price*count

    useEffect( () => {
        fetchOneDevice(Basket.id).then(data => setDevice(data))
        basket.setTotalPrice(Basket.id, device.price*count)
    });

    useEffect( () => {
        return function ubdatePrice() {
            basket.setTotalPrice(Basket.id, 0)
        };
    }, [])

    useMemo(() => basket.setBasket(Basket.id, count), [count]);
    

    return (
            <div className="wrapper">
                <div className="itemBasket">
                    <img className="imgBasket" src={process.env.REACT_APP_API_URL + device.img}></img>
                    <div className="counterBasket">
                        <div className="nameBasket">{device.name}</div>
                        <button className="sendOrder" onClick={() => setCount(count - 1)}>-</button>
                        <div className="totalProducts">{count}</div>
                        <button className="sendOrder" onClick={() => setCount(count + 1)}>+</button>
                        <div className="totalCashItem">Price   {totalPriceItem} </div>
                        <button 
                            className="sendOrder" 
                            onClick={() => basket.deleteBasket(Basket.id)}>Х</button>
                    </div>
                </div>
            </div>
    )
});
    

export default Basket
