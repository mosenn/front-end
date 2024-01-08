import { screen, render } from "@testing-library/react";
import Form from "@/app/components/Form";

describe("should form render", () => {
  render(
    <Form
      submitBtnText="Submit"
      handleSubmit={jest.fn()}
      handleOnchangeInputs={jest.fn()}
      todo={{ title: "", desc: "" }}
    />
  );
  it("should be render in form", () => {
    const form = screen.getByRole("form");

    // * if wanna be take by one by ( test is passed - changes roles inputs in form componet (textbox , textbox2))
    // const titleInput = screen.getByRole("textbox");
    // const descInput = screen.getByRole("textbox2");
    // expect(titleInput).toHaveAttribute("placeholder", "todo title");

    // expect(descInput).toBeInTheDocument();
    // expect(descInput).toHaveAttribute("placeholder", "what to do ?");

    //* if wanna be take with inptus use getAllByRole()
    const inputs = screen.getAllByRole("textbox");
    // * toBeInTheDocument render single elements , getAllByRole returns an array
    // expect(inputs).toBeInTheDocument();
    expect(inputs).toHaveLength(2);
    expect(form).toBeInTheDocument();
    // * test is pass but conver to other it
    // inputs.forEach((input) => {
    //   const placeholder = input.getAttribute("placeholder");
    //   expect(placeholder).toBeTruthy();
    //   expect(input).toBeInTheDocument();
    // });
    // * test is pass but conver to other it

    // const titleInput = screen.getByPlaceholderText("todo title");
    // const descInput = screen.getByPlaceholderText("what to do ?");

    // expect(titleInput).toHaveValue("");
    // expect(descInput).toHaveValue("");
  });

  it("should be inputs have placeholder", () => {
    render(
      <Form
        submitBtnText="Submit"
        handleSubmit={jest.fn()}
        handleOnchangeInputs={jest.fn()}
        todo={{ title: "", desc: "" }}
      />
    );
    const inputs = screen.getAllByRole("textbox");
    // const inputs = screen.getAllByPlaceholderText(/todo title|what to do ?/i);
    inputs.forEach((input) => {
      const placeholder = input.getAttribute("placeholder");
      expect(placeholder).toBeTruthy();
      expect(input).toBeInTheDocument();
    });
  });

  it("should be placeholder inputs have text", () => {
    render(
      <Form
        submitBtnText="Submit"
        handleSubmit={jest.fn()}
        handleOnchangeInputs={jest.fn()}
        todo={{ title: "", desc: "" }}
      />
    );
    // const titleInput = screen.getByPlaceholderText("todo title");
    // const descInput = screen.getByPlaceholderText("what to do ?");

    // expect(titleInput).toHaveValue("");
    // expect(descInput).toHaveValue("");

    //* loop 1 - select palaceholder text as group
    // const inputs = screen.getAllByPlaceholderText(/todo titile|what to do ? /i);
    // inputs.forEach((input) => {
    //   expect(input).toHaveValue("");
    // });
    // * loop 2

    // const inputs = screen.getAllByPlaceholderText(/todo titile|what to do ? /i);
    // const values = inputs.map((input) => (input as HTMLInputElement).value);
    // expect(values).toEqual([""]);

    //* loop 3
    const placeholderTexts = ["todo title", "what to do ?"];

    placeholderTexts.forEach((placeholder) => {
      const input = screen.getByPlaceholderText(placeholder);
      expect(input).toHaveValue("");
    });
  });
});
