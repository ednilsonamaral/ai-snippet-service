import React, { useEffect, useState } from "react";
import SnippetTable from "../components/SnippetTable.jsx";
import SnippetModal from "../components/SnippetModal.jsx";
import { getSnippets, createSnippet } from "../services/snippetService.js";

export default function Index() {
  const [snippets, setSnippets] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    loadSnippets();
  }, []);

  async function loadSnippets() {
    const data = await getSnippets();
    setSnippets(data);
  }

  async function handleCreate(snippet) {
    await createSnippet(snippet);
    setShowModal(false);
    loadSnippets();
  }

  return (
    <div className="p-4">
      <h1 className="text-xl mb-4">Snippets</h1>
      <button
        className="mb-4 bg-green-500 text-white px-4 py-2 rounded"
        onClick={() => setShowModal(true)}
      >
        Novo Snippet
      </button>
      <SnippetTable snippets={snippets} />
      {showModal && <SnippetModal onCreate={handleCreate} />}
    </div>
  );
}
