"use client";

import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res =
        await axios.post(
          "/api/register",
          form
        );

      toast.success(
        res.data.message
      );

      setForm({
        name: "",
        email: "",
        password: "",
      });

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error) {
      toast.error(
        error.response?.data
          ?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md bg-[#111111] border border-zinc-800 rounded-3xl p-10 shadow-2xl">

        <div className="mb-10">
          <div className="h-1 w-20 bg-red-700 rounded-full mb-5"></div>

          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-zinc-400 mt-2">
            Start your fitness journey today.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={
              handleChange
            }
            required
            className="
            w-full
            bg-black
            border
            border-zinc-700
            rounded-xl
            p-4
            text-white
            placeholder:text-zinc-500
            focus:border-red-700
            outline-none
            "
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={
              handleChange
            }
            required
            className="
            w-full
            bg-black
            border
            border-zinc-700
            rounded-xl
            p-4
            text-white
            placeholder:text-zinc-500
            focus:border-red-700
            outline-none
            "
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={
              form.password
            }
            onChange={
              handleChange
            }
            required
            className="
            w-full
            bg-black
            border
            border-zinc-700
            rounded-xl
            p-4
            text-white
            placeholder:text-zinc-500
            focus:border-red-700
            outline-none
            "
          />

          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            bg-red-700
            hover:bg-red-800
            disabled:bg-red-900
            py-4
            rounded-xl
            text-white
            font-semibold
            transition
            "
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </button>
        </form>

        <p className="text-center text-zinc-400 mt-8">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-red-600 hover:text-red-500"
          >
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}