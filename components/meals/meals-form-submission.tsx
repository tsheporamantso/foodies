"use client";

import React from "react";
import { useFormStatus } from "react-dom";

const MealsFormSubmit = () => {
  const status = useFormStatus();

  return (
    <button type="submit" disabled={status.pending}>
      {status.pending ? "Submitting..." : "Share Meal"}
    </button>
  );
};

export default MealsFormSubmit;
