import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import { X } from 'lucide-react';

export default function Sidebar() {
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [countdown, setCountdown] = useState(3);
  const navigate = useNavigate();

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-4 py-3 rounded-md text-sm transition-all
     ${isActive ? "bg-cyan-600/20 text-cyan-400 border-l-4 border-cyan-400" : "text-gray-400 hover:bg-gray-800"}`;

  // Timer logic
  useEffect(() => {
    let timer;
    if (showLogoutModal && countdown > 0) {
      timer = setInterval(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else if (showLogoutModal && countdown === 0) {
      navigate('/');
    }
    return () => clearInterval(timer);
  }, [showLogoutModal, countdown, navigate]);

  // Click handler function
  const handleLogout = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Bubbling rokne ke liye
    console.log("Logout button clicked"); // Browser console (F12) mein check karein
    setCountdown(3);
    setShowLogoutModal(true);
  };

  return (
    <>
      <div className="w-[260px] bg-[#1F1F1F] min-h-screen p-4 flex flex-col">
        <h1 className="text-white text-xl font-semibold mb-8 px-4">Searchkro</h1>

        <nav className="space-y-2 flex-1">
          <NavLink to="/dashboard" className={linkClass}>Dashboard</NavLink>
          <NavLink to="/categories" className={linkClass}>Categories</NavLink>
          <NavLink to="/reports" className={linkClass}>Reports</NavLink>
          <NavLink to="/legal" className={linkClass}>Legal Policy</NavLink>
          <NavLink to="/location" className={linkClass}>Location</NavLink>
          <NavLink to="/rating" className={linkClass}>Rating</NavLink>

          <div className="border-t border-gray-700 my-4"></div>

          {/* Logout Trigger Button */}
          <button 
            type="button"
            onClick={handleLogout}
            className="w-full text-left text-red-400 px-4 py-3 hover:bg-red-500/10 rounded-md transition-colors font-medium flex items-center"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Logout Modal - Isko Sidebar div ke bahar rakha hai taaki overflow issues na ho */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">
          <div className="bg-white rounded-3xl shadow-2xl w-[400px] p-8 relative animate-in fade-in zoom-in duration-300">
            
            <button 
              onClick={() => setShowLogoutModal(false)}
              className="absolute right-5 top-5 text-gray-900 border-2 border-gray-900 rounded-lg p-1"
            >
              <X size={16} strokeWidth={3} />
            </button>

            <div className="flex flex-col items-center text-center">
              <div className="bg-cyan-50 p-6 rounded-full mb-6">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H10" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17 12L21 12M21 12L18 9M21 12L18 15" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 3L13 21" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-2">You are Logged Out?</h2>
              <p className="text-gray-500 text-sm mb-8 px-4">
                You are about to logout in <span className="font-bold text-gray-900">{countdown} secs</span>, Do you want to continue?
              </p>

              <button 
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-cyan-100"
                onClick={() => navigate('/')}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}