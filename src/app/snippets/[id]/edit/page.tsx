import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetEditPageProps {
  params: {
    id: string;
  };
}
const SnippetEditPage = (props: SnippetEditPageProps) => {
  const id = parseInt(props.params.id);
  const snippet = db.snippet.findFirst({
    where: { id: id },
  });
  if (!snippet) return notFound();
  return <div>Edit {id}</div>;
};
export default SnippetEditPage;
