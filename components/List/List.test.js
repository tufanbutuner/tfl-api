import { render, screen, waitFor } from "@testing-library/react";

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

describe("Trains on arrivals list appear", () => {
  test("shows arriving train", () => {
    render(<List />);
    const arrivingTrain = screen.findAllByTestId("time-to-station");
    waitFor(() => expect(arrivingTrain).toBeInTheDocument());
  });
});
