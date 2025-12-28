import { companions } from "@/lib/constants";
import { getSubjectColor } from "@/utils/getColor";
import Image from "next/image";
import Link from "next/link";

export default function CompanionsList() {
  return (
    <div className="rounded-4xl border border-border p-6 bg-card w-full text-foreground">
      <h2 className="mb-4 text-2xl font-semibold text-heading">
        Recently Completed Lessons
      </h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-base">
          <thead>
            <tr className="">
              <th className="py-4 font-medium">Lesson</th>
              <th className="py-4 font-medium">Subject</th>
              <th className="py-4 font-medium text-right">Duration</th>
            </tr>
          </thead>

          <tbody>
            {companions.map((item) => (
              <tr
                key={item.id}
              >
                {/* Lesson */}
                <td className="py-4">
                  <Link href={`/companions/${item.id}`}>
                    <div className="flex items-center gap-4">

                      <div
                        className="size-15 flex items-center justify-center rounded-lg max-md:hidden"
                        style={{ backgroundColor: getSubjectColor(item.subject) }}
                      >
                        <Image
                          src={`/icons/${item.subject}.svg`}
                          alt={item.subject}
                          width={28}
                          height={28}
                        />
                      </div>

                      <div>
                        <p className="font-semibold text-lg text-heading group-hover:underline">
                          {item.name}
                        </p>
                        <p className="text-sm text-foreground/80">
                          {item.topic}
                        </p>
                      </div>
                    </div>
                  </Link>
                </td>

                {/* Subject */}
                <td className="py-4">
                  <span
                    className="inline-flex rounded-full px-3 py-1 bg-[#f4db7f] text-black font-medium text-sm"
                  >
                    {item.subject}
                  </span>
                </td>

                {/* Duration */}
                <td className="py-4 text-right font-medium">
                  {item.duration} mins
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
