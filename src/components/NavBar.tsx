import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-semibold">
          John Doe
        </Link>
        <ul className="flex space-x-4 text-sm font-medium">
          <li>
            <a href="#about" className="hover:text-blue-600">
              About
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
