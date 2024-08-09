import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Link href="/" className="my-4 block no-underline">
        ←&nbsp;Home
      </Link>
      {children}
    </>
  );
}
