import Link from "next/link";
import React from "react";

const Meals = () => {
  return (
    <>
      <h1 className="text-3xl">Meals</h1>
      <Link href={"/meals/something"}>Meals Slug</Link>
    </>
  );
};

export default Meals;
