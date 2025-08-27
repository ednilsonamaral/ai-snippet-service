import React, { useState } from "react";

export default function SnippetModal({ onCreate }) {
  const [title, setTitle] = useState("");
  const [code, setCode] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    onCreate({ title, code });
    setTitle("");
    setCode("");
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-4 rounded shadow-md w-96"
      >
        <h2 className="text-lg mb-2">Criar Snippet</h2>
        <input
          className="border p-2 w-full mb-2"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        <textarea
          className="border p-2 w-full mb-2"
          placeholder="Code"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">
          Criar
        </button>
      </form>
    </div>
  );
}
