import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-[85vh]
      bg-black
      flex
      items-center
      justify-center
      overflow-hidden
      px-6
      py-20
      "
    >
      {/* Subtle Red Glow */}
      <div
        className="
        absolute
        top-32
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-red-700/15
        opacity-70
        blur-[160px]
        rounded-full
        z-0
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">

        {/* Badge */}
        <p
          className="
          text-red-600
          font-semibold
          tracking-[8px]
          mb-8
          "
        >
          FITBOOK
        </p>

        {/* Heading */}
        <h1
          className="
          text-5xl
          md:text-6xl
          lg:text-6xl
          font-black
          text-white
          leading-[1.1]
          "
        >
          Train Hard.
          <br />

          <span className="text-red-700">
            Track Progress.
          </span>

          <br />

          Transform Yourself.
        </h1>

        {/* Subtitle */}
        <p
          className="
          text-zinc-400
          text-lg
          md:text-xl
          mt-10
          max-w-3xl
          mx-auto
          "
        >
          Book classes, manage memberships,
          track workouts and stay consistent
          with your fitness journey.
        </p>

        {/* Buttons */}
        <div
          className="
          flex
          justify-center
          gap-6
          mt-12
          flex-wrap
          "
        >
          <Link
            href="/register"
            className="
            bg-red-700
            hover:bg-red-800
            px-10
            py-5
            rounded-full
            text-lg
            font-bold
            text-white
            transition
            shadow-lg
            shadow-red-900/40
            "
          >
            Start Training
          </Link>

          <Link
            href="/plans"
            className="
            border
            border-zinc-700
            hover:border-red-700
            px-10
            py-5
            rounded-full
            text-lg
            font-bold
            text-white
            transition
            "
          >
            View Plans
          </Link>
        </div>

        {/* Stats */}
        <div
          className="
          flex
          justify-center
          gap-16
          mt-20
          flex-wrap
          "
        >
          <div>
            <h3 className="text-4xl font-bold text-red-600">
              500+
            </h3>

            <p className="text-zinc-400 mt-2">
              Active Members
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600">
              50+
            </h3>

            <p className="text-zinc-400 mt-2">
              Weekly Classes
            </p>
          </div>

          <div>
            <h3 className="text-4xl font-bold text-red-600">
              4.9★
            </h3>

            <p className="text-zinc-400 mt-2">
              User Rating
            </p>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div
          className="
          mt-24
          mx-auto
          max-w-4xl
          bg-[#111111]
          border
          border-zinc-800
          rounded-[32px]
          p-8
          shadow-2xl
          "
        >
          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-black rounded-2xl p-6">
              <p className="text-zinc-400">
                Calories Burned
              </p>

              <h2 className="text-4xl font-bold text-red-600 mt-3">
                1540
              </h2>
            </div>

            <div className="bg-black rounded-2xl p-6">
              <p className="text-zinc-400">
                Workouts
              </p>

              <h2 className="text-4xl font-bold text-red-600 mt-3">
                12
              </h2>
            </div>

            <div className="bg-black rounded-2xl p-6">
              <p className="text-zinc-400">
                Membership
              </p>

              <h2 className="text-3xl font-bold text-green-500 mt-3">
                Active
              </h2>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}