import { useRef } from "react";
import CourseCard from "./CourseCard"; // You can use ProductCard if you have it

const AllCoursesSlider = ({ courses }) => {
  const sliderRef = useRef(null);

  console.log("ALL COURSE SLIDER",courses)
  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  if (!Array.isArray(courses) || courses.length === 0) {
  return <p className="text-center py-10">No courses available</p>;
}

  return (
    <div className="relative my-10">
      <h2 className="text-2xl font-bold mb-4 px-4">All Courses</h2>

      {/* Slider container */}
      <div
        ref={sliderRef}
        className="flex overflow-x-auto gap-4 scrollbar-hide scroll-smooth px-4"
      >
        {courses.map((course) => (
          <div key={course._id} className="shrink-0 w-72 md:w-80 lg:w-96">
            <CourseCard course={course} /> {/* Or ProductCard */}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-0 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-0 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black z-10"
      >
        ❯
      </button>
    </div>
  );
};

export default AllCoursesSlider;
