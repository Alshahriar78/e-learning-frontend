import { useRef } from "react";
import CourseCard from "./CourseCard";

const CourseListSlider = ({ courses }) => {
  const groupedCourses = courses.reduce((acc, course) => {
    const category = course.category?.name || "Other";
    if (!acc[category]) acc[category] = [];
    acc[category].push(course);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {Object.keys(groupedCourses).map((category) => {
        const sliderRef = useRef(null);

        const scrollLeft = () => {
          sliderRef.current.scrollBy({
            left: -300,
            behavior: "smooth",
          });
        };

        const scrollRight = () => {
          sliderRef.current.scrollBy({
            left: 300,
            behavior: "smooth",
          });
        };

        return (
          <div key={category} className="relative">
            <h2 className="text-2xl font-bold mb-4">{category}</h2>

            {/* Slider container */}
            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth"
            >
              {groupedCourses[category].map((course) => (
                <div
                  key={course._id}
                  className="flex-shrink-0 w-72 md:w-80 lg:w-96"
                >
                  <CourseCard course={course} />
                </div>
              ))}
            </div>

            {/* Left Button */}
            <button
              onClick={scrollLeft}
              className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
            >
              ❮
            </button>

            {/* Right Button */}
            <button
              onClick={scrollRight}
              className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
            >
              ❯
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default CourseListSlider;
