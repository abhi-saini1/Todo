import AddTodo from "@/Components/AddTodo"

const Home = () => {
  return (
    <div className="py-20 flex w-screen justify-center flex-col items-center">
      <h3 className="text-3xl font-extrabold uppercase text-white">To-do-app</h3>

        <div className="flex justify-center py-4 flex-col items-center w-[1000px]">
          <AddTodo/>
        </div>
    </div>
  )
}

export default Home