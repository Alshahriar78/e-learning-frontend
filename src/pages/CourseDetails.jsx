import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCourseByIdApi } from "../api/course.api";
import PaymentModal from "../components/payment/PaymentModal";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPayment, setShowPayment] = useState(false);

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const res = await getCourseByIdApi(id);
        setCourse(res.data);
        console.log(res.data)
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;
  if (!course) return <p className="text-center mt-10">Course not found</p>;

  const isEnrolled = false; // later from backend

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Image */}
      <img
        src={course.thumbnail}
        alt={course.course.title}
        className="w-full h-96 object-cover rounded mb-6"
      />
      {console.log(course)}
      {/* Title */}
      <h1 className="text-3xl font-bold mb-2">{course.course.title}</h1>

      {/* Price */}
      <p className="text-2xl text-blue-600 font-semibold mb-4">
        ৳ {course.course.coursePrice}
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-6">
        <button className="bg-green-600 text-white px-6 py-2 rounded" onClick={() => setShowPayment(true)}>
          Buy Now
        </button>

        <button
          disabled={!isEnrolled}
          className={`px-6 py-2 rounded text-white ${
            isEnrolled ? "bg-blue-600" : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Start Course
        </button>
      </div>

      {/* Description */}
      <h2 className="text-xl font-semibold mb-2">Course Description</h2>
      <p className="text-gray-700">{course.course.courseDetails}</p>

      {showPayment && (
        <PaymentModal
          productId={id}
          productType="course"
          onClose={() => setShowPayment(false)}
        />
      )}
    </div>
  );
};

export default CourseDetails;
