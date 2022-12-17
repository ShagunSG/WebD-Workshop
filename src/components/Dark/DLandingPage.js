import DTextForm from './DTextForm';
import React from 'react';
import {motion} from 'framer-motion';

export default function DLandingPage() {
  

    return (
        <motion.div initial={{opacity: 0, x:-200}} animate={{opacity: 1, x:0}} transition={{duration: 0.5}}>
          <div className="container my-3">
           <DTextForm/>
          </div>
        </motion.div>
    );
}