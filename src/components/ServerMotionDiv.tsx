"use client";

import { motion } from "framer-motion";

const ServerMotionDiv = (props: {
  initial?: any;
  animate?: any;
  className?: string;
  children: JSX.Element | String;
}) => {
  return (
    <motion.div
      initial={props.initial}
      animate={props.animate}
      className={props.className}
    >
      {props.children}
    </motion.div>
  );
};

export default ServerMotionDiv;
