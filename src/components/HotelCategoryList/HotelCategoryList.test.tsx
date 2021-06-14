import React from "react";
import { render, cleanup } from "@testing-library/react";

import HotelCategoryList from "./HotelCategoryList";

import mockHotelsArray from "./mock/mock_hotels_array.json";

describe("<HotelCategoryList />", () => {
  afterAll(cleanup);

  const props = {
    title: "Popular Hotels",
    hotelArray: mockHotelsArray
  };

  const { title } = props;

  test("Should render correct title and carousel buttons, and display 3 hotels.", () => {

    const { getByText, getAllByTestId } = render(
      <HotelCategoryList {...props} />
    );

    expect(getByText(title)).toBeTruthy();

    const arrowButtons = getAllByTestId("arrowButton");
    expect(arrowButtons).toBeTruthy();

    const allHotels = getAllByTestId("hotel");
    expect(allHotels.length).toBe(3);
  });
});