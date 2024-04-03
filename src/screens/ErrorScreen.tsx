import React from "react";
import { Link } from "react-router-dom";

const ErrorScreen: React.FC = () => {
  return (
    <div>
      <h1>Error, the page you tried to go to doesn't exist.</h1>
      <Link to="/">
        <button>Go back</button>
      </Link>
    </div>
  );
};

export default ErrorScreen;
