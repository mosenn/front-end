import Todo from "../../../../../models/todo";
import connecetToDb from "../../../../../utils/db";

export const PUT = async (req, { params }) => {
  const { title, desc } = await req.json();
  const id = params.id;
  console.log("id in put method for update todo ", params.id);
  try {
    await connecetToDb();
    const todo = await Todo.findByIdAndUpdate(id, {
      title: title,
      desc: desc,
    });

    return new Response(JSON.stringify(todo), {
      message: "todo is updated",
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response(
      { message: "todo update is fail", err: err },
      { status: 500 }
    );
  }
};

export const DELETE = async (req, { params }) => {
  console.log("id in delete todo method", params.id);
  try {
    await connecetToDb();
    const removeTodo = await Todo.findByIdAndRemove(params.id);
    return new Response(JSON.stringify(removeTodo));
  } catch (err) {
    console.log("delete todo err", err);
    return new Response("delete todo is not work server error", {
      status: 500,
    });
  }
};
