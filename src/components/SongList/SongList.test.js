import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import SongList from "./SongList";
import store from "../../redux/store/store";
import { BrowserRouter } from "react-router-dom";

describe("Given the SongList component", () => {
  describe("When it is rendered", () => {
    test("Then it should render the SongComponent", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongList />
          </Provider>
        </BrowserRouter>
      );
      const testElement = screen.getByRole("heading", {
        name: "Songlist",
      });

      expect(testElement).toBeInTheDocument();
    });
  });
});
