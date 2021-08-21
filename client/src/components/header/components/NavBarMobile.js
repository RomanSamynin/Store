import React, {useContext, useEffect, useState} from 'react';
import SubHeader from './SubheaderPanel';
import { ADMIN_ROUTE, INSPIRATIONS_ROUTE, SHOP_ROUTE, BASKET_ROUTE, LIKE_ROUTE, ROOMS_ROUTE } from '../../../utils/consts';
import {NavLink} from "react-router-dom";
import {observer} from 'mobx-react-lite';
import {Context} from '../../../index';
import {useHistory} from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import jwt_decode from "jwt-decode";
import './NavBarMobile.sass';
import './NavBar.sass';
import { MenuToggle } from './menuToggle';

const NavBarMobile = observer( ({setShowModal}) => {
    const {user} = useContext(Context)
    const {device} = useContext(Context)
    const history = useHistory()
    const {basket} = useContext(Context)

    let role = jwt_decode(localStorage.getItem('token')).role

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

    const [isOpen, setOpen] = useState(false);

    const [isOpenSerch, setOpenSerch] = useState(false);

    const handleSerch = () => setOpenSerch(!isOpenSerch);

    useEffect(()=> {
        if (!isOpen) {
            setOpenSerch(false)
        }
    },);

// Animation arr header
    const controls = useAnimation();
    
    function arrRotate()  {
        controls.start(
            {
                rotate: [360, 0, 0, 0, 0],
                type: "tween",
            }
        )
    }

    const [isVisible, setVisible] = useState(false);

    const handleVisibility = () => setVisible(!isVisible);
  
    return (
        <div className="header">
            <div className="wrapper">
                <div className="container_block">
                    <div 
                        className="wrap_Header-Mobile">
                        <NavLink to={SHOP_ROUTE} className="logo col-1"> Funiro.</NavLink>
                        <div className="icon col-3 left_icon">
                            <NavLink to={(basket.like != null && basket.like.length >= 1) ? LIKE_ROUTE : SHOP_ROUTE}>
                                {(basket.like.length) ?
                                    <svg width="24" height="24" viewBox="0 2 24 24" fill="Red" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9996 21.054C-8 9.99991 5.99999 -2.00009 11.9996 5.58797C18 -2.00009 32 9.99991 11.9996 21.054Z" stroke="Red" stroke-width="1.8"/>
                                    </svg>
                                    :
                                    <svg width="24" height="24" viewBox="0 2 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.9996 21.054C-8 9.99991 5.99999 -2.00009 11.9996 5.58797C18 -2.00009 32 9.99991 11.9996 21.054Z" stroke="Black" stroke-width="1.8"/>
                                    </svg>
                                }
                            </NavLink>
                            <NavLink to={Boolean(basket.basket.length) ? BASKET_ROUTE : SHOP_ROUTE} className="icon_basket">
                                {basket.basket.length ?
                                    <div className="totalProducts">{basket.basket.length}</div>
                                    :
                                    <div></div>
                                }
                            </NavLink>
                        </div>
                        <MenuToggle className="col-1" isOpen={isOpen} toggle={() => setOpen(!isOpen)}/>                  
                    </div>
                    <AnimatePresence exitBeforeEnter>
                        {isOpen &&
                            <div className="Nav_Mobile">
                                <motion.div
                                    onClick={() => setOpen(false)} 
                                    className="Nav_Mobile_bg"
                                    animate={{ opacity: 1 }}
                                    initial={{ opacity: 0 }}
                                    transition={{ 
                                        duration: 0.5,
                                        type: "tween"
                                    }}
                                    exit={{ opacity: 0 }}
                                >
                                </motion.div>
                            </div>
                        }
                    </AnimatePresence>
                    <motion.div 
                        className="Nav_Mobile_content"
                        animate={{ x: isOpen ? 0 : -500 }}
                        initial={{ x: -500 }}
                        transition={ { 
                            duration: 0.5,
                            type: "tween",
                            
                            }}
                        >
                        <div className="menu_Mobile_Wrap">
                            <div className="menu_Mobile_Wrap_Serch">
                                <motion.div 
                                    className="searchFormMobile"
                                    animate={{ opacity: isOpenSerch ? 1 : 0 }}
                                    initial={{ opacity: 0 }}
                                    transform={{ duration: 0.5 }}
                                >
                                    <form>
                                        <input onChange={(event) => device.setValue(event.target.value)} type="text" id="filter" placeholder="" />
                                    </form>
                                </motion.div>
                                <motion.div 
                                    className="serchFormMobile_btn_wrap"
                                    onClick={() => handleSerch()}
                                    animate={{ 
                                        x: isOpenSerch ? 0 : "-50%",
                                        left: isOpenSerch ? 0 : "50%"
                                    }}
                                    initial={{ 
                                        x: "-50%",
                                        left: isOpenSerch ? 0 : "50%" 
                                    }}
                                    transform={{ duration: 0.5 }}
                                >
                                    <div 
                                        className="serchFormMobile_btn"
                                    >                                   
                                    </div>
                                </motion.div>
                            </div>
                            <nav className="menu_Mobile">
                                <ul className="menu_Mobile_Body">
                                    <li 
                                        onMouseOver={handleVisibility}
                                        onMouseOut={handleVisibility}
                                        className="menu_Mobile_Body_Item"
                                    >
                                        <button 
                                        className="menu_Mobile_link left_menu_item"
                                        onMouseOver={ arrRotate }
                                        >
                                            Products
                                        <motion.div 
                                            className="arrow_down"
                                            animate={ controls }
                                            >
                                        </motion.div>
                                        </button>
                                        <SubHeader mobile={true} isVisible={isVisible} setVisible={setVisible}/> 
                                    </li>
                                    <motion.li
                                        className="menu_Mobile_Body_Item"
                                        initial={{ marginTop: 0 }}
                                        animate={{ marginTop: isVisible ? 110 : 0 }}
                                    >
                                        <button 
                                            className="menu_Mobile_link"
                                        >
                                            <NavLink
                                            to={ROOMS_ROUTE}
                                            className="menu_body_list_link"
                                            >
                                                Rooms
                                            </NavLink>
                                        </button>
                                    </motion.li>
                                    <li className="menu_Mobile_Body_Item">
                                        <button 
                                            className="menu_Mobile_link"
                                        >
                                            <NavLink to={INSPIRATIONS_ROUTE} className="menu_Mobile_link">Inspiration</NavLink>
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        {user.isAuth ?
                                <div className="btn_Auth_mobile">
                                    {role == "ADMIN" ?
                                        <button 
                                            className="btn_Auth_item_mobile btn_Auth_item_mobile-left"
                                            onClick={() => {history.push(ADMIN_ROUTE); setOpen(false)}}
                                            >
                                                Admin
                                        </button>
                                        :
                                        <></>
                                    }
                                    <button 
                                        className="btn_Auth_item_mobile"
                                        onClick={() => {logOut(); setOpen(false)}}
                                        >
                                            Log Out
                                    </button>
                                </div>
                                :
                                <div className="btn_Auth_mobile">
                                    <button
                                        className="btn_Auth_item_mobile" 
                                        onClick={() => {setShowModal(true); setOpen(false)}}
                                    >
                                        Log In
                                    </button>
                                </div>
                            } 
                    </motion.div>
                </div>
            </div>
        </div>
    );
});
  
export default NavBarMobile;