


export default function TrustedCompanies() {
  const logos = [
    "/company/company1.png",
    "/company/company2.png",
    "/company/company3.png",
    "/company/company4.png",
    "/company/company5.png",
  ];

  return (
    <div className="overflow-hidden py-10 bg-gray-50">
      <h2 className="text-center text-2xl font-semibold mb-6">
        Trusted by Companies
      </h2>

      <div className="flex gap-16 animate-marquee">
        {logos.concat(logos).map((logo, i) => (
          <img
            key={i}
            src={logo}
            alt="company"
            className="h-16 w-auto grayscale opacity-70 hover:opacity-100 transition"
          />
        ))}
      </div>
    </div>
  );
}
