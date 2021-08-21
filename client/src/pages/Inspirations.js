import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './inspiration.sass';

const Inspirations = () => {

    return (
        <div>
            <Header/>
                <div className="wrapper">
                        <div className="container_block">
                            <h1 className="inspiraion_Headers">Ultra Modern Architectural Masterpiece</h1>
                            <iframe className="inspiraion_video" width="900" height="506" src="https://www.youtube.com/embed/NjIkTXmPycY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Inspirations

