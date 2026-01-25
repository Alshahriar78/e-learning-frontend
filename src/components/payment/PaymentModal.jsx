import { useState } from "react";
import axios from "axios";

const PaymentModal = ({ productId, productType, onClose }) => {
  const [formData, setFormData] = useState({
    trxId: "",
    number: "",
    paymentMethod: "bkash",
    email: "",
    productId,
    productType,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.group("🧾 PAYMENT FORM DEBUG");
  Object.entries(formData).forEach(([key, value]) => {
    console.log(`${key}:`, value, "| type:", typeof value);
  });
  console.groupEnd();
    try {
      await axios.post(
        "https://backend-e-learning.apaybd.com/api/v1/order",
        formData,
        {withCredentials:true}
      );
      console.log("Payment Data>>>>>>>>>>: ",formData)
      alert("Payment submitted successfully!");
      onClose();
    } catch (error) {
      console.error(error);
      alert("Payment failed!");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Payment Details</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="trxId"
            placeholder="Transaction ID"
            required
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <input
            name="number"
            placeholder="Payment Number"
            required
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <select
            name="paymentMethod"
            className="w-full border p-2 rounded"
            onChange={handleChange}
          >
            <option value="bkash">Bkash</option>
            <option value="nagad">Nagad</option>
            <option value="rocket">Rocket</option>
          </select>

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full border p-2 rounded"
            onChange={handleChange}
          />

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-400 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentModal;
