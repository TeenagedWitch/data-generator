import React, { ReactNode } from "react";
import classes from "./Layout.module.css";
import Navbar from "../../components/navbar/Navbar";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Navbar />
      <div className={classes.bodyContainer}>{children}</div>
    </div>
  );
};

export default Layout;
