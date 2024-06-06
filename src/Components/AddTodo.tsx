import Form from "./Ui/Form"
import Button from "./Ui/Button"
import Input from "./Ui/Input"
const AddTodo = () => {
  return (
    <Form className="m-auto w-[600px]">
        <div className="flex">
            <Input
            name="input"
            type="text"
            placeholder="Add Todo..."
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