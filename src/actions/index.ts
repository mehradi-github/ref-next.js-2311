"use server";
import * as auth from "@/auth";
import { db } from "@/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const editSnippet = async (id: number, code: string) => {
  console.log(id, code);
  await db.snippet.update({
    where: { id },
    data: { code },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({
    where: { id },
  });
  revalidatePath(`/snippets/${id}`);
  redirect(`/snippets/${id}`);
};

export const CreateSnippet = async (
  formState: { msg: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    if (typeof title !== "string" || title.length < 3)
      return { msg: "Title must be longer." };
    if (typeof code !== "string" || code.length < 4)
      return { msg: "Code must be longer." };
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err: unknown) {
    if (err instanceof Error) return { msg: err.message };
    else return { msg: "Somthing went wrong ..." };
  }
  revalidatePath("/snippets");
  redirect("/snippets");
};

export const signIn = async () => {
  return auth.signIn("github");
};

export const signOut = async () => {
  return auth.signOut("github");
};
