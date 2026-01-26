import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCourseStructureApi } from "../../api/course.api";

const CourseStructure = () => {
  const { courseId } = useParams();
  const [modules, setModules] = useState([]);
  const [activeVideo, setActiveVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStructure = async () => {
      try {
        const res = await getCourseStructureApi(courseId);
        setModules(res.data.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStructure();
  }, [courseId]);

  if (loading) return <p className="text-center mt-10">Loading course...</p>;

  return (
    <div className="flex gap-6">
      
      
      <div className="w-1/4 bg-white p-4 rounded shadow">
        <h2 className="font-bold mb-4">Course Content</h2>

        {modules.map((module) => (
          <div key={module._id} className="mb-4">
            <h3 className="font-semibold text-blue-600">
              {module.title}
            </h3>

            <ul className="ml-3 mt-2 space-y-1">
              {module.videos.map((video) => (
                <li
                  key={video._id}
                  onClick={() => setActiveVideo(video)}
                  className="cursor-pointer text-sm hover:text-blue-600"
                >
                  ▶ {video.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* RIGHT: VIDEO PLAYER */}
      <div className="flex-1 bg-white p-6 rounded shadow">
        {activeVideo ? (
          <>
            <h2 className="text-xl font-bold mb-4">
              {activeVideo.title}
            </h2>

            <iframe
                className="w-full h-[420px] rounded"
                src={activeVideo.videoUrl.replace("watch?v=", "embed/")}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            />
          </>
        ) : (
          <p className="text-center text-gray-500 mt-20">
            Select a video to start learning 🎓
          </p>
        )}
      </div>
    </div>
  );
};

export default CourseStructure;
