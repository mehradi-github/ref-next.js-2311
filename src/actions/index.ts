"use server";
import { db } from "@/db";

export const editSnippet = async (id: number, code: string) => {
  console.log(id, code);
};
