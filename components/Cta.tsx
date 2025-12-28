import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Cta = () => {
  return (
    <section className="cta-section">
      <div className="bg-[#ffda6e] text-black rounded-xl px-4 py-1 font-medium mx-auto w-fit text-sm">
        Start learning your way
      </div>
      <h2 className="text-3xl font-bold">
        Build and Personalize Learning Companion
      </h2>
      <p>Pick a name, subject, voice, & personality — and start learning through voice conversations that feel natural and fun.</p>

      <Image
        src="images/cta.svg"
        alt="cta"
        width={362}
        height={232}
      />
      <button className="bg-btn-red text-white flex items-center p-2 rounded-xl gap-2 mx-auto font-medium">
        <Plus size={20} />
        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  )
}

export default Cta;
