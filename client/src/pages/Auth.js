import React, {useContext, useState} from 'react';
import {Context} from '../index';
import Navbar from '../components/header/components/NavBar';
import {REGISTRATION_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from '../utils/consts';
import {NavLink, useLocation, useHistory, Link} from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import './Auth.sass';
import {registration, login} from '../http/userApi';
import { observer } from 'mobx-react-lite';

const Auth = observer( ({showModal, setShowModal}) => {
    const {user} = useContext(Context)
    const location = useLocation()
    const history = useHistory()
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data;
        setShowModal(false)
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

    const backdrop = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    const modal = {
        hidden: {
            x: "50%",
            y: '-100vh',
            opacity: 0
        },
        visible: {
            x: "50%",
            y: '200px',
            opacity: 1,
            transition: { delay: 0.5 }
        }
    }
 
    return (
        <AnimatePresence exitBeforeEnter>
            { showModal && (
                <>
                    <motion.div className="backdrop"
                        onClick={() => setShowModal(false)}
                        variants={backdrop}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
                    </motion.div> 
                    <motion.div 
                        className="auth_panel"
                        variants={modal}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                    >
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
                                Нет аккаунта? <div className="isLoginLink" onClick={() => setIsLogin(false)}>Зарегистрируйтесь!</div>
                            </div>
                            :
                            <div>
                                Есть аккаунт? <div className="isLoginLink" onClick={() => setIsLogin(true)}>Войдите!</div>
                            </div>
                        }
                    </motion.div> 
                </>
            )}
        </AnimatePresence>
    )
});

export default Auth

