"use client";

import { Button, Drawer, Sidebar, TextInput, Footer, Navbar } from "flowbite-react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiChartPie, HiClipboard, HiCollection, HiInformationCircle, HiLogin, HiPencil, HiSearch, HiShoppingBag, HiUsers, HiMenuAlt3, HiTrash } from "react-icons/hi";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const classNames = (...classes) => classes.filter(Boolean).join(" ");

const bubbleVariants = {
  initial: { scale: 1 },
  animate: {
    scale: [1, 1.1, 1],
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const chartVariants = {
  initial: { y: 10, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const AdminDashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [teachers, setTeachers] = useState(JSON.parse(localStorage.getItem("teachers")) || []);
  const [newTeacher, setNewTeacher] = useState({ name: "", uid: "", dateOfJoining: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [dateSearch, setDateSearch] = useState("");

  useEffect(() => {
    localStorage.setItem("teachers", JSON.stringify(teachers));
  }, [teachers]);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const handleDrawerToggle = () => setIsOpen(!isOpen);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleAddTeacher = (e) => {
    e.preventDefault();
    if (newTeacher.name && newTeacher.uid && newTeacher.dateOfJoining) {
      setTeachers((prevState) => [
        ...prevState,
        { ...newTeacher, dateCreated: new Date().toISOString().split("T")[0] }
      ]);
      setNewTeacher({ name: "", uid: "", dateOfJoining: "" });
    }
  };

  const handleSearch = (e) => setSearchTerm(e.target.value);
  const handleDateSearch = (e) => setDateSearch(e.target.value);

  const handleDeleteTeacher = (uid) => {
    setTeachers((prevState) => prevState.filter((teacher) => teacher.uid !== uid));
  };

  const filteredTeachers = teachers.filter(
    (teacher) =>
      (teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      teacher.uid.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (dateSearch ? teacher.dateCreated === dateSearch : true)
  );

  const data = {
    labels: ["Excellent", "Good", "Average", "Poor"],
    datasets: [
      {
        data: [12, 19, 3, 5],
        backgroundColor: ["#4a90e2", "#50e3c2", "#e94e77", "#f5a623"],
        hoverBackgroundColor: ["#357abd", "#36d9a4", "#d74163", "#e4931f"],
        borderWidth: 2,
        borderColor: "#fff",
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: darkMode ? "#e0e0e0" : "#333",
          font: {
            size: 14,
            weight: "600",
          },
        },
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className={classNames(darkMode ? "dark" : "", "flex flex-col h-screen")}>
      {/* Navbar */}
      <Navbar fluid rounded className={classNames(darkMode ? "bg-gray-800" : "bg-white", "shadow-md")}>
        <div className="flex items-center justify-between">
          <Button onClick={toggleDarkMode} className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
            {darkMode ? <MdLightMode size={20} className="text-yellow-400" /> : <MdDarkMode size={20} className="text-gray-800" />}
          </Button>
          <Button onClick={handleDrawerToggle} className="p-2 rounded-md">
            <HiMenuAlt3 size={20} />
          </Button>
        </div>
      </Navbar>

      {/* Drawer */}
      <Drawer open={isOpen} onClose={handleDrawerToggle}>
        <Drawer.Header title="MENU" />
        <Drawer.Items>
          <Sidebar aria-label="Sidebar with multi-level dropdown example" className="[&>div]:bg-transparent [&>div]:p-0">
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} onChange={handleSearch} />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiChartPie}>Dashboard</Sidebar.Item>
                    <Sidebar.Item href="/e-commerce/products" icon={HiShoppingBag}>Products</Sidebar.Item>
                    <Sidebar.Item href="/users/list" icon={HiUsers}>Users list</Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>Sign in</Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>Sign up</Sidebar.Item>
                  </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="https://github.com/themesberg/flowbite-react/" icon={HiClipboard}>Docs</Sidebar.Item>
                    <Sidebar.Item href="https://flowbite-react.com/" icon={HiCollection}>Components</Sidebar.Item>
                    <Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>Help</Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>

      {/* Main Content */}
      <main className={classNames("flex-1 p-8 transition-colors", darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-100 text-gray-900")}>
        {/* Heading */}
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-blue-700 dark:text-blue-400">Admin Dashboard</h1>
        </header>

        {/* Add Teacher Form */}
        <section className="mb-12 max-w-4xl mx-auto">
          <motion.form
            onSubmit={handleAddTeacher}
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-lg font-bold mb-4 text-blue-700 dark:text-blue-400">Add Teacher</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
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
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">UID</label>
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
              <div className="col-span-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date of Joining</label>
                <input
                  type="date"
                  name="dateOfJoining"
                  value={newTeacher.dateOfJoining}
                  onChange={handleInputChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                  required
                />
              </div>
            </div>
            <div className="mt-6">
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-700 transition-transform">
                Add Teacher
              </button>
            </div>
          </motion.form>
        </section>

        {/* Teacher List */}
        <section className="mb-12 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-bold mb-4 text-blue-700 dark:text-blue-400">Teacher List</h3>
            <div className="mb-4 flex space-x-4">
              <input
                type="text"
                placeholder="Search by Name or UID"
                value={searchTerm}
                onChange={handleSearch}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
              <input
                type="date"
                placeholder="Search by Date"
                value={dateSearch}
                onChange={handleDateSearch}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              />
            </div>
            {filteredTeachers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredTeachers.map((teacher, index) => (
                  <motion.div
                    key={index}
                    className="bg-white dark:bg-gray-800 shadow-md border border-gray-200 dark:border-gray-700 relative"
                    initial="initial"
                    animate="animate"
                    variants={bubbleVariants}
                  >
                    <button
                      onClick={() => handleDeleteTeacher(teacher.uid)}
                      className="absolute top-2 right-2 p-1 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                      title="Delete Teacher"
                    >
                      <HiTrash size={20} />
                    </button>
                    <h4 className="text-xl font-semibold">{teacher.name}</h4>
                    <p className="text-gray-600 dark:text-gray-300">UID: {teacher.uid}</p>
                    <p className="text-gray-600 dark:text-gray-300">Date of Joining: {teacher.dateOfJoining}</p>
                    <p className="text-gray-600 dark:text-gray-300">Date Created: {teacher.dateCreated}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 dark:text-gray-300">No teachers added yet.</p>
            )}
          </div>
        </section>

        {/* Pie Chart */}
        <section className="max-w-4xl mx-auto">
          <motion.div
            className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700"
            initial="initial"
            animate="animate"
            variants={chartVariants}
          >
            <h3 className="text-lg font-bold mb-4 text-blue-700 dark:text-blue-400">Teacher Ratings</h3>
            <div className="relative h-64">
              <Pie data={data} options={options} />
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <Footer className="bg-gray-800 dark:bg-gray-900 text-white">
        <div className="text-center p-4">
          &copy; {new Date().getFullYear()} Admin Dashboard. All rights reserved.
        </div>
      </Footer>
    </div>
  );
};

export default AdminDashboard;
