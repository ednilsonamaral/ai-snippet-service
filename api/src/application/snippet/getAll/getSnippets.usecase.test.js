const GetSnippetsUseCase = require("./getSnippets.usecase");

describe("GetSnippetsUseCase", () => {
  it("should reutrn all snippets", async () => {
    const mockRepository = {
      findAll: jest.fn().mockResolvedValue([{ id: "1", title: "Snippet 1", code: "123" }])
    };

    const useCase = new GetSnippetsUseCase(mockRepository);
    const result = await useCase.execute();

    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Snippet 1");
    expect(mockRepository.findAll).toHaveBeenCalledTimes(1);
  });
});
