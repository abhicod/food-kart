import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { MemoryRouter } from "react-router-dom";
import HeaderLogo from "../components/Header/HeaderLogo";
import {Provider} from "react-redux";

describe("header component", () => {
  it("should render the header logo component", () => {
    render(<MemoryRouter><HeaderLogo /></MemoryRouter>);

    const headerLogo = screen.getByRole("img");
    expect(headerLogo).toBeInTheDocument();
  });
  
});
