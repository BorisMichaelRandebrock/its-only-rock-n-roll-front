import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import SongListPage from "./SongListPage";

describe("Given the SongListPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should render the SongComponent", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongListPage />
          </Provider>
        </BrowserRouter>
      );
      const testElement = screen.getByRole("button", { name: "i'll take it!" });

      expect(testElement).toBeInTheDocument();
    });
  });
});
