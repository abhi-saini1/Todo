import Form from "./Ui/Form"
import Button from "./Ui/Button"
import Input from "./Ui/Input"
import { create } from "@/app/actions/todoaction"
const AddTodo = () => {
  return (
    <Form action={create} className="m-auto w-[600px]">
        <div className="flex">
            <Input
            name="input"
            type="text"
            placeholder="Add Todo..."
            required
            />
            <Button
            type="submit"
            text='Add'
            />
        </div>

    </Form>
  )
}

export default AddTodo