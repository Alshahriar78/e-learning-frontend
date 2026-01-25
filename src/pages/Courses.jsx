import { useEffect, useState } from "react";
import { getCoursesApi } from "../api/course.api";
import CourseList from "../components/courses/CourseList";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await getCoursesApi();
        setCourses(res.data.courses);
      } catch (err) {
        console.log(err.response?.data);
        setError("Failed to load courses");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading courses...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Courses</h1>
      <CourseList courses={courses} />
    </div>
  );
};

export default Courses;
