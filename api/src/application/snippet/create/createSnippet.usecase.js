const Snippet = require("../../../domain/snippet.entity");

class CreateSnippetUseCase {
  constructor(snippetRepository) {
    this.snippetRepository = snippetRepository;
  }

  async execute(data) {
    const snippet = new Snippet(data);
    return await this.snippetRepository.create(snippet);
  }
}

module.exports = CreateSnippetUseCase;
