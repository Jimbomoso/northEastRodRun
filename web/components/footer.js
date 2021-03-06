import Container from "./container";
import Link from "next/link";
// import { EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-6 pt-10 pb-6">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Links</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <Link href="/faq">
                  <a className="hover:underline text-gray-600 hover:text-orange-500">FAQ</a>
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Legal</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Terms
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Social</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Facebook
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Linkedin
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 text-center md:text-left">
            <h5 className="uppercase mb-6 font-bold">Organization</h5>
            <ul className="mb-4">
              <li className="mt-2">
                <a
                  href="/about"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  About Us
                </a>
              </li>
              <li className="mt-2">
                <a
                  href="#"
                  className="hover:underline text-gray-600 hover:text-orange-500"
                >
                  Contact: northeastrodrun@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
