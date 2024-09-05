"use client";

import React, { useState, useEffect } from "react";
import { Button, Drawer, Sidebar, TextInput, Footer, Navbar, Card } from "flowbite-react";
import { motion } from "framer-motion";
import { HiChartPie, HiClipboard, HiCollection, HiInformationCircle, HiLogin, HiPencil, HiSearch, HiShoppingBag, HiUsers, HiMenuAlt3 } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const AdminDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [teachers, setTeachers] = useState(
    JSON.parse(localStorage.getItem("teachers")) || []
  );
  const [newTeacher, setNewTeacher] = useState({ name: "", photo: "", uid: "" });
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (newTeacher.name && newTeacher.photo && newTeacher.uid) {
      setTeachers((prevState) => [...prevState, newTeacher]);
      setNewTeacher({ name: "", photo: "", uid: "" }); // Reset the form
    }
  };

  return (
    <div className={classNames(darkMode ? "dark" : "", "h-screen flex")}>
      {/* Sidebar */}
      <motion.aside
        className={classNames(
          "fixed top-0 left-0 w-64 bg-gray-800 dark:bg-gray-900 text-white transform transition-transform duration-300",
          menuOpen ? "translate-x-0" : "-translate-x-64",
          "md:translate-x-0 h-full"
        )}
        initial={{ x: "-100%" }}
        animate={{ x: menuOpen ? "0%" : "-100%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 bg-gray-700 dark:bg-gray-800">
            <h1 className="text-lg font-bold">Admin Dashboard</h1>
            <button onClick={toggleDarkMode} className="text-2xl focus:outline-none">
              {darkMode ? (
                <MdLightMode size={24} className="text-yellow-400" />
              ) : (
                <MdDarkMode size={24} className="text-gray-200" />
              )}
            </button>
          </div>
          <ul className="flex-1">
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Home</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Appraisals</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Reports</li>
            <li className="p-4 hover:bg-gray-700 cursor-pointer">Settings</li>
          </ul>
          <div className="p-4 bg-gray-700 dark:bg-gray-800 flex justify-center items-center">
            <Button onClick={() => setDrawerOpen(true)} className="text-2xl md:hidden">
              <HiMenuAlt3 />
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-200 transition-colors duration-300 ml-64 md:ml-0">
        {/* Admin Navbar */}
        <Navbar fluid rounded>
          <Navbar.Brand href="https://flowbite-react.com">
            <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
          </Navbar.Brand>
          <div className="flex md:order-2">
            <Button>Get started</Button>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link href="#" active>
              Home
            </Navbar.Link>
            <Navbar.Link href="#">About</Navbar.Link>
            <Navbar.Link href="#">Services</Navbar.Link>
            <Navbar.Link href="#">Pricing</Navbar.Link>
            <Navbar.Link href="#">Contact</Navbar.Link>
          </Navbar.Collapse>
        </Navbar>

        {/* Add Teacher Form */}
        <section className="mb-12">
          <form onSubmit={handleAddTeacher} className="bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-blue-700 dark:text-blue-400">Add Teacher</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={newTeacher.name}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Teacher Name"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Photo URL
                </label>
                <input
                  type="text"
                  name="photo"
                  value={newTeacher.photo}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Teacher Photo URL"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  UID
                </label>
                <input
                  type="text"
                  name="uid"
                  value={newTeacher.uid}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  placeholder="Teacher UID"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full bg-blue-600 dark:bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700 dark:hover:bg-blue-400"
            >
              Add Teacher
            </button>
          </form>
        </section>

        {/* Teacher Cards */}
        <section>
          <h3 className="text-lg font-bold mb-4 text-blue-700 dark:text-blue-400">Teacher List</h3>
          <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
            {teachers.map((teacher, index) => (
              <Card key={index} className="max-w-sm bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200">
                <div className="flex justify-end px-4 pt-4">
                  <Dropdown inline label="">
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Edit
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Export Data
                      </a>
                    </Dropdown.Item>
                    <Dropdown.Item>
                      <a
                        href="#"
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Delete
                      </a>
                    </Dropdown.Item>
                  </Dropdown>
                </div>
                <div className="flex flex-col items-center pb-10">
                  <img
                    src={teacher.photo}
                    alt={teacher.name}
                    className="mb-3 h-24 w-24 rounded-full shadow-lg"
                  />
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{teacher.name}</h5>
                  <span className="text-sm text-gray-500 dark:text-gray-400">UID: {teacher.uid}</span>
                  <div className="mt-4 flex space-x-3 lg:mt-6">
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg bg-blue-600 dark:bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-700 dark:hover:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
                    >
                      View Status
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 text-center text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-700"
                    >
                      View Details
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer container>
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Flowbite"
            />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="Flowbite™" year={2022} />
        </div>
      </Footer>
    </div>
  );
};

export default AdminDashboard;
