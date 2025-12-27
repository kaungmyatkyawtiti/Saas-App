import z from "zod";

export const CompanionSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Companion is required.' }),
  subject: z
    .string()
    .min(1, { message: 'Subject is required.' }),
  topic: z
    .string()
    .min(1, { message: 'Topic is required.' }),
  voice: z.string()
    .min(1, { message: 'Voice is required.' }),
  style: z.string()
    .min(1, { message: 'Style is required.' }),
  duration: z
    .coerce
    .number<number>()
    .refine((val) => val !== 0, {
      message: "duration is required",
    })
    .positive({ message: "duration must be positive number" })
    .int({ message: "duration must be an integer" })
    .min(1, { message: "duration must be at least 1" })
})
