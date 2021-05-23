import { render, fireEvent } from "@testing-library/react";
import CheckIn from "./CheckIn";

import CheckOutView from "./CheckOutView";

it("checkButtonRender", () => {
  const { queryByTitle } = render(<CheckOutView />);
  expect(queryByTitle("back")).toBeTruthy();
});

it("checkButtonRender", () => {
  const { queryByTitle } = render(<CheckIn />);
  expect(queryByTitle("add")).toBeFalsy();
});

jest.mock("react-router", () => ({
  withRouter: jest.fn((Comp) => (props) => <Comp {...props} />),
}));
