import React from 'react';
import './footer.sass';



const Footer = () => {
    return (
        <>
            <div className="container_block">
                <div className="lineFooter"></div>
                <div className="footer_grid">
                    <div className="footer_Funiro">
                        <h1>Funiro.</h1>
                        <div>Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</div>
                        <div>
                            <div className="map">Sawojajar Malang, Indonesia</div>
                            <div className="phone">+6289 456 3455</div>
                        </div>
                        <div>www.funiro.com</div>
                    </div>
                    <div className="foter_Menu">
                        <h1>Menu</h1>
                        <div>Products</div>
                        <div>Rooms</div>
                        <div>Inspirations</div>
                        <div>About Us</div>
                        <div>Terms & Policy</div>
                    </div>
                    <div className="footer_Account">
                        <h1>Account</h1>
                        <div>My Account</div>
                        <div>Checkout</div>
                        <div>My Cart</div>
                        <div>My catalog</div>
                    </div>
                    <div className="footer_Social">
                        <h1>Stay Connected</h1>
                        <div>Facebook</div>
                        <div>Instagram</div>
                        <div>Twitter</div>
                    </div>
                    <div className="footer_Phone">
                        <h1>Stay Updated</h1>
                        <div className="footer_Input">
                            <input placeholder="Enter your phone..."></input>
                            <button>
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.7825 0.217449C17.6813 0.116704 17.5534 0.046952 17.4139 0.0163941C17.2744 -0.0141638 17.1291 -0.00425713 16.995 0.0449493L0.495001 6.04495C0.352702 6.09892 0.230191 6.19491 0.143739 6.32016C0.0572872 6.44542 0.0109863 6.59401 0.0109863 6.7462C0.0109863 6.89839 0.0572872 7.04698 0.143739 7.17223C0.230191 7.29749 0.352702 7.39348 0.495001 7.44745L6.9375 10.0199L11.6925 5.24995L12.75 6.30745L7.9725 11.0849L10.5525 17.5275C10.6081 17.667 10.7043 17.7866 10.8286 17.8709C10.953 17.9551 11.0998 18.0001 11.25 17.9999C11.4016 17.9968 11.5486 17.9479 11.6718 17.8595C11.795 17.7711 11.8885 17.6475 11.94 17.5049L17.94 1.00495C17.9911 0.872257 18.0034 0.727772 17.9755 0.588342C17.9477 0.448912 17.8807 0.320282 17.7825 0.217449Z" fill="white"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="lineFooter"></div>
                <div className="sign">©RomanSamynin-2021</div>
            </div>
        </>
    )
}

export default Footer;