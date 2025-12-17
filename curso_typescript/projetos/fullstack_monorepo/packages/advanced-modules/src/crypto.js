import { createRequire as _createRequire } from "module";
const __require = _createRequire(import.meta.url);
// Exemplo de módulo avançado: Utilitário de Criptografia AES
const CryptoJS = __require("crypto-js");
export function encryptAES(text, secret) {
    return CryptoJS.AES.encrypt(text, secret).toString();
}
export function decryptAES(cipher, secret) {
    return CryptoJS.AES.decrypt(cipher, secret).toString(CryptoJS.enc.Utf8);
}
//# sourceMappingURL=crypto.js.map