'use client'
import { types } from "@/types/types"
import Input from "./Ui/Input"
import Form from "./Ui/Form"
import Button from "./Ui/Button"
import { FiEdit } from "react-icons/fi";
import { useState } from "react"


const EditTodo = ({todo}:{todo:types}) => {
    const [editTodo, setEditTodo] = useState(false);

    const handleEdit = () =>{
      setEditTodo(!editTodo)
    };

    const handleSubmit = () =>{
      setEditTodo(false);
    }
  return (


    <div className="flex gap-5 items-center">
      <Button onClick={handleSubmit}
      text={<FiEdit/>}
      actionButton/>

      {editTodo ? (
        <Form
        action={edit}
        onSubmit={handleSubmit}
        >
          <Input
          name="inputId"
          value={todo.id}
          type="hidden"
          />
          <div className="flex justify-center">
            <Input
            type="text"
            name="newTitle"
            placeholder="Edit Todo..."
            />
            <Button type="submit" text='Save'/>
          </div>
        </Form>
      ) : null}
        
      
      
    </div>
    
      
    )
  }

export default EditTodo