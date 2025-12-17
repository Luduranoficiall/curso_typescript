// Exemplo de módulo avançado: Utilitário de Criptografia AES
import CryptoJS = require('crypto-js');

export function encryptAES(text: string, secret: string): string {
  return CryptoJS.AES.encrypt(text, secret).toString();
}

export function decryptAES(cipher: string, secret: string): string {
  return CryptoJS.AES.decrypt(cipher, secret).toString(CryptoJS.enc.Utf8);
}
