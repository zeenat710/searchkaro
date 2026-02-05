import React, { useState, useEffect } from 'react';
import { LayoutDashboard, Grid, FileText, ShieldCheck, MapPin, Star, LogOut, X } from 'lucide-react';
import { Link, useLocation, useNavigate, Outlet } from 'react-router-dom';

const DashBoardLayout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const menuItems = [
    { icon: <LayoutDashboard size={20}/>, label: "Dashboard", path: "/dashboard" },
    { icon: <Grid size={20}/>, label: "Categories", path: "/categories" },
    { icon: <FileText size={20}/>, label: "Reports", path: "/reports" },
    { icon: <ShieldCheck size={20}/>, label: "Legal Policy", path: "/legal-policy" },
    { icon: <MapPin size={20}/>, label: "Location", path: "/location" },
    { icon: <Star size={20}/>, label: "Rating", path: "/rating" },
  ];

  // Logout countdown logic
  useEffect(() => {
    let timer;
    if (showLogoutModal && countdown > 0) {
      timer = setInterval(() => setCountdown(prev => prev - 1), 1000);
    } else if (showLogoutModal && countdown === 0) {
      navigate('/'); // Redirect to login
    }
    return () => clearInterval(timer);
  }, [showLogoutModal, countdown, navigate]);

  const triggerLogout = () => {
    setCountdown(3);
    setShowLogoutModal(true);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar - Fixed Position */}
      <div className="w-64 bg-[#1a1c1e] text-gray-400 flex flex-col fixed h-full z-40">
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">V</div>
          <span className="text-white text-xl font-semibold">Searchkro</span>
        </div>

        <nav className="flex-1 px-4 space-y-2 mt-4">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all ${
                location.pathname === item.path ? 'bg-cyan-500 text-white shadow-lg' : 'hover:bg-gray-800 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-gray-800">
          <button 
            onClick={triggerLogout}
            className="flex items-center gap-3 px-4 py-2 hover:text-red-400 transition-colors w-full text-left"
          >
            <LogOut size={20} />
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64 min-h-screen relative">
        <div className="p-8">
           <Outlet /> {/* Iski wajah se page content load hoga */}
        </div>
      </div>

      {/* --- Logout Modal Overlay --- */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-3xl shadow-2xl w-[400px] p-10 relative border border-gray-100 animate-in fade-in zoom-in duration-300">
            
            {/* Modal Close Button (Fixed Square Border) */}
            <button 
              onClick={() => setShowLogoutModal(false)}
              className="absolute right-6 top-6 text-gray-900 border-2 border-gray-900 rounded-lg p-1 hover:bg-gray-50 transition-all"
            >
              <X size={16} strokeWidth={3} />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Blue Door Icon */}
              <div className="bg-cyan-50 p-6 rounded-full mb-8">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H10" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M17 12L21 12M21 12L18 9M21 12L18 15" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M13 3L13 21" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-3">You are Logged Out?</h2>
              <p className="text-gray-500 text-sm mb-10 px-4">
                You are about to logout in <span className="font-bold text-gray-900">{countdown} secs</span>, Do you want to continue?
              </p>

              <button 
                className="w-full bg-cyan-400 hover:bg-cyan-500 text-white font-bold py-4 rounded-2xl shadow-xl shadow-cyan-100 transition-all active:scale-95"
                onClick={() => navigate('/')}
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashBoardLayout;