const CreateSnippetUseCase = require("./createSnippet.usecase");

describe("CreateSnippetUseCase", () => {
  it("deve criar um snippet válido", async () => {
    const mockRepository = {
      create: jest.fn().mockResolvedValue({
        id: "123",
        title: "Meu snippet",
        code: "console.log('oi')",
        summary: "Prints 'oi'"
      })
    };

    const useCase = new CreateSnippetUseCase(mockRepository);
    const result = await useCase.execute({ title: "Meu snippet", code: "console.log('oi')", summary: "Prints 'oi'" });

    expect(result.title).toBe("Meu snippet");
    expect(mockRepository.create).toHaveBeenCalledTimes(1);
  });

  it("deve lançar erro se faltar título", async () => {
    const mockRepository = { create: jest.fn() };
    const useCase = new CreateSnippetUseCase(mockRepository);

    await expect(useCase.execute({ code: "sem título" })).rejects.toThrow("Título é obrigatório");
  });
});
