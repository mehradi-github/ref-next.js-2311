"use server";
import { options } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/db";
import paths from "@/paths";
import { Topic } from "@prisma/client";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { resolve } from "path";
import { z } from "zod";
const createTopicSchema = z.object({
  name: z
    .string()
    .min(3)
    .regex(/^[a-z-]+$/, {
      message: "Must be lowercase or dashes without spaces",
    }),
  description: z.string().min(10),
});

interface CreateTopicFormState {
  errors: {
    name: string[] | undefined;
    description: string[] | undefined;
    _form: string[] | undefined;
  };
}
export const createTopic: Promise<CreateTopicFormState> = async (
  formState: CreateTopicFormState,
  formData: FormData
) => {
  await new Promise((resolve) => setTimeout(resolve, 2500));

  const session = await getServerSession(options);
  if (!session || !session.user)
    return {
      errors: {
        _form: ["You must be signed in to do this."],
      },
    };

  const result = createTopicSchema.safeParse({
    name: formData.get("name"),
    description: formData.get("description"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  let topic: Topic;
  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) {
      return {
        errors: {
          _form: [err.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ["Something went wrong."],
        },
      };
    }
  }
  revalidatePath("/");
  redirect(paths.topicShow(topic.slug));
};
