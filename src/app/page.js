import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";

export default function Home() {
  return (
    <main>
      <Hero />

      <section className="grid md:grid-cols-3 gap-6 px-10 pb-20">
        <FeatureCard
          title="Membership Plans"
          desc="Choose plans according to your fitness goals."
        />

        <FeatureCard
          title="Book Classes"
          desc="Reserve yoga and cardio sessions."
        />

        <FeatureCard
          title="Track Progress"
          desc="Manage your memberships and bookings."
        />
      </section>
    </main>
  );
}