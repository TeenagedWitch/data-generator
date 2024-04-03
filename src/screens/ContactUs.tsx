import React from "react";
import ContactForm from "../components/forms/contact/ContactForm";
import classes from "./Contact.module.css";
import { motion } from "framer-motion";

const ContactUs: React.FC = () => {
  const textHeader = ["Send", "us", "a", "meessage"];
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
        className={classes.contactForm}
      >
        <ContactForm />
      </motion.div>
    </>
  );
};

export default ContactUs;
