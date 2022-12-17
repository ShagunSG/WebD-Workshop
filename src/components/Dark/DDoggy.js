import { ReactDOM } from "react";
import React from "react";
import {motion} from 'framer-motion';

class DDoggy extends React.Component {
    state = {
        imgLink: [],
    }

    getDogs = () => {
        // https://i.giphy.com/media/xT9DPldJHzZKtOnEn6/giphy.webp
        this.setState((state) => ({
            ...state,
            imgLink: ['https://i.giphy.com/media/xT9DPldJHzZKtOnEn6/giphy.webp', ...state.imgLink]
        }));
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(data => data.json())
            .then(dog => {

                console.log(dog.message);
                this.setState((state) => ({
                    ...state,
                    imgLink: [dog.message, ...state.imgLink]
                }));

                console.log(this.state.imgLink);

            })

    }


    componentDidMount() {
        this.getDogs();
        console.log('mounted')
    }


    render() {
        return (
            <motion.div initial={{ opacity: 0, x: -200 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                <div className='w-screen flex flex-col justify-center items-center overflow-x-hidden space-y-4'>
                    <h1 className="text-5xl mt-8 font-bold uppercase text-white">bow bow!</h1>
                    <img src={this.state.imgLink[0]} alt='doggy' className="h-64 w-64 rounded-lg shadow-xl object-cover" />
                    <h1><span className="text-gray-500 text-white">(Error:404)</span></h1>
                    <h2 className="text-xl text-white">Whoops! Looks like u tried to go somewhere you weren't supposed to.</h2>
                    <p className="text-white">Let's Get you out of here, before it starts biting. Click to go <a href="/" className="text-white decoration-0">Home</a></p>
                </div>
            </motion.div>
        )
    }
}


export default DDoggy;
