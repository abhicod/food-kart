import { fireEvent, render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import HeaderNav from "../components/Header/HeaderNav";
import { Provider } from "react-redux";
import appStore from "../utils/redux/appStore";
import { MemoryRouter } from "react-router-dom";

describe("header nav component", () => {
  it("should have a login button", () => {
    render(
      <MemoryRouter>
        <Provider store={appStore}>
          <HeaderNav />
        </Provider>
      </MemoryRouter>,
    );

    const headerButton = screen.getByText("Login");
    expect(headerButton).toBeInTheDocument();
  });

  it("should header nav with cart items as 0", () => {
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <HeaderNav />
        </MemoryRouter>
      </Provider>,
    );

    const cartItems = screen.getByText("0");
    expect(cartItems.tagName).toBe("P");
    expect(cartItems).toBeInTheDocument();
  });
  it("should change the login button to logout on click", () => {
    render(
      <MemoryRouter>
        <Provider store={appStore}>
          <HeaderNav />
        </Provider>
      </MemoryRouter>,
    );

    const loginButton = screen.getByText("Login");

    fireEvent.click(loginButton);
     
    const logoutButton = screen.getByText("Logout");
    expect(logoutButton).toBeInTheDocument();
  });
});
