import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import Navbar from './components/NavBar';
import { useMediaQuery } from 'react-responsive';
import  NavBarMobile  from './components/NavBarMobile';
import Auth from '../../pages/Auth';
import Pop_up from '../pop-up/pop-up'
import './header.sass';
import { AnimatePresence } from 'framer-motion';

const Header = observer(({Slider}) => {
    const isMobile = useMediaQuery({ maxWidth: 960});

    const [showModal, setShowModal] = useState(false)

    return (
        <div className="header_bg">
            <Pop_up showModal={showModal} setShowModal={setShowModal} Children={Auth}/>
            <AnimatePresence exitBeforeEnter onExitComplete={() => setShowModal(false)}>
                {!isMobile && <Navbar setShowModal={setShowModal}/> }
                {isMobile && <NavBarMobile setShowModal={setShowModal}/>}
            </AnimatePresence>
            {Slider == undefined ?
               <div></div>
            :
                <Slider isMobile={isMobile}/>  
            }
        </div>
    );
  });
  
  export default Header;