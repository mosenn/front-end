import { screen, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { debug } from "jest-preview";
import preview from "jest-preview";
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
    userEvent.type(inputElement, "example@example.com");

    //* Click the button to add the new value
    userEvent.click(buttonElement);

    //* Verify that the new value is displayed in the list
    const valueElement = screen.getByRole("paragraph", {
      name: /example@example.com/i,
    });
    expect(valueElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass("primary");
  });
});

test("error message is display for invalid email", async () => {
  render(<App />);
  const appElement = screen.getByRole("grid");
  expect(appElement).toBeInTheDocument();
  //*select
  const submitButton = screen.getByText("set value");
  const emailInput = screen.getByRole("textbox");
  const email = "not valid";
  userEvent.type(emailInput, email);
  //*event
  const onChange = fireEvent.change(screen.getByLabelText("Email"));
  userEvent.click(submitButton);

  const errorP = screen.getByRole("erroMessage");
  const textContentEmailError = errorP.textContent = "email most be like this exmapel@gmail.com";
  expect(textContentEmailError).toBe("email most be like this exmapel@gmail.com");
});

test("email is exist", async () => {
  render(<App />);
  const appElement = screen.getByRole("grid");
  expect(appElement).toBeInTheDocument();
  const onChange = fireEvent.change(screen.getByLabelText("Email"));

  const errorP = screen.getByRole("erroMessage");
  errorP.textContent = "email is exist";
  expect(errorP.textContent).toBe("email is exist");
});
