import React, { FC } from "react";

const CreateSnippet: FC = () => {
  return (
    <div>
      <div className="font-bold m-3">
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <lable className="w-12" htmlFor="title">
              Title
            </lable>
            <input
              type="text"
              name="title"
              className="border rounded p-2 w-full"
              id="title"
            />
          </div>
          <div className="flex gap-4">
            <lable className="w-12" htmlFor="code">
              Code
            </lable>
            <input
              type="text"
              name="code"
              className="border rounded p-2 w-full"
              id="code"
            />
          </div>
          <button className="rounded p-2 pg-blue-200" type="submit">
            Create
          </button>
        </div>
      </div>
    </div>
  );
};
export default CreateSnippet;
