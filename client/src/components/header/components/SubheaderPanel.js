import React, {useContext, useState} from 'react';
import { ADMIN_ROUTE, INSPIRATIONS_ROUTE, LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE } from '../../../utils/consts';
import {NavLink} from "react-router-dom";
import {observer} from 'mobx-react-lite';
import {Context} from '../../../index';
import {useHistory} from 'react-router-dom';
import { motion, AnimatePresence, } from 'framer-motion';
import './NavBar.sass'

const SubHeader = (props) => {

    const {isVisible, setVisible, mobile} = props;
    

    const {device} = useContext(Context)


    // Animation subHeader

    const listVariants = {
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
            }
        }),
        hidden: { opacity: 0, y: 100, }
    };

    return (
        <>
            <AnimatePresence>
                {
                    isVisible && (
                        <motion.ul 
                            className= {mobile ? "subHeaderPanel subHeaderMobile" : "subHeaderPanel"}
                            onMouseOver={setVisible(true)}
                            animate={{ 
                                y: isVisible ? 0: 40,
                                opacity: isVisible ? 1: 0 
                            }}
                            initial={{ 
                                y: 40,
                                opacity:0
                            }}
                            transition={{ duration: 0.2}}
                            >
                            {device.types.map((type, i) =>
                                <motion.li
                                    active={type.id === device.selectedType.id}
                                    onClick={() => device.setSelectedType(type)}
                                    className="subHeaderPanel_Item" 
                                    key={type.id}
                                    variants={ listVariants }
                                    initial='hidden'
                                    animate='visible'
                                    custom={i}
                                    whileHover={{scale: 1.3}}
                                    transition={{ 
                                        duration: 0.2,
                                        type: "tween"
                                     }}
                                >
                                    <a>{type.name}</a>
                                </motion.li>
                            )}
                        </motion.ul>
                    )
                }
            </AnimatePresence>
        </>
    );
  };
  
  export default SubHeader;


