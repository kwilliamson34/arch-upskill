import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <Link href="/" className="block no-underline my-4">
        ←&nbsp;Home
      </Link>
      {children}
    </>
  );
}
