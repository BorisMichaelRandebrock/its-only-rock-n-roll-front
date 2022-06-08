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
        name: "List of Songs",
      });

      expect(testElement).toBeInTheDocument();
    });
  });
});

// describe("Given a SongList component", () => {
//   describe("When invoked", () => {
//     it("Then it should render", () => {
//       const expectedText = "List of Songs";

//       render(
//         <BrowserRouter>
//           <Provider store={store}>
//             <SongList />
//           </Provider>
//         </BrowserRouter>
//       );

//       const result = screen.getByRole("h2");

//       expect(result).toBeInTheDocument(expectedText);
//     });
//   });
// });
