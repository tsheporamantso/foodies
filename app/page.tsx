import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <h1
        className="mt-6 text-3xl"
        style={{ color: "white", textAlign: "center" }}
      >
        Time to get started!
      </h1>
      <p className="flex flex-col">
        <Link href={"/meals"}>Meals Page</Link>
        <Link href={"/meals/share"}>Share Meal</Link>
        <Link href={"/community"}>Community Page</Link>
      </p>
    </main>
  );
}
