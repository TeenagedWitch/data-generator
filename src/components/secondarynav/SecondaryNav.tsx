import React, { useState } from "react";
import NavbarItems from "./NavbarItems";
import { motion, AnimatePresence } from "framer-motion";
import classes from "./Nav.module.css";

const SecondaryNavbar: React.FC = () => {
  const [isToggled, setToggle] = useState(false);

  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <button className={classes.btn} onClick={() => setToggle(!isToggled)}>
        =
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className={classes.navbar}
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <NavbarItems isToggled={isToggled} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default SecondaryNavbar;
