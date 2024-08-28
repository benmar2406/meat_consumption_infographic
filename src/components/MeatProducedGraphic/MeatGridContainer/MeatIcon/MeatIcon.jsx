import React from 'react';
import { motion } from 'framer-motion';
import meatRed from '../../../../assets/img/icons/meat.png';
import meatGrey from '../../../../assets/img/icons/meat_grey.png';
import '../../MeatProducedChart.css';

const MeatIcon = ({ index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, transform: 'translateY(20px)' }}
      animate={{ opacity: 1, transform: 'translateY(0px)' }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="meat-grid-item"
    >
      <img
        src={meatRed} // Start as grey; change this to meatRed when ready
        alt="Meat Icon"
        className="meat-icon"
      />
    </motion.div>
  );
};

export default MeatIcon;
