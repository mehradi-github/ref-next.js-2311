import { db } from "@/db";
const page = async () => {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((s) => {
    return <div key={s.id}>{s.title}</div>;
  });
  return <div>{renderedSnippets}</div>;
};
export default page;
