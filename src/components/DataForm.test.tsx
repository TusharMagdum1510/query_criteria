import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DataForm from "./DataForm";

test("Selecting different elements", () => {
  render(<DataForm />);

  const elements = [
    screen.getByRole("button"),
    screen.getByLabelText("Email"),
    screen.getByPlaceholderText("Red"),
    screen.getByText("Enter Data"),
    screen.getByDisplayValue("email@gmail.com"),
    screen.getByAltText("data"),
    screen.getByTitle(/Click when ready to submit/i),
    screen.getByTestId("image wrapper"),
  ];

  for (const element of elements) {
    expect(element).toBeInTheDocument();
  }
});
