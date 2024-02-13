import { redirect } from "next/navigation";
import { db } from "@/db";

const CreateSnippetPage = () => {
  const CreateSnippet = async (formData: FormData) => {
    "use server";
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });

    console.log(snippet);
    redirect("/");
  };
  return (
    <form action={CreateSnippet}>
      <h1 className="font-bold m-3"> Create Snippet</h1>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>
        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <input
            type="text"
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        <button className="rounded p-2 bg-blue-800 text-white" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
export default CreateSnippetPage;
