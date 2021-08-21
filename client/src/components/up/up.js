import { motion, useAnimation } from 'framer-motion';
import {useScrollY} from '../../hooks/useScrollY';
import React, {useEffect} from 'react';
import arr from'./content/Right16px.svg';
import './up.sass';

const Up = () => {
    const controls = useAnimation();
    const y = useScrollY();

    useEffect(()=> {
        controls.start({ opacity: y / document.body.scrollHeight });
    }, [y, controls]);
    
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.div
            className="Up"
            onClick={scrollToTop}
            animate={controls}
            initial={{ opacity: 0 }}
            >
            <img src={arr}></img>
        </motion.div>

    );
  };
  
  export default Up;