import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SongDetailsPage from "../../pages/SongDetailsPage/SongDetailsPage";
import store from "../../redux/store/store";

describe("Given a SongDetailsComponent, when rendered the SongDetailsPage", () => {
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
  describe("When the user clicks the delete-button", () => {
    test("Then it should delete the song", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongDetailsPage />
          </Provider>
        </BrowserRouter>
      );
      const deleteButton = screen.getByText("delete");

      deleteButton.click();
    });
  });
});
