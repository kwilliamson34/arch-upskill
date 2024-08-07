import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <h1>Oops!</h1>
      <h2>Couldn't find the page you're looking for</h2>
      <Link href="/" className="block no-underline my-4">
        ←&nbsp;Home
      </Link>
    </>
  );
}
