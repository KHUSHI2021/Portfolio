import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { GoDownload } from "react-icons/go";
import { WiDirectionUpRight } from "react-icons/wi";
const Hero = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
       <a className="anchor" id="Home"></a>
      <motion.div
        variants={staggerContainer} //child elements going animation one by one otherwise irregular
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span className="primaryText" variants={fadeIn("right", "tween", 0.2, 1)}>
            Hi! I'm Khushi Gupta
            <br />
            <span className={css.nameHighlight}>Full Stack Developer</span>
        
            <br/>
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1) }
          className={css.person}
        >
           <motion.img variants={slideIn("up", "tween", 0.5, 1.3)} src="photo.png" />
        </motion.div>
        <div className={css.lowerElements}>
          <motion.div variants={fadeIn("right", "tween", 0.3, 1)} className={css.experience}>
              <div>Passionate full-stack developer specializing in Next.js, React, JavaScript, html,css,TailwindCSS. I excel in creating robust, scalable applications, and I thrive on tackling complex challenges with innovative solutions</div>
          </motion.div>
          </div>

          <div className={css.Connect}>
        <a className={css.email} href="mailto:khushi.gupta110203@gmail.com"> Get in Touch <div className={css.icon1}>< WiDirectionUpRight /></div>
        </a>  
        <a className={css.Resume} href="https://drive.google.com/file/d/1ojyash_hdxZWrJX3xwtxu21M3Yf4x1g4/view?usp=sharing"
       
        download="Khushi_Gupta_Resume.pdf"
      >
       <span className="resume-text">RESUME</span> <div className={css.icon2}><GoDownload/></div>

        </a>  
        </div>
        
    </motion.div>
    </section>
  );
};

export default Hero;