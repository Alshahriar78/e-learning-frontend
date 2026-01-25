import { useNavigate } from "react-router-dom";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/courses/${course._id}`)}
      className="cursor-pointer border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />

      <div className="p-4">
        <h3 className="font-bold text-lg">{course.title}</h3>
        <p className="text-gray-600 text-sm mt-1">
          {course.courseDetails?.substring(0, 80)}...
        </p>

        <p className="text-blue-600 font-semibold mt-2">
          ৳ {course.coursePrice}
        </p>
      </div>
    </div>
  );
};

export default CourseCard;
