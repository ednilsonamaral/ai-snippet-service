const API_URL = "http://localhost:3000/snippets";

export async function getSnippets() {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error("Erro ao buscar snippets");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Erro no getSnippets:", err);
    return []; // fallback
  }
}

export async function createSnippet(snippet) {
  try {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(snippet),
    });
    if (!res.ok) throw new Error("Erro ao criar snippet");
    const data = await res.json();
    return data.data;
  } catch (err) {
    console.error("Erro no createSnippet:", err);
    return null;
  }
}
