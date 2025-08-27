class Snippet {
  constructor({ title, code, summary }) {
    if (!title) throw new Error("Title is required");
    if (!code) throw new Error("Code is required");
    if (!summary) throw new Error("Summary is required");

    this.title = title;
    this.code = code;
    this.summary = summary;
  }
}

module.exports = Snippet;
