import "jest-dom/extend-expect";
import React from "react";
import ReactDOM from "react-dom";
import { fireEvent, render } from "react-testing-library";
import App from "./App";

describe("<App />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("render without crashing", () => {
    render(<App />);
  });

  it("renders 'Hello World'", () => {
    const { getByText } = render(<App />);

    const text = getByText(/hello world/i);

    expect(text).toBeInTheDocument();
  });

  it("greets the team", () => {
    const { getByText } = render(<App />);

    const greetButton = getByText(/greet/i);
    fireEvent.click(greetButton);

    getByText(/hello web students/i);
  });
});
// import "jest-dom/extend-expect"; // install this library
// import React from "react";
// import ReactDOM from "react-dom";
// import { fireEvent, render } from "react-testing-library"; // install the library
// import App from "./App";

// describe("<App />", () => {
//   it("renders without crashing using ReactDOM", () => {
//     const div = document.createElement("div");
//     ReactDOM.render(<App />, div);
//     ReactDOM.unmountComponentAtNode(div);
//   });

//   it("renders without crashing", () => {
//     // explain the render method
//     render(<App />);
//   });

//   it('renders "Hello World"', () => {
//     // explain how the getByText helper works
//     const { getByText } = render(<App />);
//     // we don't care about the casing
//     const text = getByText(/hello world/i);
//     // this nice matcher is provided by jest-dom
//     expect(text).toBeInTheDocument();
//   });

//   it("greets the team", () => {
//     const { getByText } = render(<App />);

//     const greetButton = getByText(/greet/i);
//     fireEvent.click(greetButton);

//     getByText(/hello web students/i);
//   });
// });
