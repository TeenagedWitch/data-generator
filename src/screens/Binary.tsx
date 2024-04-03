import React, { useState } from "react";
import classes from "./Binary.module.css";
import BinaryTreeForms from "../components/forms/BinaryTreeForms/BinaryTreeForms";
import { motion } from "framer-motion";

interface TreeNode {
  id: number;
  left?: TreeNode | null;
  right?: TreeNode | null;
}

const generateBinaryTree = (n: number): TreeNode | null => {
  if (n <= 0) return null;

  const generateTreeHelper = (start: number, end: number): TreeNode | null => {
    if (start > end) return null;

    const mid = Math.floor((start + end) / 2);
    const node: TreeNode = { id: mid };

    node.left = generateTreeHelper(start, mid - 1);
    node.right = generateTreeHelper(mid + 1, end);

    return node;
  };

  return generateTreeHelper(1, n);
};

const binaryTreeToVisual = (
  root: TreeNode | null,
  depth: number = 0,
  visual: string[] = []
): void => {
  if (!root) return;

  binaryTreeToVisual(root.right!, depth + 1, visual);

  const value = root.id.toString().padStart(depth * 4 + 2, " ");
  visual.push(value);

  binaryTreeToVisual(root.left!, depth + 1, visual);
};

const BinaryTreeGenerator: React.FC = () => {
  const [numNodes, setNumNodes] = useState<number>(0);
  const [error, setError] = useState<string>("");

  const handleSubmit = (): void => {
    if (numNodes <= 0) {
      setError("Please enter a valid number of nodes.");
      return;
    }

    setError("");

    const treeData = generateBinaryTree(numNodes);

    const visual: string[] = [];
    binaryTreeToVisual(treeData, 0, visual);

    const text = visual.join("\n");

    const blob = new Blob([text], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "binary_tree.txt";
    link.click();
  };

  const textHeader = ["Generate", "Your", "BinaryTree"];

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
        <div className={classes.inputContainer}>
          <BinaryTreeForms
            numNodes={numNodes}
            setNumNodes={setNumNodes}
            handleSubmit={handleSubmit}
          />
          {error && <p className={classes.errorMessage}>{error}</p>}
        </div>
      </motion.div>
    </>
  );
};

export default BinaryTreeGenerator;

// import React, { useState, useRef, FormEvent } from "react";

// interface TreeNode {
//   value: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
// }

// interface BinarySearchTreeGeneratorProps {}

// const BinarySearchTreeGenerator: React.FC<
//   BinarySearchTreeGeneratorProps
// > = () => {
//   const [rangeStart, setRangeStart] = useState("");
//   const [rangeEnd, setRangeEnd] = useState("");
//   const [binaryTree, setBinaryTree] = useState<TreeNode | null>(null);

//   const startNumberRef = useRef<HTMLInputElement>(null);
//   const endNumberRef = useRef<HTMLInputElement>(null);

//   const handleRangeStartChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setRangeStart(e.target.value);
//   };

//   const handleRangeEndChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setRangeEnd(e.target.value);
//   };

//   const generateBinaryTree = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     const start = parseInt(startNumberRef.current!.value);
//     const end = parseInt(endNumberRef.current!.value);

//     if (isNaN(start) || isNaN(end) || start >= end) {
//       alert("Invalid range. Please enter valid start and end values.");
//       return;
//     }

//     const binaryTreeData = generateBinaryTreeData(start, end);
//     setBinaryTree(binaryTreeData);
//   };

//   const generateBinaryTreeData = (
//     start: number,
//     end: number
//   ): TreeNode | null => {
//     const randomBinaryTree: TreeNode = {
//       value: Math.floor(Math.random() * (end - start + 1)) + start,
//       left: null,
//       right: null,
//     };

//     return randomBinaryTree;
//   };

//   const handleDownload = () => {
//     if (!binaryTree) {
//       alert(
//         "No binary tree generated yet. Please generate the binary tree first."
//       );
//       return;
//     }

//     const treeString = generateTreeString(binaryTree);

//     const blob = new Blob([treeString], { type: "text/plain;charset=utf-8" });

//     const url = URL.createObjectURL(blob);

//     const link = document.createElement("a");
//     link.href = url;
//     link.download = "binary_tree.txt";
//     link.click();

//     URL.revokeObjectURL(url);
//   };

//   const generateTreeString = (root: TreeNode | null, level: number = 0) => {
//     if (!root) {
//       return "";
//     }

//     const result: string[] = [];

//     for (let i = 0; i < level; i++) {
//       result.push("  ");
//     }

//     result.push(`${root.value}\n`);

//     result.push(generateTreeString(root.left, level + 1));
//     result.push(generateTreeString(root.right, level + 1));

//     return result.join("");
//   };

//   return (
//     <div>
//       <form onSubmit={generateBinaryTree}>
//         <label>
//           Range Start:
//           <input
//             type="number"
//             value={rangeStart}
//             onChange={handleRangeStartChange}
//             ref={startNumberRef}
//           />
//         </label>
//         <br />
//         <label>
//           Range End:
//           <input
//             type="number"
//             value={rangeEnd}
//             onChange={handleRangeEndChange}
//             ref={endNumberRef}
//           />
//         </label>
//         <br />
//         <button type="submit">Generate Binary Tree</button>
//       </form>
//       {binaryTree && <pre>{generateTreeString(binaryTree)}</pre>}
//       <button onClick={handleDownload}>Download Binary Tree</button>
//     </div>
//   );
// };

// export default BinarySearchTreeGenerator;
