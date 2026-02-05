import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// Image import karein (Ensure path is correct)
import forgetImg from "../assets/forget.png"; 

export default function ForgotPassword() {
  const navigate = useNavigate();

  const BACKEND_URL =
    import.meta.env.VITE_API_URL ||
    "https://searchkaro-production.up.railway.app/api/auth";

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgot = async () => {
    setError("");
    setMessage("");

    if (!email) {
      setError("Email is required");
      return;
    }

    try {
      setLoading(true);
      await axios.post(`${BACKEND_URL}/forgot-password`, { email });
      setMessage("Reset link sent to your email 📩");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F4F4] p-4">
      <div className="bg-white w-full max-w-[1100px] min-h-[600px] rounded-2xl shadow-sm flex flex-col md:flex-row overflow-hidden">

        {/* LEFT SIDE: FORM SECTION */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-12">
          <div className="max-w-[400px] w-full mx-auto">
            <h1 className="text-4xl font-semibold text-gray-800 mb-6">
              Forgot password?
            </h1>

            <p className="text-gray-400 mb-8 text-sm leading-relaxed">
              Enter the email address you used when you joined and we’ll send
              you a code to reset your password.
            </p>

            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm"
              />
            </div>

            {error && <p className="text-red-500 text-xs mt-3">{error}</p>}
            {message && <p className="text-green-600 text-xs mt-3">{message}</p>}

            <button
              onClick={handleForgot}
              disabled={loading}
              className="w-full bg-[#2CB1BC] hover:bg-[#259ba5] text-white py-3 rounded-lg font-medium mt-8 transition-colors shadow-sm disabled:opacity-60 text-sm"
            >
              {loading ? "Sending..." : "Continue"}
            </button>

            {/* BACK BUTTON */}
            <div 
              onClick={() => navigate("/")} 
              className="mt-12 flex items-center gap-2 text-sm text-gray-500 font-medium cursor-pointer hover:text-black transition-all w-fit"
            >
              <span className="text-lg">←</span> Back
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: ILLUSTRATION SECTION */}
        <div className="w-full md:w-1/2 bg-[#F9FAFB] flex items-center justify-center p-10">
          <img
            src={forgetImg}
            alt="Forgot Password Illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>
        
      </div>
    </div>
  );
}