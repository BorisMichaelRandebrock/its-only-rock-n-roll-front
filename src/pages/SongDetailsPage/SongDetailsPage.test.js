import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockSong } from "../../mocks/mockSongs";
import SongDetailsPage from "./SongDetailsPage";

describe("Given a SongDetailsComponent, when rendered the SongDetailsPage", () => {
  describe("When it is rendered", () => {
    test("Then it should render the SongDetailsComponent", () => {
      const songMockSlice = createSlice({
        name: "oneSong",
        initialState: mockSong,
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { oneSong: songMockSlice.reducer },
      });

      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <SongDetailsPage />
          </Provider>
        </BrowserRouter>
      );

      const testElement = screen.getByText("details");
      expect(testElement).toBeInTheDocument();
    });
  });
  describe("When the user clicks the delete-button", () => {
    test("Then it should delete the song", () => {
      const songMockSlice = createSlice({
        name: "oneSong",
        initialState: mockSong,
        reducers: {},
      });

      const mockStore = configureStore({
        reducer: { oneSong: songMockSlice.reducer },
      });
      render(
        <BrowserRouter>
          <Provider store={mockStore}>
            <SongDetailsPage />
          </Provider>
        </BrowserRouter>
      );
      const deleteButton = screen.getByText("delete");

      deleteButton.click();

      expect(deleteButton).toBeInTheDocument();
    });
  });
});
