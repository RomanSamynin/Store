import React from 'react';
import { motion, AnimatePresence } from "framer-motion";
import '../../pages/Auth.sass';

import { observer } from 'mobx-react-lite';

const Pop_up = observer( ({showModal, setShowModal, Children}) => {
    
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
                        <Children setShowModal={setShowModal}/>
                    </motion.div> 
                </>
            )}
        </AnimatePresence>
    )
});

export default Pop_up;

