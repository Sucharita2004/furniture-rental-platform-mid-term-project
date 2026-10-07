import { Check } from "lucide-react";

const StoryPoints = () => {
  const points = [
    "Furniture for different rooms and lifestyles",
    "Flexible rental options",
    "Simple and convenient furniture discovery",
    "A customer-focused rental experience",
  ];

  return (
    <div className="mt-8 space-y-4">
      {points.map((point) => (
        <div
          key={point}
          className="flex items-center gap-3"
        >
          <div className="w-7 h-7 rounded-full bg-[#DDBE70]/20 flex items-center justify-center shrink-0">
            <Check
              size={15}
              className="text-[#B08D3B]"
            />
          </div>

          <span className="text-sm sm:text-base text-[#17243D] font-medium">
            {point}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StoryPoints;