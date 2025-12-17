import { jsx as _jsx } from "react/jsx-runtime";
import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from './App';
expect.extend(toHaveNoViolations);
beforeAll(() => {
    global.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        status: 200,
        headers: new Headers(),
        redirected: false,
        statusText: 'OK',
        type: 'basic',
        url: '',
        clone: () => ({}),
        body: null,
        bodyUsed: false,
        arrayBuffer: () => Promise.resolve(new ArrayBuffer(0)),
        blob: () => Promise.resolve(new Blob()),
        formData: () => Promise.resolve(new FormData()),
        json: () => Promise.resolve([]),
        text: () => Promise.resolve(''),
    }));
});
afterAll(() => {
    if (global.fetch && typeof global.fetch === 'function' && 'mockClear' in global.fetch) {
        global.fetch.mockClear();
    }
    // @ts-expect-error: redefinindo fetch para undefined após mock de teste
    global.fetch = undefined;
});
describe('Acessibilidade (axe)', () => {
    it('App não possui violações de acessibilidade básicas', async () => {
        const { container } = render(_jsx(App, {}));
        const results = await axe(container);
        expect(results).toHaveNoViolations();
    });
});
