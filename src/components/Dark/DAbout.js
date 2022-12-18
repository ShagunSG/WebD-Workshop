import React from 'react';
import {motion} from 'framer-motion';

export default function DAbout() {
    return (
        <motion.div className="mx-2 my-2 h-[calc(100vh-112px)] w-screen text-xl overflow-y-hidden" initial={{x: -200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5}}>
            <h1 className='text-white'>About us</h1>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            React
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development. The library first appeared in May 2013 and is now one of the most commonly used frontend libraries for web development. 
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Hooks and Routes
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        React-Router is a popular React library that is heavily used for client-side routing and offers single-page routing. It provides various Component APIs( like Route, Link, Switch, etc.) that you can use in your React application to render different components based on the URL pathnames in a single page.
                        Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don’t work inside classes — they let you use React without classes.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            Animation
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                        Framer Motion is a production-ready motion library for React from Framer. It's simple yet powerful, allowing you to express complex user interactions with robust, semantic markup.
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
