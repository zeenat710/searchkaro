import React from 'react';
import { Bell, ChevronRight, X, Plus } from 'lucide-react';

const LegalPolicy = () => {
  const faqItems = [
    { id: 1, question: "How do I track my service provider?", type: "chevron" },
    { id: 2, question: "What if I face an issue with the service?", type: "chevron" },
    { id: 3, question: "How do I rate and review a service?", type: "chevron" },
    { id: 4, question: "What services does this app provide?", type: "chevron" },
    { id: 5, question: "Is registration required to use the app?", type: "chevron" },
    { id: 6, question: "How can I cancel or reschedule a service?", type: "plus" },
    { id: 7, question: "What payment methods are accepted?", type: "plus" },
  ];

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">Legal Policy</h1>
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

      {/* Accordion Container */}
      <div className="space-y-4 max-w-5xl">
        
        {/* Expanded Active Item (Dark Theme) */}
        <div className="bg-[#1a1c1e] text-white p-6 rounded-2xl relative shadow-lg">
          <button className="absolute right-6 top-6 text-gray-500 hover:text-white transition-colors">
            <X size={20} />
          </button>
          <h4 className="text-lg font-bold mb-3 pr-10">How do I book a service?</h4>
          <p className="text-sm text-gray-400 leading-relaxed max-w-3xl">
            You can book a service by selecting your preferred category, choosing a time slot, and confirming 
            the booking via the app.
          </p>
        </div>

        {/* Remaining List Items (Light Theme) */}
        {faqItems.map((item) => (
          <div 
            key={item.id} 
            className="bg-gray-200/60 p-5 rounded-2xl flex justify-between items-center cursor-pointer hover:bg-gray-200 transition-all border border-transparent hover:border-gray-300"
          >
            <span className="text-sm font-bold text-gray-700">{item.question}</span>
            <div className="text-gray-500">
              {item.type === "chevron" ? <ChevronRight size={20} /> : <Plus size={20} />}
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default LegalPolicy;