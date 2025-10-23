import React from "react";
import classes from "./meal-grid.module.css";
import MealItem from "./MealsItem";

export type Meals = {
  id: number;
  title: string;
  image: string;
  summary: string;
  slug: string;
  creator: string;
};

const MealsGrid = ({ meals }: { meals: Meals[] }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => {
        return (
          <li key={meal.id}>
            <MealItem {...meal} />
          </li>
        );
      })}
    </ul>
  );
};

export default MealsGrid;
