import { Companion } from "@/types/companion"
import { Bookmark, Clock } from "lucide-react"
import Link from "next/link"

interface CompanionCardProps {
  companion: Companion
}

export default function CompanionCard({
  companion
}: CompanionCardProps) {
  return (
    <div
      className="companion-card"
      style={{ backgroundColor: companion.color }}
    >
      <div className="flex justify-between items-center">
        <div className="bg-black rounded-xl px-2 text-white">{companion.subject}</div>
        <button className="bg-black rounded-full p-1 text-white">
          <Bookmark size={20} />
        </button>
      </div>
      <h2 className="text-xl font-semibold">{companion.name}</h2>
      <p className="text-sm">{companion.topic}</p>
      <div className="flex items-center gap-2 font-medium">
        <Clock size={16} />
        <p className="text-sm">{companion.duration} mins duration</p>
      </div>

      <Link href={`/companions/${companion.id}`}>
        <button className="bg-btn-red text-white px-5 py-2 rounded-xl">
          Launch Lesson
        </button>
      </Link>
    </div>
  )
}
