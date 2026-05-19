import { render, screen } from "@testing-library/react";

import Orders from "../Components/Orders";

import { BrowserRouter } from "react-router-dom";

import { vi } from "vitest";

// MOCK useParams
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");

  return {
    ...actual,
    useParams: () => ({
      id: "123",
    }),
  };
});

describe("Orders Component", () => {

  test("renders loading text", () => {

    render(
      <BrowserRouter>
        <Orders />
      </BrowserRouter>
    );

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

  });

});