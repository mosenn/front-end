// Rest of your test code...
import { render, screen } from "@testing-library/react";
import Home from "@/app/page";
import fetchMock from "jest-fetch-mock";


// Mock the fetch function
fetchMock.enableMocks();

describe("home page", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it("should be have 2 link with text ", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));
    render(<Home />);
    const heading = screen.getByRole("heading", { name: /todo app/i });
    expect(heading).toBeInTheDocument();
  });
  it("should have a link about us ", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    render(<Home />);
    const aboutLink = screen.getByRole("link", { name: /go to about us/i });
    expect(aboutLink).toBeInTheDocument();
    expect(aboutLink).toHaveAttribute("href", "/pages/about");
  });

  it("shold create link", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));

    render(<Home />);
    const createLink = screen.getByRole("link", {
      name: /create todo list/i,
    });
    expect(createLink).toBeInTheDocument();
    expect(createLink).toHaveAttribute("href", "/pages/create-todo");
  });
});
