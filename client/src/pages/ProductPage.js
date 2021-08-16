import React, {useState, useEffect, useContext} from 'react';
import {Context} from '../index';
import Header from '../components/header/header';
import Footer from '../components/footer';
import {useParams} from 'react-router-dom';
import { fetchOneDevice } from '../http/deviceApi';
import { observer } from 'mobx-react-lite';
import Image from '../components/imgComponent/img'
import './ProductPage.sass'

const ProductPage = observer( () => {
    const [device, setDevice] = useState({info:[]})
    const [isOpen, setOpen] = useState(false);
    const {id} = useParams()
    const {basket} = useContext(Context)

    const updateOpenHeader = (value) => {
        setOpen(value)
    }


    useEffect( () => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    // device.info.map(info => {
    //     return console.log(info.id, info.title, info.description)
    //    })
    return (
        <div>
            <div className='header_bg'>
                <div className="wrapper">
                    <div className="container_block">
                        {isOpen ? 
                            <div></div>
                            :
                            <Header/>
                        }
                        <div className="productPage_wrap">
                            <article>
                                <Image className='ProductPage_img' Device={device} UpdateOpenHeader={updateOpenHeader}/>
                            </article>
                            <div className="ProductPage_wrap_descr">
                                <h2>{device.name}</h2>
                                {/* <h3>{device.rating}</h3> */}
                                <h2 className="bg_grey">Price: {device.price} $</h2>
                                <div className="bg_grey">We believe that your home AND your payments should be comfortable, so explore our no-interest financing or no-credit needed* lease-to-own!</div>
                                <button
                                    className='ProductPage_btn' 
                                    onClick={() => basket.setBasket(id, 1)}
                                    disabled={basket.basket.some(item => item.id === id)}
                                >
                                    Add to Basket
                                </button>
                                {/* <div>
                                    {device.info.map(info =>
                                        <div key={info.id}>{info.title}:{info.description}</div>
                                    )}
                                </div> */}
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ProductPage

