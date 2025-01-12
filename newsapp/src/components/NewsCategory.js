import React, { Component } from "react";
import { NavLink } from "react-router-dom";

const NewsCategory =()=> {
    return (
      <div className="mx-auto max-w-7xl px-6 lg:px-8 sticky top-16 bg-white z-10 w-100">
        <ul className="flex overflow-x-auto  text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
          <li className="me-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`
              }
            >
              General
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              to="/business"
              className={({ isActive }) =>
                `inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`
              }
            >
              Business
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              to="/entertainment"
              className={({ isActive }) =>
                `inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`
              }
            >
              Entertainment
            </NavLink>
          </li>
          <li className="me-2">
            <NavLink
              to="/health"
              className={({ isActive }) =>
                `inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`
              }
            >
              Health
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/science"
              className={({ isActive }) =>
                `inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`
              }
            >
              Science
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/sports"
              className={({ isActive }) =>
                `inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`
              }
            >
              Sports
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/technology"
              className={({ isActive }) =>
                `inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 ${
                  isActive ? "text-blue-600 border-b-2 border-blue-600" : ""
                }`
              }
            >
              Technology
            </NavLink>
          </li>
        </ul>
      </div>
    );
}

export default NewsCategory;
