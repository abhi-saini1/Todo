"use client";
import Form from "./Ui/Form";
import Button from "./Ui/Button";
import Input from "./Ui/Input";
import { motion } from "framer-motion";
import { create } from "@/app/actions/todoaction";
import { useState } from "react";

const itemVariants = {
  OnClick: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
    },
  },
  noClick: {
    opacity: 0,
    y: 20,
    transition: {
      duration: 0.2,
    },
  },
};
const AddTodo = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(true);
    setTimeout(() => {
      setClick(false);
    }, 1000);
  };
  return (
    <Form action={create} className="m-auto w-[600px]">
      <motion.div
        className="flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5,delay: 0.3 }}
      >
        <Input name="input" type="text" placeholder="Add Todo..." />
        <Button type="submit" text="Add" onClick={handleClick}></Button>
      </motion.div>
      <motion.div
        className="mt-4 text-white font-bold flex items-center justify-center"
        initial="noClick"
        animate={click ? "OnClick" : "noClick"}
        variants={itemVariants}
      >
        Todo added!
      </motion.div>
    </Form>
  );
};

export default AddTodo;
