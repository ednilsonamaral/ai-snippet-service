const OpenAI = require("openai");

const llmClient = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

module.exports = llmClient;
