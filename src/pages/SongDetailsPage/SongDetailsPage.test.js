import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import SongDetailsPage from "./SongDetailsPage";

describe("Given the SongDetailsPage component", () => {
  describe("When it is rendered", () => {
    test("Then it should render the SongDetailsComponent", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongDetailsPage />
          </Provider>
        </BrowserRouter>
      );

      const testElement = screen.getByText("delete");
      expect(testElement).toBeInTheDocument();
    });
  });
});
