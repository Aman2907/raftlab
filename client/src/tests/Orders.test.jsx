import { render, screen } from "@testing-library/react";
import Orders from "../Components/Orders";
import axios from "axios";
import { vi } from "vitest";

vi.mock("axios");

describe("Orders Component", () => {

  test("renders loading text", async () => {

    axios.get.mockResolvedValue({
      data: {
        customerName: "Aman",
        status: "Preparing",
      },
    });

    render(<Orders />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();

  });

});