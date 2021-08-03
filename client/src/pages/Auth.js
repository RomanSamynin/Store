import React, {useContext, useState} from 'react';
import {Context} from '../index';
import Navbar from '../components/header/components/NavBar';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts';
import {NavLink, useLocation, useHistory} from "react-router-dom";
import './Auth.sass';
import {registration, login} from '../http/userApi';
import { observer } from 'mobx-react-lite';

const Auth = observer( () => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
        if (isLogin) {
            const data = await login(email, password)
            User(data);
            
        } else {
            const data = await registration(email, password)
        }
        user.setUser(user)
        user.setIsAuth(true)
        history.push(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }

    }

   function User (data) {
    user.setUserID(data) 
   }

    return (
        <div>
            <div className="header_bg">
            <Navbar/>
                <div className="wrapper">
                    <div className="container_block">
                            <div className="auth_panel">
                                <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                                <input 
                                    placeholder="Email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                >
                                </input>
                                <input 
                                    placeholder="Password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                >
                                </input>  
                                <button onClick={click}>{isLogin ? 'Войти' : 'Регистрация'}</button>
                                {isLogin ?
                                    <div>
                                        Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйтесь!</NavLink>
                                    </div>
                                    :
                                    <div>
                                        Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
                                    </div>
                                }
                            </div> 
                    </div>
                </div>
            </div>
        </div>
    )
});

export default Auth

