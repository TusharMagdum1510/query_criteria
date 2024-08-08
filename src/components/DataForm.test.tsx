import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DataForm from "./DataForm";

test("Selecting different elements", () => {
  render(<DataForm />);
  
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
