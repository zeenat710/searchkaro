import { Link } from "react-router-dom";
// Assets se image import karein
import resetImg from "../assets/reset.png"; 

export default function ResetPassword() {
  return (
    <div className="min-h-screen bg-[#F4F4F4] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-[1100px] min-h-[600px] rounded-2xl shadow-sm flex flex-col md:flex-row overflow-hidden">

        {/* LEFT SIDE: FORM SECTION */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-8 md:px-20 py-12">
          <div className="max-w-[400px] w-full mx-auto">
            <h1 className="text-4xl font-semibold text-gray-800 mb-4">
              Create new password
            </h1>

            <p className="text-gray-400 mb-10 text-sm leading-relaxed">
              Your new password must be different from previously used passwords.
            </p>

            <div className="space-y-4">
              <input
                type="password"
                placeholder="New password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm"
              />

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all text-sm"
              />
            </div>

            <button className="w-full bg-[#2DA9C7] hover:bg-[#258da6] text-white py-3 rounded-lg font-medium mt-10 transition-colors shadow-sm text-sm">
              Submit
            </button>

            {/* BACK BUTTON */}
            <Link
              to="/"
              className="mt-12 flex items-center gap-2 text-sm text-gray-500 font-medium hover:text-black transition-all w-fit"
            >
              <span className="text-lg">←</span> Back
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: ILLUSTRATION SECTION */}
        <div className="w-full md:w-1/2 bg-[#F9FAFB] flex items-center justify-center p-10">
          <img
            src={resetImg}
            alt="Reset Password Illustration"
            className="max-w-full h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}