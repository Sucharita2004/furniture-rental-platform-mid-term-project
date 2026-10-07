import type { LucideIcon } from "lucide-react";

interface StoryFeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const StoryFeatureCard = ({
  icon: Icon,
  title,
  description,
}: StoryFeatureCardProps) => {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5">
      <Icon
        size={24}
        className="text-[#B08D3B]"
      />

      <h3 className="mt-3 font-bold text-[#17243D]">
        {title}
      </h3>

      <p className="mt-1 text-xs text-gray-500">
        {description}
      </p>
    </div>
  );
};

export default StoryFeatureCard;