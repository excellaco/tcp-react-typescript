import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext/AuthContext";
import HeroImage from "./HeroImage";

describe("HeroImage", () => {
  const imageSrc="https://embed-fastly.wistia.com/deliveries/569d582f73005f3dc2604b04f83e4a80.webp?image_crop_resized=1280x720"
  const headerText = "Header Text"
  const buttonText = "Button Text"
  beforeEach(() => {

      render(
        <AuthProvider>
            <BrowserRouter>
              <HeroImage imageSrc={imageSrc} headerText={headerText} buttonText={buttonText}></HeroImage>
            </BrowserRouter>
        </AuthProvider>
      )
  });

  it("renders image by default", () => {
    expect(screen.getByTestId('hero-image')).toBeInTheDocument();
  });

  it("renders header by default", () => {
    expect(screen.getByText(headerText)).toBeInTheDocument();
  });

  it("renders image by default", () => {
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});
