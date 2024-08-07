import React, {  useRef, useState,useEffect } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const menuRef = useRef();
  const [menuOpened, setMenuOpened] = useState(false);
 const headerShadow = useHeaderShadow();

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  }
  )
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setMenuOpened(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      
      viewport={{ once: true, amount: 0.2 }}
      style={{boxShadow: headerShadow}}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
      <div className={css.name}>  <h1><span>K</span>hushi <span>G</span>upta</h1></div>
        <ul
          ref={menuRef}
          className={`flexCenter ${css.menu}`}
          
          style={getMenuStyles(menuOpened)}
        >
          <li><a href="#Home">HOME</a></li>
          <li><a href="#Project">PROJECTS</a></li>
          <li><a href="#Work">EXPERIENCE</a></li>
          <li><a href="#Contact">CONTACT</a></li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          < BiMenuAltRight size={40} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
