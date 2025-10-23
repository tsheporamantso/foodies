import React from "react";
import classes from "./page.module.css";
import { getMeal } from "@/lib/meals";
import Image from "next/image";
import { notFound } from "next/navigation";

type MealsDetailsPageProps = {
  params: {
    mealsSlug: string;
  };
};

const MealsDetailsPage = async ({ params }: MealsDetailsPageProps) => {
  const { mealsSlug } = await params;
  const meal = getMeal(mealsSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br />");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill sizes="33vw" alt={meal.title} src={meal.image} />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
};

export default MealsDetailsPage;
