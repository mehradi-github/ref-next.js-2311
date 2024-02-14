import { db } from "@/db";
const page = async () => {
  const snippets = await db.snippet.findMany();
  return <div>page</div>;
};
export default page;
