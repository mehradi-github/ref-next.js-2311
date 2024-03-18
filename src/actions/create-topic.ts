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

interface CreateTopicFormState {
  errors: {
    name: string[] | undefined;
    discription: string[] | undefined;
  };
}
export const createTopic: Promise<CreateTopicFormState> = async (
  formState: CreateTopicFormState,
  formData: FormData
) => {
  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    discription: formData.get("discription"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  return { errors: {} };
};
