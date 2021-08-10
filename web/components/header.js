import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="font-bold text-2xl lg:text-4xl" href="#">
                NERR
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link href="/events">
                    <a className="px-4 hover:text-gray-800">Events</a>
                  </Link>

                  <Link href="/about">
                    <a className="px-4 hover:text-gray-800">About</a>
                  </Link>

                  <Link href="/faq">
                    <a className="px-4 hover:text-gray-800">FAQ</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Nav menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="w-full md:hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0"
              id="mobile-menu"
            >
              <div className="display-block p-5">
                <Link href="/">
                  <a className="p-4 hover:text-gray-800 block">Home</a>
                </Link>
                <Link href="/events">
                  <a className="p-4 hover:text-gray-800 block">Events</a>
                </Link>

                <Link href="/about">
                  <a className="p-4 hover:text-gray-800 block">About</a>
                </Link>

                <Link href="/faq">
                  <a className="p-4 hover:text-gray-800 block">FAQ</a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        </div>
      </main>
    </div>
  );
}

export default Header;
