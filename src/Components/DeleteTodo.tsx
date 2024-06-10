import { types } from "@/types/types";
import React from "react";
import Form from "./Ui/Form";
import Button from "./Ui/Button";
import { GoTrash } from "react-icons/go";
import { deleteTodo } from "@/app/actions/todoaction";

const DeleteTodo = ({ todo }: { todo: types }) => {
  return (
    <Form action={deleteTodo}>
      <input type="hidden" name="inputId" value={todo.id} />
      <Button actionButton text={<GoTrash />} type="submit" />
    </Form>
  );
};

export default DeleteTodo;
