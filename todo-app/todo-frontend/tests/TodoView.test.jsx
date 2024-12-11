import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import List from "../src/Todos/List";

test("<TodoView />", () => {
  const todo = [
    {
      text: "This is a text",
      done: true,
    },
  ];
  render(<List todos={todo} />);
  expect(screen.getByText("This is a text")).toBeDefined()
});
