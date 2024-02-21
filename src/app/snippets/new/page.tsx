"use client";
import { redirect } from "next/navigation";
import { db } from "@/db";
import { useFormState } from "react-dom";
import * as actions from "@/actions";

const CreateSnippetPage = () => {
  const [formState, action] = useFormState(actions.CreateSnippet, { msg: "" });
  return (
    <form action={action}>
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
        {formState ? (
          <div className="my-2 p-2 bg-red-200 border rounded border-red-400">
            {formState.msg}
          </div>
        ) : null}
        <button className="rounded p-2 bg-blue-800 text-white" type="submit">
          Create
        </button>
      </div>
    </form>
  );
};
export default CreateSnippetPage;
