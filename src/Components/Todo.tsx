'use client'
import { types } from "@/types/types";
import ChangeTodo from "./ChangeTodo";
import EditTodo from "./EditTodo";
import DeleteTodo from "./DeleteTodo";
import {motion} from 'framer-motion'
const todoVariants ={
  initial:{
    opacity: 0, y: -20,
    transition: {
      duration: 0.8,
      delay: 0.5
    }
  },
  animate:{
    opacity: 1,
    y:0,
    transition: {
      duration: 0.8,
      delay: 0.5
    }
  },
  
  exit:{
    opacity:0,
    y:20,
    transition: {
      duration: 0.5,
      delay: 0.1
    }
  },
  completed: {
    opacity: 0.5,
    textDecoration: 'line-through',
    transition: {
      duration: 0.5,
      delay: 0.1
    }
  },
  notCompleted:{
    opacity:1,
    textDecoration:'none',
    transition: {
      duration: 0.5,
      delay: 0.1
    }
  }
}
const Todo = ({ todo }: { todo: types }) => {
  const isCompleted = todo.isCompleted
  // const todoStyle = {
  //   textDecoration: todo.isCompleted === true ? "line-through" : "none",
  //   opacity: todo.isCompleted === true ? 0.5 : 1,
  // };
  return (
    <motion.div
      className=" w-10/12 flex items-center justify-between bg-white py-3 px-20 rounded-2xl"
      variants={todoVariants}
      initial='initial'
      animate='animate'
      exit='exit'
      style={{
        textDecoration: isCompleted ? 'line-through' : 'none',
        opacity: isCompleted ? 0.5 : 1,
      }}
      whileHover={{scale: 1.02}}
    >
      <ChangeTodo todo={todo} />
      <span className="text-center font-bold uppercase">{todo.title}</span>
      <div className="flex items-center gap-5">
        <EditTodo todo={todo} />
        <DeleteTodo todo={todo} />
      </div>
    </motion.div>
  );
};

export default Todo;
