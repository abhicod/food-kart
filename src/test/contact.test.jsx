import { render, screen } from "@testing-library/react";
import { describe, it , expect, test } from "vitest";
import Contact from '../components/Body/Contact';


describe("contact component", () =>{
    test("should render contact component heading", () =>{
        render(<Contact />);

        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    it("should render the button on contact page", () =>{
        render(<Contact />);
        const button = screen.getByText("Contact Us");
        expect(button).toBeInTheDocument();
    })
    it("should render the input text box by placeholder text" , () =>{
        render(<Contact />);
        const input = screen.getByPlaceholderText("Enter your name");
        expect(input).toBeInTheDocument();
    })
});

