import AddTodo from "@/Components/AddTodo";
import { prisma } from "@/utils/prisma";
import Todo from "@/Components/Todo";
import Title from "@/Components/Ui/Title";

async function getData() {
  const data = await prisma.todo.findMany({
    select: {
      title: true,
      id: true,
      isCompleted: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}
const Home = async () => {
  const data = await getData();
  return (
    <div className="py-20 flex w-full justify-center flex-col items-center">
     <Title/>

      <div className="flex justify-center py-4 flex-col items-center w-[1000px]">
        <AddTodo />
        <div className="flex flex-col gap-5 items-center justify-center mt-5 w-full">
          {data.map((todo, id) => {
            return (
              <div className="w-full flex items-center justify-center" key={id}>
                <Todo todo={todo} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
