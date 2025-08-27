class Snippet {
  constructor({ title, code, summary }) {
    if (!title) throw new Error("Título é obrigatório");
    if (!code) throw new Error("Código é obrigatório");
    if (!summary) throw new Error("Summary é obrigatório");

    this.title = title;
    this.code = code;
    this.summary = summary;
  }
}

module.exports = Snippet;
