const GenerateSummaryUseCase = require("./generateSummary.usecase");

describe("GenerateSummaryUseCase", () => {
  it("should generate a summary", async () => {
    const mockLLM = {
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue({
            choices: [
              { message: { content: "Prints Hello World" } }
            ]
          })
        }
      }
    };

    const useCase = new GenerateSummaryUseCase(null, mockLLM);
    const promptText = "console.log('Hello World');";
    const result = await useCase.execute(promptText);

    expect(result.summary).toBe("Prints Hello World");
    expect(mockLLM.chat.completions.create).toHaveBeenCalledWith(
      expect.objectContaining({
        messages: expect.arrayContaining([
          expect.objectContaining({ content: expect.stringContaining(promptText) })
        ])
      })
    );
  });

  it("should throw an error if prompt is empty", async () => {
    const mockLLM = { chat: { completions: { create: jest.fn() } } };
    const useCase = new GenerateSummaryUseCase(null, mockLLM);

    await expect(useCase.execute("")).rejects.toThrow("Prompt not sended");
  });
});
