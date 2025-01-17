import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { images } from '../../constants';
import { AppWrap } from '../../wrapper';
import './Header.scss';

const scaleVariants = {
  whileInView: { 
    scale: [0, 1],
    opacity: [0, 1],
    transition: { duration: 1, ease: "easeInOut" }
  }
};

const Header = () => {
  return (
    <div className="app__header app__flex">
        <motion.div
          whileInView={{ x: [-100, 0], opacity: [0, 1] }}
          transition={{ duration: 0.5 }}
          className="app__header-info"
        >
          <div className="app__header-badge">
            <div className="badge-cmp app__flex">
              <span>👋</span>
              <div style={{marginLeft: 20 }}>
                <p className="p-text">Hi, I am</p>
                <h1 className="head-text">Praveen</h1>
              </div>
            </div>

            <div className="tag-cmp app__flex">
            <TypeAnimation
              className="p-text"
              style={{ whiteSpace: 'pre-line', display: 'block', fontSize: '1rem' }}
              sequence={[
                `Web Developer\nSalesforce Developer`,
                1000,
                `React Developer\nFreelancer`,
                1000,
                ''
              ]}
              repeat={Infinity}
            />
            </div>
          </div>

        </motion.div>

        <motion.div
          whileInView={{ opacity: [0, 1] }}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__header-img"
        >
          <img src={images.profile} alt="profile-background" />
          <motion.img
            whileInView={{ scale: [0, 1] }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="overlay_circle"
            src={images.circle}
          />
        </motion.div>

        <motion.div
          variant={scaleVariants}
          whileInView={scaleVariants.whileInView}
          className="app__header-circles"
        >
          {[images.javascript, images.salesforce, images.react].map((item, index) => (
            <div className="circle-cmp app__flex" key={`circle-${index}`}>
              <img src={item} alt="circle" />
            </div>
          ))}
        </motion.div>
    </div>
  )
};

export default AppWrap(Header, 'home');