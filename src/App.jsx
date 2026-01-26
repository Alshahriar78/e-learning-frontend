import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import ProfileUpdate from "./pages/dashboard/ProfileUpdate";
import MyCourses from "./pages/dashboard/MyCourses";
import MyProducts from "./pages/dashboard/MyProducts";
import Certificates from "./pages/dashboard/Certificates";
import Home from "./pages/Home";
import ShopPage from "./pages/ShopPage";
import ProductDetails from "./pages/ProductDetails";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Profile from "./pages/Profile";
import CourseStructure from "./pages/course/CourseStructure";
import ProtectedRoute from "./components/ProtectedRoute"; // <--- import

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Navbar always visible, handles login button / My Account */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/course/:courseId" element={<CourseStructure />} />

        {/* Dashboard protected */}
        <Route
          path="/dashboard/*"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="profile" element={<Profile />} />
          <Route path="profileUpdate" element={<ProfileUpdate />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="products" element={<MyProducts />} />
          <Route path="certificates" element={<Certificates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
