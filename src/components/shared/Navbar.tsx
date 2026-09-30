'use client'
import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/book.ico";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname= usePathname();
  const items = (
  <>
    <li>
      <Link className={pathname.startsWith("/books") ? "text-blue-500" : ""} href="/books">Books</Link>
    </li>
    <li>
      <Link className={pathname === "/listedBooks" ? "text-blue-500" : ""} href="/listedBooks">Listed Books</Link>
    </li>
    <li>
      <Link className={pathname === "/read-books" ? "text-blue-500" : ""} href="/read-books">Read Books</Link>
    </li>
  </>
  );
  return (
    <div className="navbar bg-base-100 container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {items}
          </ul>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/"> <Image src={logo} alt="Logo"></Image></Link>
          <span className="text-xl font-bold"><span className={pathname === "/" ? "text-blue-500" : ""}>Boi</span> Toi</span>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{items}</ul>
      </div>
      <div className="navbar-end gap-2">
        <button className="btn bg-green-500 text-[white] rounded-4xl">Sign in</button>
        <button className="btn bg-blue-400 text-[white] rounded-4xl">Sign up</button>
      </div>
    </div>
  );
};

export default NavBar;
