import React, { useState, useRef } from "react";
import SequenceForm from "../components/forms/sequenceForms/SequenceForm";
import classes from "./Sequence.module.css";
import { motion } from "framer-motion";

interface SequenceGeneratorProps {}

const Sequence: React.FC<SequenceGeneratorProps> = () => {
  const [startNum, setStartNum] = useState("");
  const [endNum, setEndNum] = useState("");
  const [step, setStep] = useState("");
  const [sequence, setSequence] = useState<string[]>([]);

  const startNumRef = useRef<HTMLInputElement>(null);
  const endNumRef = useRef<HTMLInputElement>(null);
  const stepRef = useRef<HTMLInputElement>(null);

  const generateSequence = () => {
    const start = parseInt(startNumRef.current!.value);
    const end = parseInt(endNumRef.current!.value);
    const stepValue = parseInt(stepRef.current!.value);

    if (isNaN(start) || isNaN(end) || isNaN(stepValue) || stepValue <= 0) {
      alert("Invalid input. Please enter valid numbers.");
      return;
    }

    const newSequence: string[] = [];
    for (let i = start; i <= end; i += stepValue) {
      newSequence.push(i.toString());
    }
    setSequence(newSequence);
  };
  const textHeader = ["Generate", "Your", "Sequence"];

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
        <SequenceForm
          startNum={startNum}
          setStartNum={setStartNum}
          startNumRef={startNumRef}
          stepRef={stepRef}
          endNum={endNum}
          setEndNum={setEndNum}
          step={step}
          endNumRef={endNumRef}
          setStep={setStep}
          generateSequence={generateSequence}
          sequence={sequence}
        />
      </motion.div>
    </>
  );
};

export default Sequence;
