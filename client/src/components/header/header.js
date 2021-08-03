import React from 'react';
import CenterMode from "./components/SimpleSlider";
import Navbar from './components/NavBar';
import { useMediaQuery } from 'react-responsive';
import  NavBarMobile  from './components/NavBarMobile'
import './header.sass';

const Header = () => {

    const isMobile = useMediaQuery({ maxWidth: 768});
    return (
        <div className="header_bg">
            {!isMobile && <Navbar/> }
            {isMobile && <NavBarMobile/>}
            <CenterMode/>
        </div>

    );
  };
  
  export default Header;