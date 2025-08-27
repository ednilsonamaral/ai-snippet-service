class DeleteSnippetUseCase {
  constructor(snippetRepository) {
    this.snippetRepository = snippetRepository;
  }

  async execute(id) {
    const deleted = await this.snippetRepository.delete(id);
    if (!deleted) throw new Error("Snippet não encontrado");
    return true;
  }
}

module.exports = DeleteSnippetUseCase;
