"use server";

import { options } from "@/app/api/auth/[...nextauth]/options";
import { db } from "@/db";
import { Post } from "@prisma/client";
import { getServerSession } from "next-auth";
import { z } from "zod";

export interface CreatePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

const createPostSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
});
export const createPost = async (
  slug: string,
  formState: CreatePostFormState,
  formData: FormData
): Promise<CreatePostFormState> => {
  const session = await getServerSession(options);

  if (!session || !session.user) {
    return {
      errors: {
        _form: ["You must be signed in to do this."],
      },
    };
  }
  const result = createPostSchema.safeParse({
    title: formData.get("title"),
    content: formData.get("content"),
  });

  if (!result.success) {
    return { errors: result.error.flatten().fieldErrors };
  }

  const topic = await db.topic.findFirst({
    where: { slug },
  });
  if (!topic) {
    return { errors: { _form: ["Connot fint Topic"] } };
  }

  return { errors: {} };
};
