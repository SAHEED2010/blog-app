import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  SunIcon,
  MoonIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/solid";

const Navbar = ({ toggleTheme, theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClasses =
    "text-white hover:text-gray-300 dark:hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium transition-colors";
  const activeLinkClasses = "bg-gray-900 dark:bg-gray-700 text-white";

  return (
    <nav
      className={`shadow-lg transition-colors duration-500 ${
        theme === "dark"
          ? "bg-slate-800 text-gray-100"
          : "bg-blue-600 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Left Side */}
          <div className="flex items-center">
            <Link
              to="/"
              className="font-bold text-2xl hover:opacity-80 transition-opacity"
            >
              My Blog
            </Link>

            {/* Desktop Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `${navLinkClasses} ${isActive ? activeLinkClasses : ""}`
                  }
                  end
                >
                  Home
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `${navLinkClasses} ${isActive ? activeLinkClasses : ""}`
                  }
                >
                  Add a new Blog
                </NavLink>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="flex items-center">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 focus:outline-none ${
                theme === "dark"
                  ? "bg-gray-700 hover:bg-gray-600 text-yellow-300"
                  : "bg-blue-500 hover:bg-blue-700 text-white"
              }`}
            >
              {theme === "dark" ? (
                <SunIcon className="h-6 w-6" />
              ) : (
                <MoonIcon className="h-6 w-6" />
              )}
            </button>

            {/* Mobile Menu Button */}
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none ${
                  theme === "dark"
                    ? "text-gray-200 hover:bg-gray-700"
                    : "text-gray-100 hover:bg-blue-500"
                }`}
              >
                {isOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className={`md:hidden transition-colors duration-300 ${
            theme === "dark"
              ? "bg-slate-800 text-white"
              : "bg-blue-600 text-white"
          }`}
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block ${navLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
              onClick={() => setIsOpen(false)}
              end
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `block ${navLinkClasses} ${isActive ? activeLinkClasses : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              Add a new Blog
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
