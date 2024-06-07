import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import Form from "./Ui/Form";
import Input from "./Ui/Input";
import Button from "./Ui/Button";
import { changeStatus } from "@/app/actions/todoaction";
import { types } from "@/types/types";

const ChangeTodo = ({todo}:types) => {
    
  return (
    <Form action={changeStatus}>
        <Input
        name="inputId"
        
        value={todo.id}
        type="hidden"
       />
        <Button actionButton type="submit" text={<IoIosCheckmarkCircleOutline/>}/>
    </Form>
  )
}

export default ChangeTodo