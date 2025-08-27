class SnippetController {
  constructor({ createSnippetUseCase, getSnippetsUseCase, getSnippetByIdUseCase, updateSnippetUseCase, deleteSnippetUseCase, generateSummaryUseCase }) {
    this.createSnippetUseCase = createSnippetUseCase;
    this.getSnippetsUseCase = getSnippetsUseCase;
    this.getSnippetByIdUseCase = getSnippetByIdUseCase;
    this.updateSnippetUseCase = updateSnippetUseCase;
    this.deleteSnippetUseCase = deleteSnippetUseCase;
    this.generateSummaryUseCase = generateSummaryUseCase;
  }

  async create(req, res) {
    try {
      const snippet = await this.createSnippetUseCase.execute(req.body);
      res.status(201).json(snippet);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  async list(req, res) {
    const snippets = await this.getSnippetsUseCase.execute();
    res.json(snippets);
  }

  async get(req, res) {
    try {
      const snippet = await this.getSnippetByIdUseCase.execute(req.params.id);
      res.json(snippet);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async update(req, res) {
    try {
      const snippet = await this.updateSnippetUseCase.execute(req.params.id, req.body);
      res.json(snippet);
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async remove(req, res) {
    try {
      await this.deleteSnippetUseCase.execute(req.params.id);
      res.status(204).end();
    } catch (err) {
      res.status(404).json({ error: err.message });
    }
  }

  async summary(req, res) {
    try {
      const result = await this.generateSummaryUseCase.execute();
      res.json(result);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }
}

module.exports = SnippetController;
