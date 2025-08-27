class GetSnippetsUseCase {
  constructor(snippetRepository) {
    this.snippetRepository = snippetRepository;
  }

  async execute() {
    return await this.snippetRepository.findAll();
  }
}

module.exports = GetSnippetsUseCase;
