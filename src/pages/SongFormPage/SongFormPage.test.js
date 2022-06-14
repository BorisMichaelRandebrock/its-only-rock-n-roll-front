import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SongForm from "../../components/SongForm/SongForm";
import store from "../../redux/store/store";

describe("Given a SongFormPage", () => {
  describe("When the page is rendered", () => {
    test("Then the page should be rendered", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongForm />
          </Provider>
        </BrowserRouter>
      );

      const testElement = screen.getByRole("heading", {
        name: "add new song",
      });

      expect(testElement).toBeInTheDocument();
    });
  });
});
