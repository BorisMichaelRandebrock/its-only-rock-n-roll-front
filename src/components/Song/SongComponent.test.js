import { render } from "@testing-library/react";
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
});
