import { useState, useEffect } from "react";
import { ArrowUp, ArrowDown } from "lucide-react";

const Location = () => {
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [rawData, setRawData] = useState(null);

  const [formData, setFormData] = useState({
    role: "",
    location: "",
    region: "",
    popular: "No",
  });

  // ✅ FETCH LOCATIONS (TOKEN SAFE)
  const fetchLocations = async () => {
    try {
      const token = localStorage.getItem("token"); // ⭐ ALWAYS GET LATEST TOKEN

      if (!token) {
        console.warn("Token missing — login first");
        setLoading(false);
        return;
      }

      const res = await fetch(
        "https://searchkaro-production.up.railway.app/api/location",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        console.error("SERVER ERROR:", data);
        setRawData(data);
        setTableData([]);
        return;
      }

      setRawData(data);

      const formatted = data.map((item, index) => ({
        id: item.id,
        sno: index + 1,
        role: item.role,
        location: item.location,
        region: item.region,
        popular: item.popular === "Yes",
      }));

      setTableData(formatted);
    } catch (err) {
      console.error("FETCH CRASH:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLocations();
  }, []);

  // INPUT CHANGE
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ ADD LOCATION (TOKEN SAFE)
  const handleAddLocation = async () => {
    const token = localStorage.getItem("token");

    if (!token) return alert("Login required");

    if (!formData.role || !formData.location || !formData.region) {
      return alert("All fields required");
    }

    try {
      const res = await fetch(
        "https://searchkaro-production.up.railway.app/api/postLocation",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Location Added ✅");
        setShowModal(false);
        setFormData({ role: "", location: "", region: "", popular: "No" });
        fetchLocations();
      } else {
        alert(data.message || "Failed to add location");
      }
    } catch {
      alert("Server error");
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">Location</h1>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#00B4D8] text-white px-5 py-2 rounded-md text-sm font-semibold"
        >
          + Add Location
        </button>
      </div>

      {/* TABLE */}
      <div className="bg-white p-8 rounded-2xl border shadow-sm min-h-[600px]">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <table className="w-full max-w-5xl text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-black">
                <th className="text-left py-4 px-4 w-20">S.no.</th>
                <th className="text-left py-4 px-4">Role</th>
                <th className="text-left py-4 px-4">Location</th>
                <th className="text-left py-4 px-4">Region</th>
                <th className="text-left py-4 px-4">Popular</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((row) => (
                <tr key={row.id} className="border-b">
                  <td className="py-5 px-4">{row.sno}</td>
                  <td className="py-5 px-4">{row.role}</td>
                  <td className="py-5 px-4">{row.location}</td>
                  <td className="py-5 px-4">{row.region}</td>
                  <td className="py-5 px-4">
                    <span
                      className={`inline-flex items-center gap-1 px-4 py-1 rounded-full text-xs font-semibold ${
                        row.popular
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.popular ? "Yes" : "No"}
                      {row.popular ? <ArrowUp size={14} /> : <ArrowDown size={14} />}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* MODAL */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white w-[400px] p-6 rounded-xl">
            <h3 className="text-lg font-semibold mb-4">Add Location</h3>

            <input
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Location"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              name="region"
              value={formData.region}
              onChange={handleChange}
              placeholder="Region"
              className="w-full border p-2 mb-3 rounded"
            />

            <select
              name="popular"
              value={formData.popular}
              onChange={handleChange}
              className="w-full border p-2 mb-4 rounded"
            >
              <option>No</option>
              <option>Yes</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddLocation}
                className="px-4 py-2 bg-[#00B4D8] text-white rounded"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Location;
