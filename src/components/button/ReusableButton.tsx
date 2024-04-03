import React from "react";
import classes from "./Reusable.module.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ButtonProperties {
  path: string;
  name: string;
}

const ReusableButton: React.FC<ButtonProperties> = ({ path, name }) => {
  return (
    <Link to={`/${path}`}>
      <motion.button className={classes.btn}>{name}</motion.button>
    </Link>
  );
};

export default ReusableButton;
