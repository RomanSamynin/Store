import React, {useContext, useEffect, useState} from 'react';
import SubHeader from './SubheaderPanel';
import { ADMIN_ROUTE, INSPIRATIONS_ROUTE, SHOP_ROUTE, BASKET_ROUTE, LIKE_ROUTE, ROOMS_ROUTE} from '../../../utils/consts';
import {NavLink} from "react-router-dom";
import {observer} from 'mobx-react-lite';
import {Context} from '../../../index';
import {useHistory} from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
// import jwt_decode from "jwt-decode";
import './NavBar.sass';

const Navbar = observer( ({setShowModal}) => {
    const {user} = useContext(Context)
    const {device} = useContext(Context)
    const history = useHistory()
    const {basket} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }
    
    // Animation header

    const [shouldShowActions, sethouldShowActions] = useState(true);
    const [lastYPos, setLastYPos] = useState(0);

    useEffect(()=> {
        function handleScroll() {
            const yPos = window.scrollY;
            const isScrollingUp = yPos < lastYPos;

            sethouldShowActions(isScrollingUp);
            setLastYPos(yPos)
        }

        window.addEventListener('scroll', handleScroll, false)

        return () => {
        window.removeEventListener('scroll', handleScroll, false)   
        };
        
    }, [lastYPos]);

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
                    <motion.div 
                        className="wrap_Header"
                        animate={{ y: shouldShowActions ? 0 : -70,
                            backgroundColor: isVisible ? "rgb(247,223,205)" : "rgba(252, 252, 252, 0.6)" }}
                        initial={{ y: 0 }}
                        transition={ { 
                            duration: 0.2,
                            type: "tween"
                         }}
                        >
                        <div className="header_row row">
                            <NavLink to={SHOP_ROUTE} className="logo col-1">Funiro.</NavLink>
                            <div className="menu col-3">
                                <nav className="menu_body">
                                    <ul className="menu_body_list">
                                        <li onMouseOver={handleVisibility}
                                            onMouseOut={handleVisibility}><button 
                                                className="menu_body_list_link"
                                                onMouseOver={ arrRotate }
                                                >
                                                    Products
                                                <motion.div 
                                                    className="arrow_down"
                                                    animate={ controls }
                                                    >
                                                </motion.div>
                                            </button>
                                            <SubHeader isVisible={isVisible} setVisible={setVisible}/> 
                                        </li>
                                        <li>
                                            <NavLink
                                            to={ROOMS_ROUTE}
                                            className="menu_body_list_link"
                                            >
                                                Rooms
                                            </NavLink>
                                        </li>
                                        <li><NavLink to={INSPIRATIONS_ROUTE} className="menu_body_list_link">Inspiration</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="searchForm col-4">
                                <form>
                                    <div className="serch_button"></div>
                                    <input onChange={(event) => device.setValue(event.target.value)} type="text" id="filter" placeholder="Search..." />
                                </form>
                            </div>
                            <div className="icon col-1">
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
                                <NavLink to={(basket.basket != null && basket.basket.length >= 1) ? BASKET_ROUTE : SHOP_ROUTE} className="icon_basket">
                                    {basket.basket.length ?
                                        <div className="totalProducts">{basket.basket.length}</div>
                                        :
                                        <div></div>
                                    }
                                </NavLink>
                            </div>
                            {user.isAuth ?
                                <div className="btn_Auth col-2">
                                    {user.userRole == "ADMIN" ?
                                        <button 
                                            className="btn_Auth_item"
                                            onClick={() => history.push(ADMIN_ROUTE)}
                                            >
                                                &
                                        </button>
                                        :
                                        <></>
                                    }
                                    <button 
                                        className="btn_Auth_item btnStyle"
                                        onClick={() => logOut()}
                                        >
                                            Log Out
                                    </button>
                                </div>
                                :
                                <div className="btn_Auth col-1">
                                    <button
                                        className="btn_Auth_item btnStyle" 
                                        onClick={() => setShowModal(true)}
                                    >
                                        Log In
                                    </button>
                                </div>
                            }                      
                        </div> 
                    
                    </motion.div>
                </div>
            </div>
        </div>
    );
});
  
export default Navbar;