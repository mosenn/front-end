"use client";
import React from "react";
import { SessionProvider } from "next-auth/react";

const Provider = ({ children, sesiion }: any) => {
  return <SessionProvider session={sesiion}>{children}</SessionProvider>;
};

export default Provider;
