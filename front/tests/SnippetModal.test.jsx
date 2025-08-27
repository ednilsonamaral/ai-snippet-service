import { render, screen, fireEvent } from "@testing-library/react";
import SnippetModal from "../app/components/SnippetModal";

describe("SnippetModal", () => {
  it("deve renderizar inputs e botão", () => {
    render(<SnippetModal isOpen={true} onClose={() => {}} onSave={() => {}} />);
    expect(screen.getByLabelText(/título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/código/i)).toBeInTheDocument();
    expect(screen.getByText(/salvar/i)).toBeInTheDocument();
  });

  it("deve chamar onSave com valores preenchidos", () => {
    const handleSave = jest.fn();
    render(<SnippetModal isOpen={true} onClose={() => {}} onSave={handleSave} />);

    fireEvent.change(screen.getByLabelText(/título/i), { target: { value: "Novo snippet" } });
    fireEvent.change(screen.getByLabelText(/código/i), { target: { value: "console.log('test');" } });
    fireEvent.click(screen.getByText(/salvar/i));

    expect(handleSave).toHaveBeenCalledWith({
      title: "Novo snippet",
      code: "console.log('test');"
    });
  });
});
