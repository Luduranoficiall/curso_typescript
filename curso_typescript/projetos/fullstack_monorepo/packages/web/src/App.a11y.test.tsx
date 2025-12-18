import React from 'react';
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

// Declaração global para compatibilidade TypeScript
declare const global: typeof globalThis;
import App from './App';

expect.extend(toHaveNoViolations);

beforeAll(() => {
  global.fetch = jest.fn(() =>
    Promise.resolve({
      ok: true,
      status: 200,
      headers: new Headers(),
      redirected: false,
      statusText: 'OK',
      type: 'basic',
      url: '',
      clone: () => ({} as Response),
      body: null,
      bodyUsed: false,
      arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
      blob: () => Promise.resolve(new Blob()),
      formData: () => Promise.resolve(new FormData()),
      json: () => Promise.resolve([]),
      text: () => Promise.resolve(''),
    } as Response)
  );
});

afterAll(() => {
  if (global.fetch && typeof global.fetch === 'function' && 'mockClear' in global.fetch) {
    (global.fetch as jest.Mock).mockClear();
  }
    // @ts-expect-error: redefinindo fetch para undefined após mock de teste
    (global as typeof globalThis & { fetch?: unknown }).fetch = undefined;
});

jest.mock('./components/GeminiChat', () => ({
  GeminiChat: () => <div data-testid="mock-gemini">GeminiChat Mock</div>
}));

describe('Acessibilidade (axe)', () => {
  it('App não possui violações de acessibilidade básicas', async () => {
    const { container } = render(<App />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
