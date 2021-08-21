import React, {useContext, useState} from 'react';
import {Context} from '../index';
import {SHOP_ROUTE} from '../utils/consts';
import {useHistory} from "react-router-dom";
import {registration, login} from '../http/userApi';
import { observer } from 'mobx-react-lite';
import './Auth.sass';

const Auth = observer( ({setShowModal}) => {

    const {user} = useContext(Context)
    const history = useHistory()
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {

        setShowModal(false)
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
        <>
            <h2>{isLogin ? 'Authorization' : 'Registration'}</h2>
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
            <button onClick={click}>{isLogin ? 'log in' : 'Registration'}</button>
            {isLogin ?
                <div>
                    No account? <div className="isLoginLink" onClick={() => setIsLogin(false)}>Registration now!</div>
                </div>
                :
                <div>
                    Have an account? <div className="isLoginLink" onClick={() => setIsLogin(true)}>Log in!</div>
                </div>
            }
        </>
    
    )   
});

export default Auth

