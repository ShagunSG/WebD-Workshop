import DTextForm from './DTextForm';
import React from 'react';
import {motion} from 'framer-motion';

export default function DLandingPage() {
  

    return (
        <motion.div initial={{scale: 0}} animate={{scale: 1}}>
          <div className="container my-3">
           <DTextForm/>
          </div>
        </motion.div>
    );
}