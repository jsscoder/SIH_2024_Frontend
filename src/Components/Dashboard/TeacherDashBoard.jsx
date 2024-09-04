import React from 'react';

// Mock data (for illustration)
const teacherInfo = {
    name: 'John Doe',
    profilePic: 'https://example.com/profile.jpg', // Replace with a real image URL
    activities: [
        { id: 1, title: 'Graded Assignment 1', description: 'Graded assignment for Math class.' },
        { id: 2, title: 'Uploaded Lecture Notes', description: 'Uploaded notes for Science class.' },
        { id: 3, title: 'Meeting with Parents', description: 'Scheduled a parent-teacher meeting.' },
    ]
};

const TeacherDashboard = () => {
    return (
        <div className="flex flex-col md:flex-row bg-gray-100 p-6 rounded-lg shadow-lg">
            {/* Profile Section */}
            <div className="md:w-1/4 w-full flex flex-col items-center md:items-start text-center md:text-left p-4 border-b md:border-b-0 md:border-r border-gray-200">
                <img 
                    src={teacherInfo.profilePic} 
                    alt="Profile" 
                    className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg mb-4"
                />
                <h2 className="text-xl font-semibold text-gray-800">{teacherInfo.name}</h2>
                <button 
                    className="mt-4 px-6 py-2 bg-blue-500 text-white font-medium rounded-lg shadow hover:bg-blue-600 transition duration-300"
                    onClick={() => alert('Redirect to profile page')}
                >
                    View Profile
                </button>
            </div>

            {/* Recent Activities Section */}
            <div className="md:w-3/4 w-full mt-6 md:mt-0 p-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Latest Activities</h3>
                <div className="space-y-4">
                    {teacherInfo.activities.map(activity => (
                        <div 
                            key={activity.id} 
                            className="p-4 bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
                        >
                            <h4 className="text-md font-semibold text-gray-800">{activity.title}</h4>
                            <p className="text-gray-600">{activity.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TeacherDashboard;
