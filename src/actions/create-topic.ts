"use server";
import { z } from "zod";
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase or dashes without spaces",
    }),
  discription: z.string().min(10),
});
export const createTopic = async (formData: FormData) => {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    discription: formData.get("discription"),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
  }
};
