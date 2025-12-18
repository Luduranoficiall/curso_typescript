# Trilha Temática: CI/CD Mobile

## Exercício 1: Pipeline de Build e Teste com GitHub Actions
**Enunciado:**
Configure um workflow para buildar e testar app React Native.
**Solução:**
```yaml
name: CI Mobile
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: '20' }
      - run: npm ci
      - run: npm run test
      - run: npx react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/main.jsbundle
```

---
## Exercício 2: Deploy Automático com Fastlane
**Enunciado:**
Implemente deploy automatizado para Google Play usando Fastlane.
**Solução:**
```ruby
# Fastfile
lane :deploy do
  gradle(task: "assembleRelease")
  upload_to_play_store(track: "beta")
end
```
