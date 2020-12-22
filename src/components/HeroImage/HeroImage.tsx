import React from "react";
import { Link } from "react-router-dom";
import * as styles from "./heroImage.module.scss"
export interface HeroImageProps {
  imageSrc: string;
  headerText: string;
  buttonText: string;
  buttonLink?: string;
}

const HeroImage = (props: HeroImageProps) => {
  return (
    <div className={`${styles.heroImageContainer} vads-l-row`}>
      <img src={props.imageSrc} className={`${styles.heroImageImage} vads-l-col--12 medium-screen:vads-l-col--6`} alt={props.headerText} data-testId="hero-image" aria-label="hero-image"></img>
      <div className={`${styles.heroImageContent} vads-l-col--12 medium-screen:vads-l-col--6`}>
        <h2>{props.headerText}</h2>
        <Link to="buttonLink">
          <button aria-label="hero-button" data-testid>
            {props.buttonText}
          </button>
        </Link>
      </div>


    </div>
  );
};

export default HeroImage;
