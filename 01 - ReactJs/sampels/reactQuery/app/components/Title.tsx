import React from "react";
type propsType = { text: string };
const Title = ({ text }: propsType) => {
  return (
    <div>
      <h1 className="my-4 md:mx-3 text-2xl text-gray-700">{text}</h1>
    </div>
  );
};

export default Title;
