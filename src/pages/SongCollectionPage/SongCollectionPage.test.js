import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import SongCollectionPage from "./SongCollectionPage";

describe("Given the SongCollectionPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should render the SongComponent", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongCollectionPage />
          </Provider>
        </BrowserRouter>
      );
      const testElement = screen.getByRole("heading", {
        name: "List of Songs",
      });

      expect(testElement).toBeInTheDocument();
    });
  });
});
