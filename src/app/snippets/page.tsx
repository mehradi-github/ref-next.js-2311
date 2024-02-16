import { db } from "@/db";
import Link from "next/link";
const page = async () => {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((s) => {
    return (
      <div
        key={s.id}
        className="flex justify-between items-center p-2 border rounded"
      >
        <div>{s.title}</div>
        <div>
          <Link href={`/snippet/${s.id}`}>view</Link>{" "}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex m-2 justify-between items-center">
        <h1 className="font-bold text-xl">Snippets</h1>
        <Link href="/snippet/new" className="border p-2 rounded ">
          New
        </Link>
      </div>
      <div className="flex flex-col gap-2">{renderedSnippets}</div>
    </div>
  );
};
export default page;
