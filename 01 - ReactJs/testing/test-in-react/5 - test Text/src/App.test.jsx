import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("Take Hellow Message", () => {
  render(<App />);
  const hellowMessage = screen.getByRole("Hellow");
  expect(hellowMessage.textContent).toBe("Hello react");
});

test("test p tag", () => {
  render(<App />);
  const textp = screen.getByRole("vitest");
  expect(textp.textContent).toBe("this test text with vitest");
});

test("exist button for toggel show message ?!", () => {
  render(<App />);
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

test("should toggel showMessage text on button click", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button");
  const pTag = screen.getByRole("showMessage");
  expect(pTag.textContent).toBe("  hi ✌");
  //* after click state is false then have message bye 👀"
  //* Note :  space is important if you dont have any space on your text
  //* need use one space in test file for text
  fireEvent.click(buttonElement);
  expect(pTag.textContent).toBe("  bye 👀");
});
