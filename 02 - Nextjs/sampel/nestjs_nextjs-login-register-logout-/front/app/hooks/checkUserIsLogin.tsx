"use client";
import { userIsLogin } from "../libs/user/userIsLogin";
import { useQuery, useQueryClient } from "react-query";

export const useIsUserLogin = () => {
  const queryClient = useQueryClient();

  const { isLoading, isError, data, error } = useQuery({
    queryKey: ["users"],
    queryFn: userIsLogin,
  });

  console.log(data, "user is login data in hook");
  // اینو می تونیم درون لیبز قسمت ای پی ای مربوط به کاربر ها تعریف کنیم
  const logout = () => {
    // Clear the user data from the cache
    queryClient.setQueryData(["users"], null);
    localStorage.removeItem("token");
  };

  return { isLoading, isError, data, error, logout };
};
