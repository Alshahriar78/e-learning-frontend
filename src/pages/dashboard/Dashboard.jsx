import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const Dashboard = () => {
  const navigate = useNavigate();

  // Card items
  const cards = [
    { title: "Profile Information", path: "/dashboard/profile" },
     { title: "Profile Edit", path: "/dashboard/profileUpdate" },
    { title: "My Courses", path: "/dashboard/courses" },
    { title: "My Products", path: "/dashboard/products" },
    { title: "Certificates", path: "/dashboard/certificates" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome to Dashboard</h1>

        {/* Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {cards.map((card) => (
            <div
              key={card.title}
              onClick={() => navigate(card.path)}
              className="cursor-pointer bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h2 className="text-xl font-semibold">{card.title}</h2>
            </div>
          ))}
        </div>

        {/* This Outlet will render nested routes when a card/page is clicked */}
        <Outlet />
      </main>
    </div>
  );
};

export default Dashboard;
