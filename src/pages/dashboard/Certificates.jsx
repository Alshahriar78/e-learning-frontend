import { useEffect, useState } from "react";
import { getCertificatesApi } from "../../api/certificate.api"; // create this API function

const Certificates = () => {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await getCertificatesApi();
        setCertificates(res.data.data);
      } catch (err) {
        console.error(err.response?.data || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCertificates();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading certificates...</p>;
  if (certificates.length === 0) return <p className="text-center mt-10">No certificates found</p>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Certificates</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certificates.map((cert) => (
          <div
            key={cert._id}
            className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
          >
            <h2 className="font-semibold text-lg">{cert.courseTitle}</h2>
            <p className="text-gray-500 mt-1">
              Issued on: {new Date(cert.issuedAt).toLocaleDateString()}
            </p>
            <a
              href={cert.certificateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 mt-2 inline-block font-semibold"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
