const AboutStats = () => {
  const stats = [
    {
      value: "Furniture",
      label: "For Different Spaces",
    },
    {
      value: "Flexible",
      label: "Rental Options",
    },
    {
      value: "Simple",
      label: "Rental Journey",
    },
    {
      value: "Customer",
      label: "Focused Experience",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        <div className="grid grid-cols-2 lg:grid-cols-4 border border-gray-200 rounded-3xl overflow-hidden">

          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`
                p-6 sm:p-8 lg:p-10 text-center
                ${index < 2 ? "border-b lg:border-b-0" : ""}
                ${index % 2 === 0 ? "border-r" : ""}
                lg:border-r
                last:lg:border-r-0
                border-gray-200
              `}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#17243D]">
                {stat.value}
              </h3>

              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                {stat.label}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default AboutStats;