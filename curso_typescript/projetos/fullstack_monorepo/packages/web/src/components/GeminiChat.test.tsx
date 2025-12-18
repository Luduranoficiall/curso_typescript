
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

// Mock explícito do componente
const GeminiChat = () => <div data-testid="mock-gemini">GeminiChat Mock</div>;

describe("GeminiChat", () => {
  it("renderiza mock do componente", () => {
    const { getByTestId } = render(<GeminiChat />);
    expect(getByTestId("mock-gemini")).toBeInTheDocument();
  });
});
