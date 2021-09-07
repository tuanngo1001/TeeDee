import React from "react";
import { Helmet } from "react-helmet";
import DisplayTodos from "./DisplayTodos";
import Todos from "./Todos";
import "./todos.css";
import { motion } from "framer-motion";

const TodoPage = () => {
  return (
    <div className="todos-div">
      <Helmet>
        <title>TeeDee | Todo</title>
      </Helmet>
      <motion.h1
        initial={{ y: -200 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 0.5 }}
        whileHover={{ scale: 1.1 }}
      >
        Todo List
      </motion.h1>
      <motion.div
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", duration: 1 }}
      >
        <Todos />
        <DisplayTodos />
      </motion.div>
    </div>
  );
};

export default TodoPage;
