// import APP from "./App";
// import React from "react";
// import { data } from "./data";
// import { describe, test, expect, expectTypeOf } from "vitest";
// import { screen, render } from "@testing-library/react";
// import "@testing-library/jest-dom";
// import user from "@testing-library/user-event";

//*pass
// describe("check input and button exist", () => {
//   test("checked input", () => {
//     render(<APP />);
//     const emailInput = screen.getByRole("textbox");
//     const button = screen.getByRole("button", { name: "set value" });
//     const form = screen.getByRole("form");
//     const div = screen.getByRole("grid");

//     // console.log(emailInput);

//     expect(div).toBeInTheDocument();
//     expect(form).toBeInTheDocument();
//     expect(emailInput).toBeInTheDocument();
//     expect(button).toBeInTheDocument();
//     expect(button).toHaveClass("primary");
//     expect(emailInput).toBeTruthy();
//     expect(emailInput).toBeRequired();
//   });
// });
import { mount } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

//!Todo
//* 1 - create test function
//* 2 - render function you want be test
//* 3 - select Elements with getByRole
//* 4 - if you want check exist element with toBeInTheDocument
//* 5 - call event library used type / click this project
//* 6 - expect if you want happened in the end component

test("adding and rendering new value", async () => {
  render(<App />);
  //* check div in the app
  const appElement = screen.getByRole("grid");
  expect(appElement).toBeInTheDocument();

  it("allows users to add new values to the list", () => {
    //*take input 
    const inputElement = screen.getByRole("textbox");
    //*take input button submit
    const buttonElement = screen.getByRole("button", { name: /set value/i });

    //* Type a new value into the input field
    userEvent.type(inputElement, "new value");

    //* Click the button to add the new value
    userEvent.click(buttonElement);

    //* Verify that the new value is displayed in the list
    const valueElement = screen.getByRole("paragraph", { name: /new value/i });
    expect(valueElement).toBeInTheDocument();
  });
});
