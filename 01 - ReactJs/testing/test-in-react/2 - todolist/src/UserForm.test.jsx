import UserForm from "./UseForm";
import React from "react";
import { data } from "./data";
import { describe, test, expect } from "vitest";
import { screen, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import user from "@testing-library/user-event";

//*pass
describe("check input and button exist", () => {
  test("checked elements", () => {
    render(<UserForm />);
    const inputs = screen.getAllByRole("textbox");
    const button = screen.getByRole("button");
    expect(inputs).toHaveLength(2);
    expect(button).toBeInTheDocument();
  });
});

//*pass
describe("check input and button exist", () => {
  const argList = [];
  const callback = (...args) => {
    return argList.push(args);
  };
  test("checked elements", () => {
    callback();
    render(<UserForm onUserAdd={callback} />);
    const [nameInput, emailInput] = screen.getAllByRole("textbox");
    user.click(nameInput);
    user.keyboard("mohsen");
    user.click(emailInput);
    user.keyboard("mohsen@gmail.com");

    const button = screen.getByRole("button");
    user.click(button);
    expect(argList).toHaveLength(1);
    expect(argList[0]).toEqual([]);
  });
});

//*pass
test("data array has two objects", () => {
  expect(data).toMatchObject([{}, {}]);
});
//*pass
test("objects has correct properties", () => {
  const expected0 = {
    id: "1",
    name: "mohsen",
    job: "web developer",
  };
  const expected1 = {
    id: "2",
    name: "a",
    job: "ui",
  };
  expect(data[0]).toEqual(expected0);
  expect(data[1]).toEqual(expected1);
});
