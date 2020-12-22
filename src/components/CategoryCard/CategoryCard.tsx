import { CardActionArea, CardMedia } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React from "react";
import { useStyles } from "./CategoryCard.styles";

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
  const classes = useStyles();
  return (
    <Card className={classes.root} onClick={handleClick}>
      <CardActionArea className={classes.cardContent}>
        <CardMedia
          className={classes.media}
          image={image}
          title={`${category} Image`}
        >
          <div className={classes.text}>{category}</div>
        </CardMedia>
      </CardActionArea>
    </Card>
  );
};

export default CategoryCard;
