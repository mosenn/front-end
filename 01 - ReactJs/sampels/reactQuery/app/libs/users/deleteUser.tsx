export const deleteUser = async (id: string) => {
  console.log(id, "id in delete user function");
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_ENV_API_URL}/users/${id}`,
    {
      method: "DELETE",
    }
  );
  console.log(await data.json(), "delete data");
};
