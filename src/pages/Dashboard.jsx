import React from "react";
import { Bell, ChevronRight, X, ArrowDownIcon, ArrowUpIcon } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ ADD THIS

const Dashboard = () => {
  const navigate = useNavigate(); // ✅ ADD THIS

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="flex items-center gap-4">
          <div className="p-2 text-gray-400 border rounded-full bg-white cursor-pointer relative">
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 bg-white p-1 pr-4 rounded-full border shadow-sm cursor-pointer">
            <img src="https://i.pravatar.cc/150?u=john" alt="profile" className="w-8 h-8 rounded-full" />
            <span className="text-sm font-semibold text-gray-700">John Doe</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">

        {/* Categories */}
        <div className="col-span-6 bg-white p-6 rounded-2xl border shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Categories</h3>
            <button
              onClick={() => navigate("/categories")} // ✅ WORKING
              className="bg-black text-white px-4 py-1 rounded"
            >
              View
            </button>
          </div>
          <table className="w-full text-sm">
            <thead className="text-gray-400 border-b">
              <tr>
                <th className="text-left pb-3 font-medium">S.no.</th>
                <th className="text-left pb-3 font-medium">Role</th>
                <th className="text-left pb-3 font-medium">Categories</th>
                <th className="text-left pb-3 font-medium">Product</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b"><td className="py-4">1</td><td>Buyer</td><td>Clothes</td><td>Jeans</td></tr>
              <tr className="border-b"><td className="py-4">2</td><td>Buyer</td><td>Mobile</td><td>iPhone</td></tr>
              <tr><td className="py-4">3</td><td>Seller</td><td>Laptop</td><td>Dell</td></tr>
            </tbody>
          </table>
        </div>

        {/* Location */}
        <div className="col-span-6 bg-white p-6 rounded-2xl border shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Location</h3>
            <button
              onClick={() => navigate("/location")} // ✅ WORKING
              className="bg-black text-white px-5 py-1.5 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors"
            >
              View
            </button>
          </div>
          <table className="w-full text-sm">
            <thead className="text-gray-400 border-b">
              <tr>
                <th className="text-left pb-3 font-medium">Sno.</th>
                <th className="text-left pb-3 font-medium">Role</th>
                <th className="text-left pb-3 font-medium">Location</th>
                <th className="text-left pb-3 font-medium">Continent</th>
              </tr>
            </thead>
            <tbody className="text-gray-600">
              <tr className="border-b"><td className="py-4">1</td><td>Buyer</td><td>London</td><td>Europe</td></tr>
              <tr className="border-b"><td className="py-4">2</td><td>Buyer</td><td>Mumbai</td><td>Asia</td></tr>
              <tr><td className="py-4">3</td><td>Seller</td><td>Berlin</td><td>Europe</td></tr>
            </tbody>
          </table>
        </div>

        {/* 3. Legal Policy Block (With View Button) */}
        <div className="col-span-4 space-y-4">
          <div className="flex justify-between items-center mb-2 px-1">
            <h3 className="font-bold text-gray-800">Legal policy</h3>
            <button className="bg-black text-white px-5 py-1.5 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors">View</button>
          </div>
          
          <div className="bg-[#0f1113] text-white p-5 rounded-2xl relative shadow-lg">
            <button className="absolute right-4 top-4 text-gray-500 hover:text-white">
              <X size={16} />
            </button>
            <h4 className="text-sm font-bold mb-2 pr-6 leading-tight">How do I book a service?</h4>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              You can book a service by selecting your preferred category, choosing a time slot, and confirming the booking via the app.
            </p>
          </div>
          
          <div className="bg-gray-200/50 p-4 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-200 transition-all">
            <span className="text-xs font-bold text-gray-700">How do I track my service provider?</span>
            <ChevronRight size={18} className="text-gray-400" />
          </div>

          <div className="bg-gray-200/50 p-4 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-200 transition-all">
            <span className="text-xs font-bold text-gray-700">How do I rate and review a service?</span>
            <ChevronRight size={18} className="text-gray-400" />
          </div>
        </div>

        {/* 4. Report Block (View Button at Top Side) */}
        <div className="col-span-4 bg-white p-6 rounded-2xl border shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-gray-800">Report</h3>
            <button className="bg-black text-white px-5 py-1.5 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors">View</button>
          </div>
          <h4 className="text-sm font-bold text-gray-800 mb-3">Company Overview</h4>
          <p className="text-xs text-gray-500 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
        </div>

        {/* 5. Rating Block (Side View Button + Custom Chart) */}
        <div className="col-span-4 bg-white p-6 rounded-2xl border shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <h3 className="font-bold text-gray-800">Rating</h3>
            <button className="bg-black text-white px-5 py-1.5 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors">View</button>
          </div>
          
          <div className="flex flex-col items-center">
            {/* Donut Chart with Left/Right split colors */}
            <div className="relative w-32 h-32 mb-8">
              <svg viewBox="0 0 36 36" className="w-full h-full transform rotate-180">
                {/* Right Half (Gray/Red) */}
                <path
                  className="text-green-600"
                  strokeDasharray="50, 100"
                  strokeWidth="4.5"
                  stroke="currentColor"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                {/* Left Half (Green) */}
                <path
                  className="text-red-600"
                  strokeDasharray="50, 100"
                  strokeDashoffset="-50"
                  strokeWidth="4.5"
                  stroke="currentColor"
                  fill="transparent"
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                />
              </svg>
            </div>

            {/* Legend with small circles and colored arrows */}
            <div className="w-full space-y-3 px-2">
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                  <span className="text-gray-500 font-medium">Positive</span>
                </div>
                <span className="font-bold flex items-center gap-1">50% <ArrowUpIcon size={14} className="text-green-600" /></span>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-600"></div>
                  <span className="text-gray-500 font-medium">Negative</span>
                </div>
                <span className="font-bold flex items-center gap-1">50% <ArrowDownIcon size={14} className="text-red-600" /></span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;