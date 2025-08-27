const GetSnippetByIdUseCase = require("./getSnippetById.usecase");

describe("GetSnippetByIdUseCase", () => {
  it("deve retornar um snippet por ID", async () => {
    const mockRepository = {
      findById: jest.fn().mockResolvedValue({ id: "123", title: "Meu snippet", code: "console.log('oi')" })
    };

    const useCase = new GetSnippetByIdUseCase(mockRepository);
    const result = await useCase.execute("123");

    expect(result.id).toBe("123");
    expect(mockRepository.findById).toHaveBeenCalledWith("123");
  });

  it("deve lançar erro se não encontrar", async () => {
    const mockRepository = { findById: jest.fn().mockResolvedValue(null) };
    const useCase = new GetSnippetByIdUseCase(mockRepository);

    await expect(useCase.execute("999")).rejects.toThrow("Snippet não encontrado");
  });
});
