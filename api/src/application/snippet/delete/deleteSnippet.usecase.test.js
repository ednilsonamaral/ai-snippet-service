const DeleteSnippetUseCase = require("./deleteSnippet.usecase");

describe("DeleteSnippetUseCase", () => {
  it("should delete a snippet", async () => {
    const mockRepository = { delete: jest.fn().mockResolvedValue(true) };

    const useCase = new DeleteSnippetUseCase(mockRepository);
    const result = await useCase.execute("123");

    expect(result).toBe(true);
    expect(mockRepository.delete).toHaveBeenCalledWith("123");
  });

  it("should throw an error if snippet not found", async () => {
    const mockRepository = { delete: jest.fn().mockResolvedValue(null) };
    const useCase = new DeleteSnippetUseCase(mockRepository);

    await expect(useCase.execute("999")).rejects.toThrow("Snippet not found");
  });
});
