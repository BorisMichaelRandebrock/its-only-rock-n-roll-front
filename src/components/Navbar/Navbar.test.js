import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When rendered", () => {
    test("Then it should show add new song at the bottom of the page", () => {
      render(
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      );

      const addNewSong = screen.getByText("add new song");

      expect(addNewSong).toBeInTheDocument();
    });
  });
});
