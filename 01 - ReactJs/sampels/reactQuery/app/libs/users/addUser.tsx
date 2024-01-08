type newUserType = { name: string; email: string; phone: string };

export const addUser = async (newUser: newUserType) => {
  // console.log(newUser, " NewUserdata in add user function query file");
  // const { name, email, phone } = newUser;

  const data = await fetch(`${process.env.NEXT_PUBLIC_ENV_API_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newUser),
  });

  const res = await data.json();
  // console.log(res);
  return res;
};
