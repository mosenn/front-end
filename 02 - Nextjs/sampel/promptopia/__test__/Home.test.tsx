// import fetch from 'node-fetch';

// // Rest of your test code...
// import { render, screen } from "@testing-library/react";
// import Home from "@/app/page";
// jest.mock('node-fetch', () => require('node-fetch'));

// describe("Home", () => {
//   it("should be promptopia text in first section comment out ", () => {
//     render(<Home />); //ARRANGE
//     const myElem = screen.getByText("Promptopia"); // ACTion

//     expect(myElem).toBeInTheDocument(); // ASSRET -  check expect
//   });
//   it("found this text 'Promptopia' ", () => {
//     render(<Home />); //ARRANGE

//     //* comment out for toBeGreaterThan(0)
//     // const myElem = screen.queryAllByText(/Promptopia/i); // ACTion

//     //* fount p tag , in p tag text Promptopia
//     const myElem = screen.getByText(/Promptopia/i, { selector: "p" });

//     //* toBeGreaterThan(0); , found first element have text Promptopia
//     // expect(myElem.length).toBeGreaterThan(0);
//     expect(myElem).toBeInTheDocument(); // ASSRET -  check expect

//     // ASSRET -  check expect
//   });

//   it("found Discover & share", () => {
//     render(<Home />); //ARRANGE
//     // in home page have one h1 , in h1 text  Discover & share
//     const myElem = screen.getByRole("heading", {
//       name: "Discover & share",
//     });
//     expect(myElem).toBeInTheDocument(); // ASSRET -  check expect
//   });
// });
