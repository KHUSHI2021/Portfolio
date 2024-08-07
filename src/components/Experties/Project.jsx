import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./Project.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion';
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Project = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>
       <a className="anchor" id="Project"></a>

      <a className="anchor" id="people"></a>

      <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>

        <motion.div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Projects</span>
            <p style={{marginTop: "10px"}}>Some innovative solutions with cutting-edge technologies and a creative mindset.</p>
          </div>
         <a href="https://github.com/KHUSHI2021" className="secondaryText">Explore More Works</a>
        </motion.div>
        <div className={`yPaddings ${css.comments}`}> 
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <li key={comments.id}>

               <div className={`flexCenter ${css.comment}`}> 
                  <p>{comment.comment}</p>
                  <div className={css.line}></div>
                  <div className={css.bio}>
                  <a href={comment.link} target="_blank" rel="noopener noreferrer">
                        {comment.name} 
                   </a>
                    <span>{comment.post}</span>
                  </div>
      </div>

                </li>
              );
            })}
          </Slider>
        </div>


      </motion.div>

    </motion.section>
  );
};

export default Project;