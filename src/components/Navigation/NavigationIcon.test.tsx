import React from "react";
import { render, cleanup } from "@testing-library/react";

import NavigationIcon from "./NavigationIcon";

describe("<NavigationIcon />", () => {
  afterAll(cleanup);

  test("Should render correct text", () => {
    const { getByText } = render(<NavigationIcon />);

    expect(getByText("HOTEL")).toBeTruthy();
  });
});