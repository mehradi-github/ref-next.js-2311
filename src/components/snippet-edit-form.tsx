"use client";
import type { Snippet } from "@prisma/client";
interface SnippetEditFormProp {
  snippet: Snippet;
}
const SnippetEditForm = ({ snippet }: SnippetEditFormProp) => {
  return <div>SnippetEditForm {snippet.title}</div>;
};
export default SnippetEditForm;
