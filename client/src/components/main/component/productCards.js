import React, { useContext } from 'react';
import {Context} from '../../../index';
import './productCards.sass';
import { observer } from 'mobx-react-lite';
import ProductCardsItem from './productCardsItem';
import Pages from './Pages';



const ProductBox = observer( () => {
    const {device} = useContext(Context)
    return (
        <div className="products_box">
            {device.devices.map(device =>
                <ProductCardsItem key={device.id} device={device}/>
            )}
        </div>
    );
});
  
export default ProductBox