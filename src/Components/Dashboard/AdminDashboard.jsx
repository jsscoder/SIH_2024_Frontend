import React from "react";

const teachersData = [
    { name: "John Doe", status: "Active", appraisalStatus: "Pending", lastAppraisal: "2 days ago" },
    { name: "Jane Smith", status: "On Leave", appraisalStatus: "Completed", lastAppraisal: "1 week ago" },
    { name: "Michael Brown", status: "Active", appraisalStatus: "Pending", lastAppraisal: "4 days ago" },
    // Additional teacher data can be added here
];

const AdminDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg">
                <header className="px-8 py-6 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-t-lg">
                    <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
                    <p className="text-white mt-2">Welcome back, Principal! Here's a summary of your teachers' statuses and appraisals.</p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8">
                    <div className="bg-white p-6 shadow-md rounded-lg text-center">
                        <h2 className="text-xl font-bold text-gray-700">Total Teachers</h2>
                        <p className="text-4xl font-extrabold text-blue-600 mt-4">45</p>
                        <p className="text-gray-500 mt-2">Total number of teachers</p>
                    </div>

                    <div className="bg-white p-6 shadow-md rounded-lg text-center">
                        <h2 className="text-xl font-bold text-gray-700">Pending Appraisals</h2>
                        <p className="text-4xl font-extrabold text-yellow-500 mt-4">12</p>
                        <p className="text-gray-500 mt-2">Appraisals pending review</p>
                    </div>

                    <div className="bg-white p-6 shadow-md rounded-lg text-center">
                        <h2 className="text-xl font-bold text-gray-700">Student Enrollments</h2>
                        <p className="text-4xl font-extrabold text-green-600 mt-4">678</p>
                        <p className="text-gray-500 mt-2">Total student enrollments this year</p>
                    </div>

                    <div className="bg-white p-6 shadow-md rounded-lg text-center">
                        <h2 className="text-xl font-bold text-gray-700">Average Rating</h2>
                        <p className="text-4xl font-extrabold text-red-500 mt-4">4.3</p>
                        <p className="text-gray-500 mt-2">Average teacher rating</p>
                    </div>
                </div>

                <div className="p-8">
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
                </div>

                <footer className="px-8 py-6 bg-gray-50 rounded-b-lg">
                    <p className="text-gray-500">© 2024 School Admin Dashboard. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default AdminDashboard;
