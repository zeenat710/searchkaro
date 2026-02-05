import React from 'react';
import { Bell } from 'lucide-react';

const Reports = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">Reports</h1>
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

      {/* Main Report Container */}
      <div className="bg-white p-10 rounded-2xl border shadow-sm min-h-[700px]">
        
        {/* Section 1: Company Overview */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-800 mb-2 pb-2 border-b border-gray-100">
            Company Overview
          </h3>
          <p className="text-sm text-gray-500 leading-[1.8] text-justify mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Section 2: Market Position and Competitors */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-gray-800 mb-2 pb-2 border-b border-gray-100">
            Market Position and Competitors
          </h3>
          <p className="text-sm text-gray-500 leading-[1.8] text-justify mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>

        {/* Section 3: Challenges and Risks */}
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-2 pb-2 border-b border-gray-100">
            Challenges and Risks
          </h3>
          <p className="text-sm text-gray-500 leading-[1.8] text-justify mt-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the 
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and 
            scrambled it to make a type specimen book. It has survived not only five centuries.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Reports;