import { render, screen, fireEvent } from "@testing-library/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import CreatePrompt from "@/app/create-prompt/page";
import Form from "@/app/components/Form";

// const useRouter = jest.spyOn(require("next/router"), "useRouter");
// useRouter.mockImplementation(() => ({
//   pathname: "/",
// }));

jest.mock("next-auth/react", () => ({
  useSession: jest.fn(),
}));

jest.mock("next/router", () => {
  if (typeof window === "undefined") {
    // Running on the server side
    return {
      useRouter: () => ({
        push: jest.fn(),
      }),
    };
  } else {
    // Running on the client side
    const { useRouter } = jest.requireActual("next/router");
    return useRouter;
  }
});

describe("CreatePrompt", () => {
  let useRouterMock;

  beforeEach(() => {
    useRouterMock = jest.spyOn(require("next/router"), "useRouter");
    useRouterMock.mockReturnValue({ push: jest.fn() });

    useSession.mockReturnValue({
      data: { user: { id: "user-id", image: "user-image" } },
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("should render the CreatePrompt page", () => {
    render(<CreatePrompt />);
    const createPromptHeading = screen.getByRole("heading", {
      name: "Create prompt post",
    });

    expect(createPromptHeading).toBeInTheDocument();
  });

  it("should render the Form component", () => {
    render(<CreatePrompt />);
    const formComponent = screen.getByTestId("form-component");

    expect(formComponent).toBeInTheDocument();
  });

  it("should submit the form and redirect to homepage on successful response", async () => {
    const mockFetch = jest.fn().mockResolvedValueOnce({ ok: true });
    global.fetch = mockFetch;

    render(<CreatePrompt />);
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(mockFetch).toHaveBeenCalledWith("/api/prompt/postPrompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: "",
        userId: "user-id",
        tag: "",
        image: "user-image",
      }),
    });
    expect(useRouter().push).toHaveBeenCalledWith("/");
  });

  it("should handle form submission error", async () => {
    const mockFetch = jest
      .fn()
      .mockRejectedValueOnce(new Error("Request failed"));
    global.fetch = mockFetch;

    render(<CreatePrompt />);
    const submitButton = screen.getByRole("button", { name: "Submit" });

    fireEvent.click(submitButton);

    expect(submitButton).toBeDisabled();
    expect(mockFetch).toHaveBeenCalledWith("/api/prompt/postPrompt", {
      method: "POST",
      body: JSON.stringify({
        prompt: "",
        userId: "user-id",
        tag: "",
        image: "user-image",
      }),
    });
    expect(useRouter().push).not.toHaveBeenCalled();
    // Add assertions for error handling, e.g., displaying an error message
  });
});
