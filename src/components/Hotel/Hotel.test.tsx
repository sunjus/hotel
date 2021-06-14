import React from "react";
import { render, cleanup } from "@testing-library/react";

import Hotel from './Hotel';

describe("<Hotel />", () => {
  afterAll(cleanup);

  const props = {
    hotelName: "Hotel Hilton",
    online: true
  };

  const { hotelName } = props;

  test("Should render correct name and status when online is set to true", () => {
    const { getByText } = render(<Hotel {...props} />);

    expect(getByText(hotelName)).toBeTruthy();
    expect(getByText("Online")).toBeTruthy();
  });

  test("Should render correct status  when online is set to false", () => {
    const updatedProps = {
      ...props,
      online: false
    };

    const { getByText } = render(<Hotel {...updatedProps} />);

    expect(getByText("Offline")).toBeTruthy();
  });
});