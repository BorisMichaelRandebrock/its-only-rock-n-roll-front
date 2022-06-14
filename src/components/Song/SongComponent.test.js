import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "../../redux/store/store";
import SongList from "../SongList/SongList";
import SongComponent from "./SongComponent";

describe("Given a SongComponent", () => {
  describe("When rendered", () => {
    test("Then it should render a button", () => {});
    render(
      <BrowserRouter>
        <Provider store={store}>
          <SongList />
          <SongComponent song />
        </Provider>
      </BrowserRouter>
    );
  });
  describe("When the delete-button is clicked", () => {
    test("Then it should delete the song", () => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <SongList />
            <SongComponent song />
          </Provider>
        </BrowserRouter>
      );

      const deleteButton = screen.getByText("delete");
      userEvent.click(deleteButton);

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
