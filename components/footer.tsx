export default function Footer() {
  return (
    <footer className="mt-auto w-full bg-gray-100">
      <div className="container p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 sm:text-center">
          Hobby website of Katy Williamson
        </span>
        <span className="mt-3 flex flex-wrap items-center text-sm font-medium sm:mt-0">
          <a href="/about" className="text-gray-500 no-underline">
            About Me
          </a>
        </span>
      </div>
    </footer>
  );
}
