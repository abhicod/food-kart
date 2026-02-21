import { describe, it ,expect} from "vitest";
import { render , screen } from "@testing-library/react";
import RestaurantCard from "../components/Body/RestaurantCard";
import { HomeRestaurantList } from "../utils/mockData";


describe("restaurant card component", () => {
    it("should render the restaurant card component using props data", () => {
        render(<RestaurantCard resData={HomeRestaurantList[0]}/>);

        const name = screen.getByText("Domino's Pizza");
        expect(name).toBeInTheDocument();
    });   
});