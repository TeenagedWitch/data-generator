import React from "react";
import classes from "./Binary.module.css";
import { Link } from "react-router-dom";

interface BinaryProps {
  numNodes: number;
  setNumNodes: (value: number) => void;
  handleSubmit: () => void;
}

const BinaryTreeForms: React.FC<BinaryProps> = ({
  numNodes,
  setNumNodes,
  handleSubmit,
}) => {
  return (
    <div className={classes.binary}>
      <label>
        Number of Nodes:
        <input
          type="number"
          value={numNodes}
          onChange={(e) => setNumNodes(parseInt(e.target.value))}
        />
      </label>
      <div className={classes.buttons}>
        <button onClick={handleSubmit}>Generate</button>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
};

export default BinaryTreeForms;
