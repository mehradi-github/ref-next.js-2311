"use client";
import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
interface SnippetEditFormProp {
  snippet: Snippet;
}
const SnippetEditForm = ({ snippet }: SnippetEditFormProp) => {
  const [code, setCode] = useState(snippet.code);
  return (
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="jvascript"
        defaultValue={code}
        options={{ minimap: { enabled: false } }}
        onChange={(v: string = "") => {
          setCode(v);
        }}
      />
    </div>
  );
};
export default SnippetEditForm;
