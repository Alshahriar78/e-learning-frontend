


export default function TrustedCompanies() {
  const logos = [
    "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    "/company/amazon.jpeg",
    "/company/clickone.jpeg",
    "/company/click.jpeg",
    "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
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
