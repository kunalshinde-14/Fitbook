export default function FeatureCard({
  icon,
  title,
  desc,
}) {
  return (
    <div
      className="
      bg-[#111]
      border
      border-zinc-800
      rounded-3xl
      p-10
      hover:border-red-700
      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      <div className="text-red-700 text-5xl mb-6">
        {icon}
      </div>

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="text-zinc-400 mt-4">
        {desc}
      </p>
    </div>
  );
}