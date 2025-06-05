import Link from "next/link";
import { FaUser, FaCode, FaEnvelope } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur shadow">
      <div className="mx-auto flex max-w-5xl items-center justify-between p-4">
        <Link href="/" className="text-xl font-semibold">
          Dasun Sucharith
        </Link>
        <ul className="flex space-x-4 text-sm font-medium">
          <li>
            <a href="#about" className="flex items-center hover:text-blue-600">
              <FaUser className="mr-1" /> About
            </a>
          </li>
          <li>
            <a href="#projects" className="flex items-center hover:text-blue-600">
              <FaCode className="mr-1" /> Projects
            </a>
          </li>
          <li>
            <Link href="/contact" className="flex items-center hover:text-blue-600">
              <FaEnvelope className="mr-1" /> Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
