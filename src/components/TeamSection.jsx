import React from "react";

const members = [
  {
    id: 1,
    name: "Shoo Thar Mien",
    role: "Senior UX Designer",
    image: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=400&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    id: 2,
    name: "Shoo Thar Mien",
    role: "Senior UX Designer",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop",
    linkedin: "#",
  },
  {
    id: 3,
    name: "Shoo Thar Mien",
    role: "Senior UX Designer",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=400&auto=format&fit=crop",
    linkedin: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="w-full bg-gradient-to-b from-sky-50 to-sky-100 py-20">
        <h1 className="text-4xl mb-12 text-center text-cyan-600">Meet Our Mentor.</h1>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
          {members.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              {/* Avatar */}
              <div className="relative">
                <div className="w-40 h-40 rounded-full border-4 border-white shadow-xl overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* LinkedIn badge */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="absolute bottom-1 right-1 bg-white rounded-full p-2 shadow-md hover:scale-105 transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#0A66C2"
                    className="w-5 h-5"
                  >
                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.33 7.43c-1.13 0-2.05-.92-2.05-2.05s.92-2.05 2.05-2.05 2.05.92 2.05 2.05-.92 2.05-2.05 2.05zM20.45 20.45h-3.53v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67h-3.53V9h3.39v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.36 4.24 5.43v6.31z" />
                  </svg>
                </a>
              </div>

              {/* Text */}
              <h3 className="mt-6 text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="mt-1 text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
