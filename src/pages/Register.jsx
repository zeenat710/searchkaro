import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// Assets se image import karein
import registerImg from "../assets/register.png"; 

export default function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const BACKEND_URL =
    import.meta.env.VITE_API_URL ||
    "https://searchkaro-production.up.railway.app/api/auth";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setError("");
    setSuccess("");

    if (!formData.name || !formData.email || !formData.password) {
      setError("All fields are required");
      return false;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return false;
    }

    setLoading(true);

    try {
      const res = await axios.post(`${BACKEND_URL}/signup`, formData);
      console.log("Registered:", res.data);
      setSuccess("Account created successfully 🎉");
      setFormData({ name: "", email: "", password: "" });
      return true; 
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F4F4] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[1100px] min-h-[600px] rounded-2xl shadow-sm flex flex-col md:flex-row overflow-hidden">
        
        {/* LEFT SIDE: FORM SECTION */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-12">
          <div className="max-w-[400px] w-full mx-auto">
            <h1 className="text-4xl font-semibold text-gray-800 mb-2">Create account</h1>
            <p className="text-gray-400 mb-8 text-sm">
              Let's get started with your 30 days trial
            </p>

            <div className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm"
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm"
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm"
              />
            </div>

            {error && <p className="text-red-500 text-xs mt-3">{error}</p>}
            {success && <p className="text-green-500 text-xs mt-3">{success}</p>}

            <button
              disabled={loading}
              onClick={async () => {
                const ok = await handleSubmit();
                if (ok) navigate("/"); 
              }}
              className="w-full bg-[#2CB1BC] hover:bg-[#259ba5] text-white py-3 rounded-lg font-medium mt-8 transition-colors shadow-sm disabled:opacity-60 text-sm"
            >
              {loading ? "Creating..." : "Create account"}
            </button>

            <p className="text-center text-xs mt-4 text-gray-500">
              Already have an account?{" "}
              <span
                onClick={() => navigate("/")}
                className="text-black font-semibold cursor-pointer hover:underline"
              >
                Log in
              </span>
            </p>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-400">Or</span></div>
            </div>

            {/* GOOGLE SIGN UP */}
            <button className="w-full border border-gray-300 py-3 rounded-lg flex items-center justify-center gap-3 text-sm font-medium hover:bg-gray-50 transition-all">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                className="w-5"
                alt="google"
              />
              Sign up with Google
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: ILLUSTRATION SECTION */}
        <div className="w-full md:w-1/2 bg-[#F9FAFB] flex items-center justify-center p-10">
          <img 
            src={registerImg} 
            alt="Register Illustration" 
            className="max-w-full h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}