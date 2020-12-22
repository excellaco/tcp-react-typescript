import React from "react";
import * as classes from "./categoryCard.module.scss";

type CategoryCardProps = {
  image: string;
  category: string;
  handleClick?: () => void;
};

const CategoryCard: React.FC<CategoryCardProps> = ({
  image,
  category,
  handleClick,
}) => {
  return (
    <div className={classes.root} onClick={handleClick}>
      <img
        className={classes.media}
        src={image}
        title={`${category} Image`}
      />
      <p className={classes.text}>{category}</p>
    </div>
  );
};

export default CategoryCard;
