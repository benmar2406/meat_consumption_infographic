import { useContext, useRef } from 'react';
import { useInView } from "framer-motion";
import { useTranslation } from 'react-i18next';
import { DeviceContext } from '../../context/deviceContext'
import './Intro.css'

function Intro() {

  const { t } = useTranslation();
  const { mobile } = useContext(DeviceContext)
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});

  return (
    <section className='background'>
        <div className='background-overlay'>
          <div className='intro-container'>
            <article className='intro' 
              ref={ref} 
              style={{opacity: isInView || mobile ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}
              >
                <h1>{t('intro.title')}</h1>
                <h2 className="intro-subtitle">{t('intro.subtitle')}</h2>
                <hr className='title-line'/>
                <div dangerouslySetInnerHTML={{__html: t('intro.article'), }}></div>
                <hr className='title-line'/>
            </article>
        </div>
      </div>
    </section>
  )
}

export default Intro;