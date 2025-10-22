import Link from "next/link";
import React from "react";

const MealsPage = () => {
  return (
    <>
      <h1 className="text-3xl">MealsPage</h1>
      <Link href={"/meals/something"}>Meals Slug</Link>
    </>
  );
};

export default MealsPage;
