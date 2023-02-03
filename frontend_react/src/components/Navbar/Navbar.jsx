import "./Navbar.scss";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { React, useState } from "react";

import { images } from "../../constants";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" width="400px" />
      </div>
      <ul className="app__navbar-links">
        {["home", "work", "contact", "resume"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="app__flex p-text">
          <a
            href="https://github.com/buckspencer"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </li>
        <li className="app__flex p-text">
          <a
            href="https://www.linkedin.com/in/buck-spencer-a3ba33223/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "work", "contact", "resume"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
