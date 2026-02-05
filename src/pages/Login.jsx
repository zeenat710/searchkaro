import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
// Image import karein (Ensure image path is correct)
import loginImg from "../assets/login.png"; 

export default function Login() {
  const navigate = useNavigate();

  const BACKEND_URL =
    import.meta.env.VITE_API_URL ||
    "https://searchkaro-production.up.railway.app/api/auth";

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    setError("");
    if (!loginData.email || !loginData.password) {
      setError("All fields required");
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(`${BACKEND_URL}/login`, loginData);
      localStorage.setItem("token", res.data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${BACKEND_URL}/google`;
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[1100px] min-h-[600px] rounded-2xl shadow-sm flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT SIDE: IMAGE SECTION */}
        <div className="w-full md:w-1/2 bg-[#F9FAFB] flex items-center justify-center p-10">
          <img 
            src={loginImg} 
            alt="Sign Up Illustration" 
            className="max-w-full h-auto object-contain"
          />
        </div>

        {/* RIGHT SIDE: LOGIN FORM */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-12">
          <div className="max-w-[400px] w-full mx-auto">
            <h1 className="text-4xl font-semibold text-gray-800 mb-2">Welcome back</h1>
            <p className="text-gray-400 mb-10">Please enter your details</p>

            <div className="space-y-4">
              <div>
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>

              <div>
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all"
                />
              </div>
            </div>

            <div className="text-right mt-3">
              <Link to="/forgot-password" size="sm" className="text-sm text-gray-500 hover:text-black transition-colors">
                Forgot password?
              </Link>
            </div>

            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

            <button
              onClick={handleLogin}
              disabled={loading}
              className="w-full bg-[#1294B0] hover:bg-[#0e7a91] text-white py-3 rounded-lg font-medium mt-8 transition-colors shadow-md"
            >
              {loading ? "Logging in..." : "Log in"}
            </button>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">Or</span></div>
            </div>

            {/* GOOGLE LOGIN */}
            <button
              onClick={handleGoogleLogin}
              className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-50 transition-all"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
                alt="google"
              />
              Log in with Google
            </button>

            {/* CREATE ACCOUNT */}
            <p className="text-center text-sm mt-8 text-gray-600">
              Don't have an account?{" "}
              <span
                onClick={() => navigate("/register")}
                className="text-[#1294B0] font-semibold hover:underline cursor-pointer"
              >
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}