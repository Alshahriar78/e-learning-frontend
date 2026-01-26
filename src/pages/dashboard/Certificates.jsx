// import { useEffect, useState } from "react";
// import { getCertificatesApi } from "../../api/certificate.api"; // create this API function

// const Certificates = () => {
//   const [certificates, setCertificates] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchCertificates = async () => {
//       try {
//         const res = await getCertificatesApi();
//         setCertificates(res.data.data);
//       } catch (err) {
//         console.error(err.response?.data || err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchCertificates();
//   }, []);

//   if (loading) return <p className="text-center mt-10">Loading certificates...</p>;
//   if (certificates.length === 0) return <p className="text-center mt-10">No certificates found</p>;

//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-4">My Certificates</h1>
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
//         {certificates.map((cert) => (
//           <div
//             key={cert._id}
//             className="bg-white p-4 rounded shadow hover:shadow-lg transition cursor-pointer"
//           >
//             <h2 className="font-semibold text-lg">{cert.courseTitle}</h2>
//             <p className="text-gray-500 mt-1">
//               Issued on: {new Date(cert.issuedAt).toLocaleDateString()}
//             </p>
//             <a
//               href={cert.certificateUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600 mt-2 inline-block font-semibold"
//             >
//               View Certificate
//             </a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Certificates;


import { useState } from "react";

const CertificatesDemo = () => {
  const [certificates] = useState([
    {
      _id: "cert1",
      courseTitle: "Full Stack Web Development (MERN)",
      certificateUrl: "https://example.com/cert1.pdf",
      issuedAt: "2026-01-28T05:00:00Z",
    },
    {
      _id: "cert2",
      courseTitle: "React Basics",
      certificateUrl: "https://example.com/cert2.pdf",
      issuedAt: "2026-01-25T12:00:00Z",
    },
    {
      _id: "cert3",
      courseTitle: "JavaScript Mastery",
      certificateUrl: "https://example.com/cert3.pdf",
      issuedAt: "2026-01-20T09:30:00Z",
    },
    {
      _id: "cert4",
      courseTitle: "Node.js & Express",
      certificateUrl: "https://example.com/cert4.pdf",
      issuedAt: "2026-01-18T11:00:00Z",
    },
  ]);

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

export default CertificatesDemo;

