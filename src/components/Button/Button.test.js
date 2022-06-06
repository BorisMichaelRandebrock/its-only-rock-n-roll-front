import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Given the Button component", () => {
  describe("When invoked", () => {
    test("Then a ButtonComponent should be visible in the DOM", () => {
      render(<Button />);

      const theButton = screen.getByRole("button");

      expect(theButton).toBeInTheDocument();
    });
  });

  describe("When invoked with the text 'text`", () => {
    test("Then it should render the text 'text on the rendered Button", () => {
      const expectedButtonText = "text";

      render(<Button text={"text"} />);

      const ButtonText = screen.getByText(expectedButtonText);

      expect(ButtonText).toBeInTheDocument();
    });
  });

  describe("When invoked with primary props", () => {
    test("Then it should render a dark blue background", () => {
      render(<Button styleType={"primary"} />);

      const colorPrimaryButton = screen.getByRole("button");
      expect(colorPrimaryButton).toHaveStyle(`
        background: rgb(66, 174, 186);
        color: rgb(250, 244, 237);
    `);
    });
  });

  test("Then it should render a light blue background", () => {
    render(<Button styleType={"secondary"} />);

    const colorPrimaryButton = screen.getByRole("button");
    expect(colorPrimaryButton).toHaveStyle(`
      background: rgba(145, 217, 217, 0.25);
      color: rgb(66, 174, 186);
    `);
  });
});
