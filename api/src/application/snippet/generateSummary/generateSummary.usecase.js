class GenerateSummaryUseCase {
  constructor(_, llmClient) {
    this.llmClient = llmClient;
  }

  async execute(promptFromUser) {
    if (!promptFromUser || promptFromUser.trim() === "") {
      throw new Error("Prompt não fornecido");
    }

    const prompt = `Summarize in ≤ 30 words: ${promptFromUser}`;

    const response = await this.llmClient.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ],
      max_tokens: 60
    });

    const summary = response.choices[0].message.content.trim();
    return { summary };
  }
}

module.exports = GenerateSummaryUseCase;
