import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import CreateTodo from "@/app/pages/create-todo/page";
import { useRouter } from "next/navigation";

fetchMock.enableMocks();
//  useRouter is mocked
jest.mock("next/navigation");
describe("create todo", () => {
  //* create todo must be rendered
  //  useRouter is mocked
  let pushMock: any;
  beforeEach(() => {
    pushMock = jest.fn();
    (useRouter as jest.MockedFunction<any>).mockReturnValue({
      push: pushMock,
    });
  });

  it("should render the form, submit button, and input fields correctly.", () => {
    render(<CreateTodo />);
    const form = screen.getByRole("form");
    const button = screen.getByRole("button", { name: "Create Todo" });
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach((inp) => {
      expect(inp).toBeInTheDocument();
    });
    expect(form).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("updates the todo state when inputs change", () => {
    render(<CreateTodo />);
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach((inp) => {
      fireEvent.change(inp, { target: { value: "test value" } });
      expect(inp).toHaveValue("test value");
    });
  });

  //* submit form and redirect to home pate => test is passed
  it("submits the form and redirects on successful response", async () => {
    // * this two  way
    const mockResponse = {
      ok: true,
      json: jest.fn().mockResolvedValue({}),
    } as unknown as Response;
    jest.spyOn(global, "fetch").mockResolvedValueOnce(mockResponse);
    render(<CreateTodo />);

    // * this one way
    // global.fetch = jest.fn().mockResolvedValueOnce({
    //   ok: true,
    //   json: jest.fn().mockResolvedValue({}),
    // });
    const formElement = screen.getByRole("button", { name: "Create Todo" });
    fireEvent.submit(formElement);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(fetch).toHaveBeenCalledWith("/api/todo", {
      method: "POST",
      body: JSON.stringify({ title: "", desc: "" }),
    });

    // * this worked for redirect
    expect(pushMock).toHaveBeenCalledWith("/");
  });

  //* if sumbit for we dont have be true response

  it("does not submit the form on failed response", async () => {
    render(<CreateTodo />);

    global.fetch = jest.fn().mockResolvedValueOnce({
      ok: false,
      json: jest.fn().mockResolvedValueOnce({}),
    });

    const inputs = screen.getAllByRole("textbox");

    inputs.forEach((inp) => {
      fireEvent.change(inp, { target: { value: "test value" } });
      expect(inp).toHaveValue("test value");
    });
    const formElement = screen.getByRole("button", { name: "Create Todo" });
    fireEvent.submit(formElement);

    await waitFor(() => expect(fetch).toHaveBeenCalledTimes(1));
    expect(fetch).toHaveBeenCalledWith("/api/todo", {
      method: "POST",
      body: JSON.stringify({ title: "test value", desc: "test value" }),
    });
    // const pushMock = jest.fn();
    // (useRouter as jest.MockedFn<any>).mockReturnValue({
    //   push: pushMock,
    // });
    expect(pushMock).not.toHaveBeenCalled();
  });
});
