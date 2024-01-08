import React from "react";
interface propsType {
  submitBtnText: String;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  todo: { title: string; desc: string };
  handleOnchangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Form = ({
  submitBtnText,
  handleSubmit,
  handleOnchangeInputs,
  todo,
}: propsType) => {
  return (
    <div>
      <form
        role="form"
        onSubmit={handleSubmit}
        action=""
        className="flex flex-col border  border-red-500  justify-center items-center"
      >
        <div className="flex flex-col items-center algin-top w-[fit-content] justify-center border border-gray-500 h-[150px]">
          <input
            className="border border-green-700 p-1 m-3 rounded-sm"
            type="text"
            placeholder="todo title"
            onChange={handleOnchangeInputs}
            name="title"
            value={todo?.title}
            data-testid="title-input"
          />
          <input
            className="border border-green-700 p-1 m-3 rounded-sm"
            type="text"
            placeholder="what to do ?"
            name="desc"
            value={todo?.desc}
            onChange={handleOnchangeInputs}
            data-testid="desc-input"
          />
        </div>
        <button className="p-3 m-2 bg-blue-900 rounded-lg text-white">
          {submitBtnText}
        </button>
      </form>
    </div>
  );
};

export default Form;
