"use client";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>
        {error?.message ?? "Failed to fetch meal data. Please try again later."}
      </p>
      ;
    </main>
  );
};

export default ErrorPage;
