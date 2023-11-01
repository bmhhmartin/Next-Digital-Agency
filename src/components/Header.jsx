'use client';
import Link from "next/link";import 
{ Button, Navbar } from 'flowbite-react';

function Header() {
  return (
    <section className="relative bg-white ">
      <div className="container mx-auto">
        <nav className="desktop-menu relative py-6 flex justify-between items-center z-10">
          <Link className="text-3xl font-bold leading-none" href="/">
            <img
              className="h-12"
              src="atis-assets/logo/atis/atis-mono-black.svg"
              alt=""
              width="auto"
            />
          </Link>
          <ul className="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-green-600 font-bold hover:font-bold"
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link className="text-sm text-gray-400 hover:text-green-600 font-bold hover:font-bold" href="/team">
                Team
              </Link>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-green-600 font-bold hover:font-bold"
                href="/service"
              >
                Service
              </Link>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-green-600 font-bold hover:font-bold"
                href="/project"
              >
                Project
              </Link>
            </li>
            <li className="text-gray-800">
              <svg
                className="w-4 h-4 current-fill"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                />
              </svg>
            </li>
            <li>
              <Link
                className="text-sm text-gray-400 hover:text-green-600 font-bold hover:font-bold"
                href="/testimonial"
              >
                Testimonials
              </Link>
            </li>
          </ul>
          <a
            className="hidden lg:inline-block py-4 px-6 hover:bg-green-400 bg-green-500 text-sm hover:text-green-200 text-white font-bold rounded-l-xl rounded-t-xl transition duration-200"
            href="#"
          >
            Contact Us
          </a>
        </nav>


        <div class="p-2 mobile-menu">
          <Navbar fluid rounded>
            <Navbar.Brand href="/">
              <img src="atis-assets/logo/atis/atis-mono-black.svg" className="mr-3 h-6 sm:h-9" alt="Logo" />
            </Navbar.Brand>
            <div className="flex md:order-2">
              <Button style={{display: "none"}}>Get started</Button>
              <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
              <Link class="bg-green-500 p-2 w-100 block text-center text-white hover:bg-green-800" href="/">Home</Link>
              <Link class="bg-green-500 p-2 w-100 block text-center text-white hover:bg-green-800" href="/team">Team</Link>
              <Link class="bg-green-500 p-2 w-100 block text-center text-white hover:bg-green-800" href="/service">Services</Link>
              <Link class="bg-green-500 p-2 w-100 block text-center text-white hover:bg-green-800" href="/project">Projects</Link>
              <Link class="bg-green-500 p-2 w-100 block text-center text-white hover:bg-green-800" href="/testimonial">Testimonials</Link>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </section>
  );
}

export default Header;
