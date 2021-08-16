import React, {useState, useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import Navbar from './components/NavBar';
import { useMediaQuery } from 'react-responsive';
import  NavBarMobile  from './components/NavBarMobile';
import Auth from '../../pages/Auth';
import './header.sass';
import { AnimatePresence } from 'framer-motion';

const Header = observer(({Slider}) => {
    const isMobile = useMediaQuery({ maxWidth: 960});

    const [showModal, setShowModal] = useState(false)


    return (
        <div className="header_bg">
            <Auth showModal={showModal} setShowModal={setShowModal}/>
            <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
                {!isMobile && <Navbar setShowModal={setShowModal}/> }
                {isMobile && <NavBarMobile/>}
            </AnimatePresence>
            {Slider == undefined ?
               <div></div>
            :
                <Slider/>  
            }
        </div>
    );
  });
  
  export default Header;