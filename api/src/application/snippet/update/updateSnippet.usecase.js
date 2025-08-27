class UpdateSnippetUseCase {
  constructor(snippetRepository) {
    this.snippetRepository = snippetRepository;
  }

  async execute(id, data) {
    const updated = await this.snippetRepository.update(id, data);
    if (!updated) throw new Error("Snippet not found");
    return updated;
  }
}

module.exports = UpdateSnippetUseCase;
