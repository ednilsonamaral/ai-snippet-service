const CreateSnippetUseCase = require("./createSnippet.usecase");

describe("CreateSnippetUseCase", () => {
  it("should create a valid snippet", async () => {
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

  it("should throw an error if title is empty", async () => {
    const mockRepository = { create: jest.fn() };
    const useCase = new CreateSnippetUseCase(mockRepository);

    await expect(useCase.execute({ code: "sem título" })).rejects.toThrow("Title is required");
  });
});
