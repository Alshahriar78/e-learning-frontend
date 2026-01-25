import { useState, useEffect } from "react";
import { updateProfileApi, getProfileApi } from "../../api/auth.api";

const ProfileUpdate = () => {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    email: "",
    password: "",
    oldPassword: "",
    dob: "",
    phone: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Fetch current profile to pre-fill the form
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getProfileApi();
        setFormData(res.data);
      } catch (err) {
        console.log("Error fetching profile:", err.response?.data);
      }
    };
    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const res = await updateProfileApi(formData);
      console.log("Profile updated:", res.data);
      setSuccess("Profile updated successfully!");
    } catch (err) {
      console.error("Update error:", err.response?.data);
      setError(err.response?.data?.message || "Profile update failed");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded mt-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Update Profile</h2>
      {success && <p className="text-green-500 mb-3">{success}</p>}
      {error && <p className="text-red-500 mb-3">{error}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2 w-full rounded"
          required
        />
        <input
          name="oldPassword"
          type="password"
          value={formData.oldPassword}
          onChange={handleChange}
          placeholder="Old Password"
          className="border p-2 w-full rounded"
        />
        <input
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="New Password"
          className="border p-2 w-full rounded"
        />
        <input
          name="dob"
          type="date"
          value={formData.dob}
          onChange={handleChange}
          className="border p-2 w-full rounded"
        />
        <input
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-2 w-full rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700 transition"
        >
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileUpdate;
