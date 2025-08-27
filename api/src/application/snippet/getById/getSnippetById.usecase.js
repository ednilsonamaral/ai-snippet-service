class GetSnippetByIdUseCase {
  constructor(snippetRepository) {
    this.snippetRepository = snippetRepository;
  }

  async execute(id) {
    const snippet = await this.snippetRepository.findById(id);
    if (!snippet) throw new Error("Snippet não encontrado");
    return snippet;
  }
}

module.exports = GetSnippetByIdUseCase;
