class UpdateSnippetUseCase {
  constructor(snippetRepository) {
    this.snippetRepository = snippetRepository;
  }

  async execute(id, data) {
    const updated = await this.snippetRepository.update(id, data);
    if (!updated) throw new Error("Snippet não encontrado");
    return updated;
  }
}

module.exports = UpdateSnippetUseCase;
