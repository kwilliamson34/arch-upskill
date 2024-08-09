import Link from "next/link";

export default function NotFoundPage() {
  return (
    <>
      <h1>Oops!</h1>
      <h2>Couldn&apos;t find the page you&apos;re looking for</h2>
      <Link href="/" className="block no-underline my-4">
        ←&nbsp;Home
      </Link>
    </>
  );
}
