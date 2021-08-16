import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import './rooms.sass';

const Rooms = () => {
    return (
        <div>
            <Header/>
                <div className="wrapper">
                    <div className="container_block">
                        <div className="rooms_Item">
                                <h1>What Is Your Home Decor Design Style?</h1>
                                <h2>JULY 06, 2021</h2>
                            <img src="https://cdn.shopify.com/s/files/1/0535/0506/5157/articles/Blog-design-style_ec006dd0-c43e-4f9b-b763-acd556b23d51_720x.jpg?v=1625937480"></img>
                            <div>
                                <h3>Whether it's your first home or your fifth, it's still fun to decorate. If you're a first-time homeowner, you might not yet have your personal design style figured out. If you've decorated before, maybe you feel like changing things up with a different look or updating your style to something fresher. Regardless of your situation, here are a few of the most popular home decor design styles to consider.</h3>
                                <h1>Contemporary</h1>
                                <h3>The style we know as contemporary became popular in the second half of the 20th century. This style is characterized by soft, rounded lines. There will be a lot of neutral elements, with pops of bold color. Think of a room that's mostly black and white, but has a red area rug and throw pillows on the couch. Furniture will have a more back-to-basics feel in terms of line, shape, and form. It's a simple, clean look without much embellishment or ornate details.</h3>
                                <h1>Farmhouse</h1>
                                <h3>The rustic, farmhouse style has become quite popular in recent years thanks to Joanna Gaines from HGTV's home remodeling show "Fixer Upper". This style involves a lot of wood elements and evokes a cozy, comfortable feeling in your home. It is a practical style that relies on easy-to-acquire materials, often in neutral colors such as white or gray. Most pieces tend to have a distressed look, whether natural or man-made.</h3>
                                <h1>Modern</h1>
                                <h3>A modern design style will have clean and crisp, yet sharp and stark lines. Color choices will tend to be more plain. Frequently used materials include glass, metal, and steel. Modern furniture tends to be fairly simple. A subset of this design style is called mid-century modern. It is reminiscent of the 1950s and '60s. Essentially, if the piece would look natural on a "Mad Men" set, it's probably part of the mid-century modern design style.</h3>
                                <h1>Traditional</h1>
                                <h3>A traditional look is more easy to come by, as it is essentially however you want to decorate your home. It can include comfortable furniture, classic designs, and casual décor. This style tends towards warmer colors with symmetrical lines. It is a popular design style in today's homes due to its flexibility and acceptance of most pieces.</h3>
                                <h1>Shop with BT Furnishings Today!</h1>
                                <h3>If you're looking to develop your own personal design style, please feel free to stop in and see us at BT Furnishings! Our experts can provide a few helpful questions to get you started and help you choose the best pieces for your home. From large items such as couches and dining table sets, to the smaller ones like wall art and place settings, we can help you design a room that makes you feel happy and comfortable every time you enter it. Give us a call or stop in and see us in the greater DFW area today! If you're not local to us, no worries! You can always shop online and have your items shipped! We would love to help you build the home of your dreams</h3>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    )
}

export default Rooms
