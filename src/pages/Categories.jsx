import { useState, useEffect } from "react";
import { Bell, ArrowUp, ArrowDown } from "lucide-react";

const Categories = () => {
  const [showModal, setShowModal] = useState(false);
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    role: "",
    category: "",
    product: "",
    status: true,
  });

  const fetchCategories = async () => {
    try {
      const res = await fetch(
        "https://searchkaro-production.up.railway.app/api/categories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await res.json();

      const formatted = data.map((item, index) => ({
        id: item.categoryId,
        sno: index + 1,
        role: item.role,
        category: item.categoryName,
        product: item.productName,
        status: item.status === true,
      }));

      setTableData(formatted);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "status") {
      setFormData({ ...formData, status: value === "true" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleAddCategory = async () => {
    if (!formData.role || !formData.category || !formData.product) {
      return alert("All fields required");
    }

    try {
      const res = await fetch(
        "https://searchkaro-production.up.railway.app/api/postCategories",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            role: formData.role.trim(),
            categoryName: formData.category.trim(),
            productName: formData.product.trim(),
            status: formData.status,
          }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        alert("Category Added ✅");
        setShowModal(false);
        setFormData({ role: "", category: "", product: "", status: true });
        fetchCategories();
      } else {
        alert(data.message || "Category already exists");
      }
    } catch (err) {
      alert("Server error");
    }
  };

  return (
    <div className="max-w-[1200px] mx-auto px-6">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold text-gray-800">Categories</h1>

        <button
          onClick={() => setShowModal(true)}
          className="bg-[#00B4D8] text-white px-5 py-2 rounded-md text-sm font-semibold"
        >
          + Add Categories
        </button>
      </div>

      {/* CARD */}
      <div className="bg-white rounded-2xl border shadow-sm px-10 py-8">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : (
          <table className="w-full max-w-5xl mx-auto text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-black text-gray-900">
                <th className="text-left px-6 pb-4 w-[80px]">S.no.</th>
                <th className="text-left px-6 pb-4 w-[140px]">Role</th>
                <th className="text-left px-6 pb-4 w-[220px]">Categories</th>
                <th className="text-left px-6 pb-4 w-[260px]">Product</th>
                <th className="text-left px-6 pb-4 w-[160px]">Popular</th>
              </tr>
            </thead>

            <tbody className="text-gray-700">
              {tableData.map((row) => (
                <tr key={row.id} className="border-b last:border-0">
                  <td className="px-6 py-5">{row.sno}</td>
                  <td className="px-6 py-5">{row.role}</td>
                  <td className="px-6 py-5">{row.category}</td>
                  <td className="px-6 py-5">{row.product}</td>
                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold ${
                        row.status
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {row.status ? "Positive" : "Negative"}
                      {row.status ? (
                        <ArrowUp size={14} />
                      ) : (
                        <ArrowDown size={14} />
                      )}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* MODAL (UNCHANGED) */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white w-[400px] p-6 rounded-xl shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Add Category</h3>

            <input
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Role"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              name="category"
              value={formData.category}
              onChange={handleChange}
              placeholder="Category"
              className="w-full border p-2 mb-3 rounded"
            />
            <input
              name="product"
              value={formData.product}
              onChange={handleChange}
              placeholder="Product"
              className="w-full border p-2 mb-3 rounded"
            />

            <select
              name="status"
              value={formData.status.toString()}
              onChange={handleChange}
              className="w-full border p-2 mb-4 rounded"
            >
              <option value="true">Positive</option>
              <option value="false">Negative</option>
            </select>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleAddCategory}
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

export default Categories;