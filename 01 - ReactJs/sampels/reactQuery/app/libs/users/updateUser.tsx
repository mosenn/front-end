type user = { name: string; phone: string; email: string; id?: string };

export const updateUser = async (user: user) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_ENV_API_URL}/users/${user.id} `,
    {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...user }),
    }
  );
  const res = await data.json();

  return res;
};
