import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const teachersData = [
    { name: "John Doe", status: "Active", appraisalStatus: "Pending", lastAppraisal: "2 days ago" },
    { name: "Jane Smith", status: "On Leave", appraisalStatus: "Completed", lastAppraisal: "1 week ago" },
    { name: "Michael Brown", status: "Active", appraisalStatus: "Pending", lastAppraisal: "4 days ago" },
    // Additional teacher data can be added here
];

const AdminDashboard = () => {
    const [isWelcomeScreenVisible, setIsWelcomeScreenVisible] = useState(true);

    const handleContinue = () => {
        setIsWelcomeScreenVisible(false);
    };

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-8">
            <AnimatePresence>
                {isWelcomeScreenVisible ? (
                    <motion.div
                        className="fixed inset-0 bg-blue-500 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="bg-white p-10 rounded-lg shadow-lg text-center"
                            initial={{ scale: 0.5 }}
                            animate={{ scale: 1 }}
                            exit={{ scale: 0.5 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome, Principal!</h1>
                            <p className="text-gray-600 mb-8">
                                Ready to manage your school? Let's check out the teacher statuses and appraisals.
                            </p>
                            <button
                                onClick={handleContinue}
                                className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                            >
                                Continue to Dashboard
                            </button>
                        </motion.div>
                    </motion.div>
                ) : (
                    <motion.div
                        className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                    >
                        <header className="px-8 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-lg">
                            <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                            <p className="text-white mt-2">Welcome back, Principal! Here's a summary of your teachers' statuses and appraisals.</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
                            <DashboardCard title="Total Teachers" value="X" color="blue-600" description="Total number of teachers" />
                            <DashboardCard title="Pending Appraisals" value="X" color="yellow-500" description="Appraisals pending review" />
                            <DashboardCard title="Student Enrollments" value="X" color="green-600" description="Total student enrollments this year" />
                            <DashboardCard title="Average Rating" value="X" color="red-500" description="Average teacher rating" />
                        </div>

                        <motion.div
                            className="p-8"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Teacher Status & Self-Appraisals</h2>
                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                                    <thead>
                                        <tr className="bg-gray-200">
                                            <th className="text-left py-4 px-6 font-medium text-gray-700">Teacher Name</th>
                                            <th className="text-left py-4 px-6 font-medium text-gray-700">Status</th>
                                            <th className="text-left py-4 px-6 font-medium text-gray-700">Appraisal Status</th>
                                            <th className="text-left py-4 px-6 font-medium text-gray-700">Last Appraisal</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {teachersData.map((teacher, index) => (
                                            <tr key={index} className="border-t border-gray-200 hover:bg-gray-50 transition">
                                                <td className="py-4 px-6 text-gray-800">{teacher.name}</td>
                                                <td className={`py-4 px-6 font-semibold ${teacher.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                                                    {teacher.status}
                                                </td>
                                                <td className={`py-4 px-6 font-semibold ${teacher.appraisalStatus === "Completed" ? "text-green-600" : "text-yellow-500"}`}>
                                                    {teacher.appraisalStatus}
                                                </td>
                                                <td className="py-4 px-6 text-gray-500">{teacher.lastAppraisal}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </motion.div>

                        <footer className="px-8 py-6 bg-gray-50 rounded-b-lg">
                            <p className="text-gray-500">© 2024 School Admin Dashboard. All rights reserved.</p>
                        </footer>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// Reusable Dashboard Card Component
const DashboardCard = ({ title, value, color, description }) => (
    <motion.div
        className="bg-white p-6 shadow-md rounded-lg text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
    >
        <h2 className="text-xl font-bold text-gray-700">{title}</h2>
        <p className={`text-4xl font-extrabold text-${color} mt-4`}>{value}</p>
        <p className="text-gray-500 mt-2">{description}</p>
    </motion.div>
);

export default AdminDashboard;