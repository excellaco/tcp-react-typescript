import { render, screen } from "@testing-library/react";
import React from "react";
import CategoryCard from "./CategoryCard";
import healthCareImage from "../../assets/images/healthcare.png";

describe("CategoryCard", () => {
  beforeEach(() => {
    render(<CategoryCard category="Education" image={healthCareImage} />);
  });

  it("renders the category name", () => {
    expect(screen.getByText("Education")).toBeInTheDocument();
  });
});
