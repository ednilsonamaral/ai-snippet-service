import React from "react";

export default function SnippetTable({ snippets = [] }) {
  if (!snippets.length) return <p>Nenhum snippet encontrado</p>;

  return (
    <div>
      {snippets.length === 0 ? (
        <p>Nenhum snippet encontrado</p>
      ) : (
        <div>
          <p>Component SnippetTable carregado!</p>
        
          <table className="table-auto border-collapse border border-gray-300 w-full">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2">ID</th>
                <th className="border border-gray-300 p-2">Title</th>
                <th className="border border-gray-300 p-2">Code</th>
                <th className="border border-gray-300 p-2">Created At</th>
              </tr>
            </thead>
            <tbody>
              {snippets.map(snippet => (
                <tr key={snippet._id}>
                  <td className="border border-gray-300 p-2">{snippet._id}</td>
                  <td className="border border-gray-300 p-2">{snippet.title}</td>
                  <td className="border border-gray-300 p-2">{snippet.code}</td>
                  <td className="border border-gray-300 p-2">
                    {new Date(snippet.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
