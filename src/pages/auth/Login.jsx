import { useState } from "react";
import { loginApi } from "../../api/auth.api";
import { useNavigate } from "react-router-dom";
import { getProfileApi } from "../../api/auth.api"; 

const Login = ({ closeModal }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value.trim() }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const payload = {
      username: formData.username.toLowerCase(),
      password: formData.password,
    };

    console.log("LOGIN PAYLOAD:", payload);

    try {
      const res = await loginApi(payload); // pass trimmed & lowercased email
      

      
      // JWT
      localStorage.setItem("isLogin", "true");
      // Fetch user profile after login
        const profileRes = await getProfileApi(); // your profile API
       localStorage.setItem("userInfo", JSON.stringify(profileRes.data)); 

      closeModal();
      navigate("/dashboard"); 
    } catch (err) {
      

      // display exact backend message
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

      {error && <p className="text-red-500 mb-2">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          type="txt"
          placeholder="Username"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
          required
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          className="border p-2 w-full mb-3"
          required
        />

        <button className="bg-blue-600 text-white w-full py-2 rounded">
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
