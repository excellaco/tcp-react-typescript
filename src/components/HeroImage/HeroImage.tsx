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
    <div className={styles.heroImageContainer}>
      <img src={props.imageSrc} className={styles.heroImageImage} alt={props.headerText} data-testId="hero-image" aria-label="hero-image"></img>
      <div className={styles.heroImageContent}>
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
