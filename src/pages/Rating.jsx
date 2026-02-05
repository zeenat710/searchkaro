import React, { useState } from 'react';
import { Bell, ArrowUpIcon, ArrowDownIcon, Star, CheckCircle2, X } from 'lucide-react';

const Rating = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const ratingData = [
    { sno: 1, categories: 'Jeans', shop: 'Clothes', rating: 4.3, status: 'Positive' },
    { sno: 2, categories: 'iPhone', shop: 'Mobile', rating: 3.2, status: 'Negative' },
    { sno: 3, categories: 'Dell', shop: 'Laptop', rating: 3.2, status: 'Negative' },
    { sno: 4, categories: 'Boots', shop: 'Shoes', rating: 4.3, status: 'Positive' },
    { sno: 5, categories: 'Pizzaria Cafe', shop: 'Food', rating: 4.3, status: 'Negative' },
    { sno: 6, categories: 'Wellness Oasis Clinic', shop: 'Hospital', rating: 3.2, status: 'Positive' },
  ];

  const renderStars = (rating) => {
    return (
      <div className="flex gap-1">
        {[...Array(5)].map((_, i) => {
          const starNumber = i + 1;
          if (starNumber <= Math.floor(rating)) {
            return <Star key={i} size={16} fill="#eab308" className="text-yellow-500" />;
          } else if (starNumber === Math.ceil(rating)) {
            return (
              <div key={i} className="relative">
                <Star size={16} className="text-gray-300" />
                <div className="absolute top-0 left-0 overflow-hidden w-[35%]">
                  <Star size={16} fill="#eab308" className="text-yellow-500" />
                </div>
              </div>
            );
          } else {
            return <Star key={i} size={16} className="text-gray-300" />;
          }
        })}
      </div>
    );
  };

  return (
    <div className="max-w-[1200px] mx-auto relative">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">Rating</h1>
        <div className="flex items-center gap-4">
          <div 
            onClick={() => setShowNotifications(!showNotifications)}
            className="p-2 text-gray-400 border rounded-full bg-white cursor-pointer relative hover:bg-gray-50 transition-colors"
          >
            <Bell size={20} />
            <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
          </div>
          <div className="flex items-center gap-3 bg-white p-1 pr-4 rounded-full border shadow-sm cursor-pointer">
             <img src="https://i.pravatar.cc/150?u=john" alt="profile" className="w-8 h-8 rounded-full" />
             <span className="text-sm font-semibold text-gray-700">John Doe</span>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl border shadow-sm min-h-[600px]">
        <h3 className="text-lg font-bold text-gray-800 pb-4 border-b-2 border-black mb-0 px-2">Rating</h3>
        <table className="w-full max-w-5xl text-sm border-collapse">
          <thead>
            <tr className="text-gray-900">
              <th className="text-left py-4 font-bold px-4 w-20">S.no.</th>
              <th className="text-left py-4 font-bold px-4">Categories</th>
              <th className="text-left py-4 font-bold px-4">Shop</th>
              <th className="text-left py-4 font-bold px-4">Rating</th>
              <th className="text-left py-4 font-bold px-4">Review</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 font-medium">
            {ratingData.map((row) => (
              <tr key={row.sno} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                <td className="py-5 px-4">{row.sno}</td>
                <td className="py-5 px-4">{row.categories}</td>
                <td className="py-5 px-4">{row.shop}</td>
                <td className="py-5 px-4">{renderStars(row.rating)}</td>
                <td className="py-5 px-4">
                  <span className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-[12px] font-bold ${
                    row.status === 'Positive' ? 'bg-green-100 text-green-700 border border-green-200' : 'bg-red-100 text-red-700 border border-red-200'
                  }`}>
                    {row.status}
                    {row.status === 'Positive' ? <ArrowUpIcon size={14} /> : <ArrowDownIcon size={14} />}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showNotifications && (
        <div className="absolute top-20 right-0 w-[400px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50">
          <div className="p-4 border-b flex justify-between items-center">
            <h4 className="font-bold text-gray-800">Notification</h4>
            <button onClick={() => setShowNotifications(false)} className="text-gray-800 border-2 border-gray-800 rounded-md p-0.5">
              <X size={16} strokeWidth={3} />
            </button>
          </div>
          <div className="max-h-[500px] overflow-y-auto p-4 space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex gap-3 items-start pb-4 border-b border-gray-50 last:border-0 relative">
                <CheckCircle2 size={18} className="text-gray-800 mt-1 shrink-0" />
                <div className="pr-8">
                  <h5 className="font-bold text-sm text-gray-800 mb-1">Toast title</h5>
                  <p className="text-[12px] text-gray-400">Lorem Ipsum is simply dummy text...</p>
                </div>
                <div className="absolute right-0 top-1">
                  <div className="border-2 border-gray-800 rounded-full p-0.5">
                    <X size={10} strokeWidth={4} className="text-gray-800" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;