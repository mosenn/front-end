"use client";
import React from "react";
import Title from "../Title";
import LinkContainer from "../LinkContainer";
import usePagenation from "../Pagenation";
// import DisplayUser from "../DisplayUser";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { HomeUi } from "../home ui/HomeUi";

// type usersType = {
//   name: string;
//   phone: string;
//   email: string;
//   id: string;
// };

const HomePageDisplay = () => {
  const { isLoading, data, nextPage, prevPage, page, perPage } =
    usePagenation();
  const uiHomeProps = {
    isLoading,
    data,
    nextPage,
    prevPage,
    page,
    perPage,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
  };
  return <HomeUi dataui={uiHomeProps} />;
};

export default HomePageDisplay;
