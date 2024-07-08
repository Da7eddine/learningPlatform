<<<<<<< HEAD
import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const handleFeedbackClick = () => {
    navigate('/feedback')
  }
=======
import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const Navbar = ({ setSearch, setCategory }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [srch, setsearch] = useState('');

  const handleSearch = () => {
    setSearch(srch);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setCategory(category);
    setDropdownOpen(false);
  };
>>>>>>> 918ef6bfe4ae3921687b1a413e3264fe0dd5dfd5

  return (
    <nav className="bg-blue-600 p-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
<<<<<<< HEAD
        <img src="https://r2.erweima.ai/i/jRTXCGIYQUyj6vG6vuj6xA.jpg" alt="Learniverse Logo" className="h-20" />
        <div className="flex items-center space-x-4">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border rounded-md focus:outline-none"
          />
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
=======
        <div className="text-white text-2xl font-bold">Learniverse</div>
        <div className="flex items-center space-x-4">
          <input
            type="text"
            defaultValue={srch}
            onChange={(e) => setsearch(e.target.value)}
            placeholder="Search..."
            className="px-3 py-2 border rounded-md focus:outline-none"
          />
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleSearch}
          >
>>>>>>> 918ef6bfe4ae3921687b1a413e3264fe0dd5dfd5
            <svg
              className="h-5 w-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.555-4.555M9 17a8 8 0 100-16 8 8 0 000 16z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
<<<<<<< HEAD
=======

>>>>>>> 918ef6bfe4ae3921687b1a413e3264fe0dd5dfd5
      <div className="flex items-center space-x-8">
        <ScrollLink
          to="home"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white hover:text-gray-300 text-lg cursor-pointer"
        >
          Home
        </ScrollLink>
<<<<<<< HEAD
        <ScrollLink
          to="courses"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white hover:text-gray-300 text-lg cursor-pointer"
        >
          Courses
        </ScrollLink>
=======

        {/* Courses dropdown */}
        <div className="relative">
          <button
            id="dropdownDefaultButton"
            onClick={toggleDropdown}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
            aria-expanded={dropdownOpen ? 'true' : 'false'}
          >
            Courses
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdown"
            className={`absolute ${dropdownOpen ? 'block' : 'hidden'} z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
          >
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              <li>
                <ScrollLink
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => handleCategorySelect('Math')}
                >
                  Math
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => handleCategorySelect('Economy')}
                >
                  Economy
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => handleCategorySelect('Management')}
                >
                  Management
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => handleCategorySelect('Science')}
                >
                  Science
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => handleCategorySelect('History&Geography')}
                >
                  History & Geography
                </ScrollLink>
              </li>
              <li>
                <ScrollLink
                  to="courses"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer"
                  onClick={() => handleCategorySelect('Art&Literature')}
                >
                  Art & Literature
                </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
        {/* End of Courses dropdown */}

>>>>>>> 918ef6bfe4ae3921687b1a413e3264fe0dd5dfd5
        <ScrollLink
          to="instructors"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white hover:text-gray-300 text-lg cursor-pointer"
        >
          Instructors
        </ScrollLink>
<<<<<<< HEAD
        <div
          onClick={handleFeedbackClick}
          className="text-white hover:text-gray-300 text-lg cursor-pointer"
        >
          Feedback
        </div>
=======
        <ScrollLink
          to="feedback"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white hover:text-gray-300 text-lg cursor-pointer"
        >
          Feedback
        </ScrollLink>
>>>>>>> 918ef6bfe4ae3921687b1a413e3264fe0dd5dfd5
        <ScrollLink
          to="user-feedbacks"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
          className="text-white hover:text-gray-300 text-lg cursor-pointer"
        >
          User Feedback
        </ScrollLink>
        <Link to="/login" className="text-white hover:text-gray-300 text-lg">Login</Link>
        <Link to="/signup" className="text-white hover:text-gray-300 text-lg">Signup</Link>
      </div>
    </nav>
<<<<<<< HEAD
  )
}
=======
  );
};
>>>>>>> 918ef6bfe4ae3921687b1a413e3264fe0dd5dfd5

export default Navbar
