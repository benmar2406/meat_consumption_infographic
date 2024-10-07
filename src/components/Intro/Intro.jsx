import react, { useRef } from 'react';
import { useInView } from "framer-motion";
import './Intro.css'

function Intro() {

  const ref = useRef(null)
  const isInView = useInView(ref, {once: true})


  return (
    <div className='background' alt="photography of a butchers place">
        <div className='background-overlay'>
          <div className='intro-container'>
            <article className='intro' 
              ref={ref} 
              style={{opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}
              >
                <h1>Meat on the plate, damage to the earth</h1>
                <h3>1kg - The costs of consumption</h3>
                <hr className='title-line'/>
                <p>A juicy steak, a greasy burger, or crispy chicken—meat remains a staple on plates worldwide today. 
                  Global meat consumption continues to rise annually, and it remains a significant part of many people's diets.</p>
                <p>However, how economically efficient and ecologically sustainable is industrial meat production?</p>
                <p>Explore and uncover the hidden costs of meat consumption for our planet. What effect does just one kg of meat have?</p>
                <hr className='title-line'/>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Intro;