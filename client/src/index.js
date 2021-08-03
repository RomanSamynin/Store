import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import UserStore from './store/UserStore';
import DeviceStore from './store/DeviceStore';
import BasketStore from './store/BasketStore';
import 'bootstrap/dist/css/bootstrap.css';

export const Context = createContext(null)

ReactDOM.render(
    <Context.Provider value={{
        user: new UserStore(),
        device: new DeviceStore(),
        basket: new BasketStore()
    }}> 
        <App />
    </Context.Provider>, 
    document.getElementById('root')
);