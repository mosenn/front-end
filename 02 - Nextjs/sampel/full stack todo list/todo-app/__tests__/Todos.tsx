import { render, screen, fireEvent, act } from "@testing-library/react";
import Todos from "@/app/components/Todos";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

describe("Todos component", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  it("should render todo items", async () => {
    const mockTodoData = [
      {
        _id: "1",
        title: "Todo 1",
        desc: "Description 1",
      },
      {
        _id: "2",
        title: "Todo 2",
        desc: "Description 2",
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockTodoData));

    await act(async () => {
      render(<Todos />);
    });

    // Assert that todo items are rendered
    const todoItems = screen.getAllByRole("section");
    expect(todoItems).toHaveLength(2);

    // Assert that todo item details are rendered correctly
    const todo1Title = screen.getByText("Todo 1");
    expect(todo1Title).toBeInTheDocument();

    const todo1Desc = screen.getByText("Description 1");
    expect(todo1Desc).toBeInTheDocument();

    const todo2Title = screen.getByText("Todo 2");
    expect(todo2Title).toBeInTheDocument();

    const todo2Desc = screen.getByText("Description 2");
    expect(todo2Desc).toBeInTheDocument();

    // Assert that update and delete buttons are rendered for each todo item
    const updateButton = screen.getAllByRole("link", { name: /update todo/i });
    expect(updateButton).toHaveLength(2);

    const deleteButton = screen.getAllByRole("button", {
      name: /delete todo/i,
    });
    expect(deleteButton).toHaveLength(2);
  });

  it("should delete a todo item", async () => {
    const mockTodoData = [
      {
        _id: "1",
        title: "Todo 1",
        desc: "Description 1",
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify(mockTodoData));

    await act(async () => {
      render(<Todos />);
    });

    // Assert that the todo item is rendered
    const todoItem = screen.getByRole("section");
    expect(todoItem).toBeInTheDocument();

    // Mock the delete API response
    fetchMock.mockResponseOnce(JSON.stringify({ _id: "1" }));

    // Simulate a button click on the delete button
    await act(async () => {
      const deleteButtons = screen.getAllByRole("button", {
        name: /delete todo/i,
      });
      fireEvent.click(deleteButtons[0]);
    });

    // Assert that the delete API request is made with the correct URL and method
    expect(fetchMock).toHaveBeenCalledWith("/api/todo/1", {
      method: "DELETE",
    });
    // Assert that the todo item is removed from the rendered list

    const deletedTodoItems = screen.queryAllByRole("section");
    expect(deletedTodoItems.length).toBe(0);
  });
});
