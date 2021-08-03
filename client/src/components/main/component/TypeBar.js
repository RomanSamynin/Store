import React, {useContext} from 'react'
import {Context} from '../../../index';
import {observer} from 'mobx-react-lite';
import { motion, AnimatePresence, } from 'framer-motion';
import './TypeBar.sass';

const TypeBar = observer( () => {
    const {device} = useContext(Context)
    return (
        <div>
           {device.types.map(type =>
            <motion.div 
                className="typeBar_name"
                key={type.id}
                style={{cursor:'pointer'}}
                active={type.id === device.selectedType.id}
                onClick={() => device.setSelectedType(type)}
                whileHover={{
                    color: "#858585",
                    scale: 1.2
                }}
            >   
                {type.name}
            </motion.div>
            )}
        </div>
    );
});

export default TypeBar
