import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import Cta from "@/components/Cta";
import { companions } from "@/lib/constants";

export default function Home() {
  return (
    <main className="space-y-6">
      <h1 className="text-2xl underline">Popular Companions</h1>
      <section className="home-section">
        {
          companions.map(item =>
            <CompanionCard key={item.id} companion={item} />
          )
        }
        {/* <CompanionCard /> */}
        {/* <CompanionCard /> */}
        {/* <CompanionCard /> */}
      </section>

      <section className="home-section">
        <CompanionsList />
        <Cta />
      </section>
    </main>
  );
}
