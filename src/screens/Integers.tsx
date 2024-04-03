import React from "react";
import IntegerForm from "../components/forms/IntegerForms/IntegerForm";
import classes from "./Integer.module.css";
import { motion } from "framer-motion";

const Screen1: React.FC = () => {
  const textHeader = ["Generate", "Your", "List"];
  return (
    <>
      <h1 className={classes.header}>
        {textHeader.map((el, i) => (
          <motion.span
            className={classes.headerText}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 0.25,
              delay: i / 4,
            }}
            key={i}
          >
            {el}
          </motion.span>
        ))}
      </h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ transition: "smooth", duration: 2 }}
        className={classes.integerContainer}
      >
        <IntegerForm />
      </motion.div>
    </>
  );
};
export default Screen1;
