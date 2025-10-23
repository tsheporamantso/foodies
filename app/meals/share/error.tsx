"use client";

const ErrorPage = ({ error }: { error: Error }) => {
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>
        {error?.message ??
          "Failed to create meal. Please also ensure that all fields are completed!."}
      </p>
      ;
    </main>
  );
};

export default ErrorPage;
