const SnippetModel = require("./snippet.model");

class MongooseSnippetRepository {
  async create(snippet) {
    return await SnippetModel.create(snippet);
  }
  async findAll() {
    return await SnippetModel.find();
  }
  async findById(id) {
    return await SnippetModel.findById(id);
  }
  async update(id, data) {
    return await SnippetModel.findByIdAndUpdate(id, data, { new: true });
  }
  async delete(id) {
    return await SnippetModel.findByIdAndDelete(id);
  }
}

module.exports = MongooseSnippetRepository;
