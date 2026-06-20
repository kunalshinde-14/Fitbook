export default function Stats() {
  const stats = [
    {
      number: "500+",
      title: "Active Members",
    },
    {
      number: "50+",
      title: "Classes Every Week",
    },
    {
      number: "4.9★",
      title: "User Rating",
    },
  ];

  return (
    <section className="pb-24 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {stats.map((item) => (
          <div
            key={item.title}
            className="
            bg-[#111]
            border
            border-zinc-800
            rounded-3xl
            p-10
            text-center
            "
          >
            <h2 className="text-5xl font-bold text-red-700">
              {item.number}
            </h2>

            <p className="text-zinc-400 mt-4">
              {item.title}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}