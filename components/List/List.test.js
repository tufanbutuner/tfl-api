import { render, waitFor } from "@testing-library/react";

import List from "./List";

const mockedResult = {
  data: {
    "Westbound - Platform 1": [
      {
        id: "1",
        towards: "Hammersmith",
        lineName: "Hammersmith & City",
        timeToStation: "Due",
      },
      {
        id: "2",
        towards: "Uxbridge",
        lineName: "Metropolitan",
        timeToStation: "2 min",
      },
    ],
    "Eastbound - Platform 2": [
      {
        id: "3",
        towards: "Barking",
        lineName: "Hammersmith & City",
        timeToStation: "1 min",
      },
      {
        id: "4",
        towards: "Edgware Road (Circle)",
        lineName: "Circle",
        timeToStation: "3 min",
      },
    ],
  },
};

// eslint-disable-next-line import/no-anonymous-default-export

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(mockedResult),
  })
);

describe("ListComponent", () => {
  test("shows arriving train", () => {
    const id = "time-to-station";
    const { findAllByTestId } = render(<List />);
    const arrivingTrain = findAllByTestId(id);
    waitFor(() => expect(arrivingTrain).toBeInTheDocument());
  });

  test("no trains arriving", () => {
    const id = "no-live-updates";
    const { findByTestId } = render(<List />);
    const noArrivals = findByTestId(id);
    waitFor(() => expect(noArrivals).toBeInTheDocument());
  });
});
