/*import React from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";

import {motion} from 'framer-motion'
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { PiLinkedinLogoBold } from "react-icons/pi";
const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="Contact"></a>     
      
      <motion.div
      variants={footerVariants}
      className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">
            Let's connect <br />
          </span>
          <span className="primaryText">
            Start by <a href="mailto:khushi.gupta110203@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>

        
        <a href="https://www.linkedin.com/in/khushi-gupta-205b9222b/" rel="noopener noreferrer">
     <div className={css.icon}><PiLinkedinLogoBold /> </div></a>

    <a href="https://github.com/KHUSHI2021" rel="noopener noreferrer"> <div className={css.icon}>
              <FaGithub/> </div></a>
             


<a href="https://www.instagram.com/khushi.gupta110203/"  rel="noopener noreferrer">
<div className={css.icon}>
  <FaInstagram/> </div></a>



<a href="https://leetcode.com/u/21111026/" rel="noopener noreferrer">
<div className={css.icon}>
  <SiLeetcode/></div></a>

</div>

      </motion.div>
    </motion.section>
  );
};

export default Footer;

*/
import React, { useState } from "react";
import { footerVariants, staggerChildren } from "../../utils/motion";
import css from "./Footer.module.scss";
import { motion } from 'framer-motion';
import { FaGithub, FaInstagram } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { PiLinkedinLogoBold } from "react-icons/pi";

const Footer = () => {
  const [formData, setFormData] = useState({ name: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Here, you can make an API call to your backend to send the form data
    try {
      const response = await fetch('/api/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', message: '' });
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
  /*  <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <a className="anchor" id="Contact"></a>

      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <div className={css.left}>
          <span className="primaryText">
            Let's connect <br />
          </span>
          <span className="primaryText">
            Start by <a href="mailto:khushi.gupta110203@gmail.com">saying hi</a>
          </span>
        </div>

        <div className={css.right}>
          <a href="https://www.linkedin.com/in/khushi-gupta-205b9222b/" rel="noopener noreferrer">
            <div className={css.icon}><PiLinkedinLogoBold /></div>
          </a>
          <a href="https://github.com/KHUSHI2021" rel="noopener noreferrer">
            <div className={css.icon}><FaGithub /></div>
          </a>
          <a href="https://www.instagram.com/khushi.gupta110203/" rel="noopener noreferrer">
            <div className={css.icon}><FaInstagram /></div>
          </a>
          <a href="https://leetcode.com/u/21111026/" rel="noopener noreferrer">
            <div className={css.icon}><SiLeetcode /></div>
          </a>
        </div>
      </motion.div>

      <motion.div
        variants={footerVariants}
        className={`innerWidth yPaddings flexCenter ${css.container}`}
      >
        <form className={css.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
           // type="email"
            name="email"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Email Id"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </motion.div>
    </motion.section>
  );*/
  <motion.section
  variants={staggerChildren}
  initial="hidden"
  whileInView="show"
  viewport={{ once: false, amount: 0.25 }}
  className={`paddings ${css.wrapper}`}
>
  <a className="anchor" id="Contact"></a>

  <motion.div
    variants={footerVariants}
    className={`innerWidth yPaddings ${css.container}`}
  >
   {/* <div className={css.topSection}> */}
      <div className={css.left}>
        <span className="primaryText">
          Let's connect <br />
        </span>
        <span className="primaryText">
          Start by <a href="mailto:khushi.gupta110203@gmail.com">saying hi</a>
        </span>
      </div>

      <div className={css.form}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email Id"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          />
          <button type="submit">Send Message</button>
        </form>
      </div>

   {/* <div className={css.bottomSection}> */}
      <div className={css.right}>
        <a href="https://www.linkedin.com/in/khushi-gupta-205b9222b/" rel="noopener noreferrer">
          <div className={css.icon}><PiLinkedinLogoBold /></div>
        </a>
        <a href="https://github.com/KHUSHI2021" rel="noopener noreferrer">
          <div className={css.icon}><FaGithub /></div>
        </a>
        <a href="https://www.instagram.com/khushi.gupta110203/" rel="noopener noreferrer">
          <div className={css.icon}><FaInstagram /></div>
        </a>
        <a href="https://leetcode.com/u/21111026/" rel="noopener noreferrer">
          <div className={css.icon}><SiLeetcode /></div>
        </a>
      </div>
  </motion.div>
</motion.section>
);
};

export default Footer;

