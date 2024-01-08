import React from "react";
import Title from "../Title";
import LinkContainer from "../LinkContainer";
import DisplayUser from "../DisplayUser";
type usersType = {
  name: string;
  phone: string;
  email: string;
  id: string;
};

export const HomeUi = ({ dataui }: any) => {
  console.log(dataui);
  const {
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    perPage,
    page,
    prevPage,
    nextPage,
    data,
    isLoading,
  } = dataui;
  return (
    <div>
      <Title text="Welcome 🎉" />
      <div className="md:mx-3">
        <LinkContainer address="/add-user" text="add user " sizeText="2xl" />
      </div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div className=" md:grid md:grid-cols-2 lg:grid-cols-3">
          {data?.map((user: usersType) => {
            const { id } = user;
            return (
              <div key={id}>
                <DisplayUser {...user} />
              </div>
            );
          })}
        </div>
      )}
      <section className="flex justify-center items-center p-3">
        <button onClick={prevPage} disabled={page === 1}>
          <AiOutlineArrowLeft
            size={20}
            fill={+page === 1 && "rgb(200, 200, 200)"}
            className="hover:fill-cyan-600"
          />
        </button>{" "}
        <div className="mx-3 text-xl">{page}</div>
        <button onClick={nextPage}>
          <AiOutlineArrowRight
            className="hover:fill-cyan-600"
            size={20}
            fill={data?.length >= perPage ? "black" : "rgb(200, 200, 200)"}
          />
        </button>
      </section>
    </div>
  );
};
