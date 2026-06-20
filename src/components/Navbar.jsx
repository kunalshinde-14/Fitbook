import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-5 border-b border-zinc-800 bg-black">

      <Link href="/">
        <h1 className="text-3xl font-black tracking-tight text-white">
          Fit<span className="text-red-700">Book</span>
        </h1>
      </Link>

      <div className="flex gap-8 text-white font-medium">
        <Link
          href="/plans"
          className="hover:text-red-600 transition"
        >
          Plans
        </Link>

        <Link
          href="/classes"
          className="hover:text-red-600 transition"
        >
          Classes
        </Link>

        <Link
          href="/login"
          className="hover:text-red-600 transition"
        >
          Login
        </Link>

        <Link
          href="/register"
          className="
            bg-red-700
            hover:bg-red-800
            px-5
            py-2
            rounded-full
            transition
          "
        >
          Register
        </Link>
      </div>

    </nav>
  );
}