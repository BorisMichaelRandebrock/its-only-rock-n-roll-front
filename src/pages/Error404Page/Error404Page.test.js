import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Error404Page from "./Error404Page";

describe("Given the Erroro404Page component", () => {
  describe("When the component is rendered", () => {
    test("Then the component should render the error message", () => {
      render(
        <BrowserRouter>
          <Error404Page />
        </BrowserRouter>
      );

      const errorMessage = screen.getByText(/Page not found/i);

      expect(errorMessage).toBeInTheDocument();
    });
  });
});
