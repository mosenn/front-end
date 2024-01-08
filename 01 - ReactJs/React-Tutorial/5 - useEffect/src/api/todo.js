export const todo = async (setTodoData) => {
  //* with then fetch
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => setTodoData(json));
  //* with async / await  fetch
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  //     const data = await response.json();
  //     setTodoData(data);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //* with async / await  fetch
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
  }
  //* with axios
};

export const getTodoWithId = async (todoId) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${todoId}`
    );
    const dataTodoWithId = await response.json();
    return dataTodoWithId;
  } catch (err) {
    console.log(err);
  }
};
