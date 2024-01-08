// console.log(process.env.NEXT_PUBLIC_ENV_API_URL);

export const Users = async (
  page: string | number,
  perPage: string | number
) => {
  const data = await fetch(`${process.env.NEXT_PUBLIC_ENV_API_URL}/users?page=${page}&limit=${perPage}`);
  const res = await data.json();
  // console.log(res);
  return res;
};
