import { render, screen } from "@testing-library/react";
import SnippetTable from "../app/components/SnippetTable";

describe("SnippetTable", () => {
  it("deve renderizar a lista de snippets", () => {
    const snippets = [
      { _id: "1", title: "Snippet 1", code: "console.log('1')" },
      { _id: "2", title: "Snippet 2", code: "console.log('2')" }
    ];

    render(<SnippetTable snippets={snippets} />);

    expect(screen.getByText("Snippet 1")).toBeInTheDocument();
    expect(screen.getByText("Snippet 2")).toBeInTheDocument();
  });

  it("deve mostrar mensagem se não houver snippets", () => {
    render(<SnippetTable snippets={[]} />);
    expect(screen.getByText(/nenhum snippet encontrado/i)).toBeInTheDocument();
  });
});
