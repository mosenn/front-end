export const user = async (id: string) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_ENV_API_URL}/users/${id}`
  );
  const response = await data.json();
  return response;
};
