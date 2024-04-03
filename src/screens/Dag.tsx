import React from "react";
import DAGGenerator from "../components/forms/AcyclicGraphForms/DagForms";
import classes from "./Dag.module.css";
import { motion } from "framer-motion";

const Dag: React.FC = () => {
  const textHeader = ["Generate", "Your", "DAG"];
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
        transition={{ transition: "smooth", duration: 3 }}
        className={classes.dagContainer}
      >
        <DAGGenerator />
      </motion.div>
    </>
  );
};

export default Dag;
