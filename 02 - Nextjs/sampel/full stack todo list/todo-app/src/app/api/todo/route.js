import Todo from "../../../../models/todo";
import connecetToDb from "../../../../utils/db";

export const POST = async (req) => {
  const { desc, title } = await req.json();

  try {
    await connecetToDb();
    const todo = await Todo.create({
      title: title,
      desc: desc,
    });

    return new Response(JSON.stringify(todo), {
      message: "todo is created",
      status: 201,
    });
  } catch (err) {
    console.log(err);
  }
};

export const GET = async () => {
  try {
    await connecetToDb();
    const todos = await Todo.find();
    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (err) {
    console.log(err);
    return new Response("faild get todos");
  }
};
