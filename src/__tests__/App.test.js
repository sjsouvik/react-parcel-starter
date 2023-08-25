import { render } from "@testing-library/react";
import { App } from "../components/App";
import "@testing-library/jest-dom";

describe("Tests for App component", () => {
  it("should render the app", () => {
    const { getByText } = render(<App />);
    expect(
      getByText(/react starter project powered by parcel/i)
    ).toBeInTheDocument();
  });
});
