import DTextForm from './DTextForm';
import React from 'react';
import {motion} from 'framer-motion';

export default function DLandingPage() {
  

    return (
        <motion.div initial={{x: -200, opacity: 0}} animate={{x: 0, opacity: 1}} transition={{duration: 0.5}}>
          <div className="container my-3">
           <DTextForm/>
          </div>
        </motion.div>
    );
}