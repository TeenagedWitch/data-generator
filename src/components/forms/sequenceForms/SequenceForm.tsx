import React from "react";
import classes from "./Sequence.module.css";
import { Link } from "react-router-dom";

interface SequenceFormProps {
  startNum: string;
  setStartNum: (value: string) => void;
  startNumRef: React.RefObject<HTMLInputElement>;
  stepRef: React.RefObject<HTMLInputElement>;
  endNum: string;
  setEndNum: (value: string) => void;
  step: string;
  endNumRef: React.RefObject<HTMLInputElement>;
  setStep: (value: string) => void;
  generateSequence: () => void;
  sequence: string[];
}

const SequenceForm: React.FC<SequenceFormProps> = ({
  startNum,
  setStartNum,
  startNumRef,
  stepRef,
  endNum,
  setEndNum,
  step,
  endNumRef,
  setStep,
  generateSequence,
  sequence,
}) => {
  const [error, setError] = React.useState<string>("");

  const handleDownload = () => {
    if (sequence.length === 0) {
      alert("No sequence generated yet. Please generate the sequence first.");
      return;
    }

    const sequenceString = sequence.join("\n");

    const blob = new Blob([sequenceString], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "sequence.txt";
    link.click();

    URL.revokeObjectURL(url);
  };

  const generateAndDownloadSequence = () => {
    if (!startNum || !endNum || !step) {
      setError("Please fill in all fields.");
      return;
    }

    generateSequence();
    setError("");
  };

  return (
    <div className={classes.sequenceContainer}>
      <div className={classes.mainSequence}>
        <label>
          Start Number:
          <input
            type="number"
            value={startNum}
            onChange={(e) => setStartNum(e.target.value)}
            ref={startNumRef}
            className={`${classes.inputField} ${
              error && !startNum && classes.inputError
            }`}
          />
        </label>
        <br />
        <label className={classes.number}>
          End Number:
          <input
            type="number"
            value={endNum}
            onChange={(e) => setEndNum(e.target.value)}
            ref={endNumRef}
            className={`${classes.inputField} ${
              error && !endNum && classes.inputError
            }`}
          />
        </label>
        <br />
        <label>
          Step Amount:
          <input
            type="number"
            value={step}
            onChange={(e) => setStep(e.target.value)}
            ref={stepRef}
            className={`${classes.inputField} ${
              error && !step && classes.inputError
            }`}
          />
        </label>
        <br />
        {error && <p className={classes.error}>{error}</p>}
        <div className={classes.buttonContainer}>
          <button onClick={generateAndDownloadSequence}>Generate</button>
          <Link to="/">
            <button>Back</button>
          </Link>
        </div>
        {sequence.length > 0 && (
          <div className={classes.sequence}>
            <h3>Sequence:</h3>
            <p>{sequence.join(", ")}</p>
            <button onClick={handleDownload}>Download Sequence</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SequenceForm;
