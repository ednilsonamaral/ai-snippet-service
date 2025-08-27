const UpdateSnippetUseCase = require("./updateSnippet.usecase");

describe("UpdateSnippetUseCase", () => {
  it("should update a snippet", async () => {
    const mockRepository = {
      update: jest.fn().mockResolvedValue({ id: "123", title: "Atualizado", code: "console.log('novo')" })
    };

    const useCase = new UpdateSnippetUseCase(mockRepository);
    const result = await useCase.execute("123", { title: "Atualizado" });

    expect(result.title).toBe("Atualizado");
    expect(mockRepository.update).toHaveBeenCalledWith("123", { title: "Atualizado" });
  });

  it("should throw an error if snippet not found", async () => {
    const mockRepository = { update: jest.fn().mockResolvedValue(null) };
    const useCase = new UpdateSnippetUseCase(mockRepository);

    await expect(useCase.execute("999", { title: "Novo" })).rejects.toThrow("Snippet not found");
  });
});
