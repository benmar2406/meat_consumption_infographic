import { useRef } from 'react';
import { motion } from 'framer-motion'
import useAnimateOnView from '../../../hooks/useAnimateOnView';
import './EmissionContainer.css'
import EmissionIconContainer from './EmissionIconContainer/EmissionIconContainer';
import MeatIconContainer from '../../MeatIconContainer/MeatIconContainer';
import LeafIconContainer from '../../LeafIconContainer/LeafIconContainer'


const EmissionContainer = ({ food }) => {
    
    const emissionIconWidth = "25px"
    const emissionIconHeight = "25px"
    const minemissionIconbHeight = "20px"
    const minemissionIconWidth = "20xpx"
    const maxemissionIconHeight = "50px"
    const maxemissionIconWidth = "50px"

    const emissionIconAttributes = { 
        emissionIconWidth, 
        emissionIconHeight, 
        minemissionIconbHeight, 
        minemissionIconWidth, 
        maxemissionIconHeight, 
        maxemissionIconWidth 
    }

    const inViewRef = useRef(null)

    const { initial, inViewControls } = useAnimateOnView(inViewRef)

    return(
        <motion.div 
            className='emission-chart-container'
            initial={initial}
            animate={inViewControls}
            ref={inViewRef}
            >
            <div className='kg-text'>
                <span>{food.emissions} kg CO₂e </span>
            </div>
            <div className='emission-container'>
                {Array.from({ length: food.numberOfIcons }, (_, index) => {
                    return( 
                        <EmissionIconContainer 
                            {...emissionIconAttributes} 
                            key={index} 
                            meat={food.meat}
                        />
                    )
                }
            )}
            </div>
            <div className='one-kg-icon'>
                {food.meat ? <MeatIconContainer/> : <LeafIconContainer/>}
                <span>{food.name}</span>
            </div>
        </motion.div>
    )
}
export default EmissionContainer; 