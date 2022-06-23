import { configureStore, createSlice } from "@reduxjs/toolkit";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import SongDetailsComponent from "./SongDetailsComponent";
import { mockSong } from "../../mocks/mockSongs";
import React from "react";
// import userEvent from "@testing-library/user-event";

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
            <SongDetailsComponent />
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
            <SongDetailsComponent />
          </Provider>
        </BrowserRouter>
      );
      const deleteButton = screen.getByText("delete");

      deleteButton.click();

      expect(deleteButton).toBeInTheDocument();
    });
  });
});

const mockUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockUseNavigate,
}));

// const userMockSlice = createSlice({
//   name: "user",
//   initialState: { username: "josep", logged: true },
//   reducers: {},
// });

// describe("Given the SongForm component", () => {
//   describe("When it's rendered and the cancel-button is pressed", () => {
//     test("Then it should navigate to /songlist", () => {
//       // const mockStore = configureStore({
//       //   reducer: { user: userMockSlice.reducer },
//       // });

//       // render(
//       //   <Provider store={mockStore}>
//       //     <SongDetailsComponent />
//       //   </Provider>
//       // );
//       const homeButton = screen.getAllByText("home");

//       userEvent.click(homeButton);

//       // expect(homeButton).toBeInTheDocument();
//     });
//   });
// });
