const GetSnippetByIdUseCase = require("./getSnippetById.usecase");

describe("GetSnippetByIdUseCase", () => {
  it("should return a snippet", async () => {
    const mockRepository = {
      findById: jest.fn().mockResolvedValue({ id: "123", title: "Meu snippet", code: "console.log('oi')" })
    };

    const useCase = new GetSnippetByIdUseCase(mockRepository);
    const result = await useCase.execute("123");

    expect(result.id).toBe("123");
    expect(mockRepository.findById).toHaveBeenCalledWith("123");
  });

  it("should throw an error if snippet not found", async () => {
    const mockRepository = { findById: jest.fn().mockResolvedValue(null) };
    const useCase = new GetSnippetByIdUseCase(mockRepository);

    await expect(useCase.execute("999")).rejects.toThrow("Snippet not found");
  });
});
