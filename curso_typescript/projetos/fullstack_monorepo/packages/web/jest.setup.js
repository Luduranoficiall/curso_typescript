// jest.setup.js
Object.defineProperty(global, 'import.meta', {
  value: {
    env: {
      VITE_GEMINI_API_KEY: 'fake-key-jest',
    },
  },
});
