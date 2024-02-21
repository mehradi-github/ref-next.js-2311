"use server";
import { db } from "@/db";
import { redirect } from "next/navigation";

export const editSnippet = async (id: number, code: string) => {
  console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id },
  });
  redirect(`/snippets/${id}`);
};

export const CreateSnippet = async (
  formState: { msg: string },
  formData: FormData
) => {
  const title = formData.get("title") as string;
  const code = formData.get("code") as string;

  if (typeof title !== "string" || title.length < 3)
    return { msg: "Title must be longer." };
  if (typeof code !== "string" || title.length < 5)
    return { msg: "Code must be longer." };
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });

  console.log(snippet);
  redirect("/snippet");
};
