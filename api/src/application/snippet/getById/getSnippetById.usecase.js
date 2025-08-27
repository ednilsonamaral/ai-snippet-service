class GetSnippetByIdUseCase {
  constructor(snippetRepository) {
    this.snippetRepository = snippetRepository;
  }

  async execute(id) {
    const snippet = await this.snippetRepository.findById(id);
    if (!snippet) throw new Error("Snippet not found");
    return snippet;
  }
}

module.exports = GetSnippetByIdUseCase;
