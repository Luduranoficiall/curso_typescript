import { validarUsuario } from './validation.js';
import { encryptAES, decryptAES } from './crypto.js';
import { Logger } from './logger.js';

describe('Módulo Avançado', () => {
  it('valida usuário corretamente', () => {
    const user = validarUsuario({
      id: 'b3b3b3b3-b3b3-4b3b-b3b3-b3b3b3b3b3b3',
      nome: 'João',
      email: 'joao@email.com',
      idade: 30
    });
    expect(user.nome).toBe('João');
  });

  it('criptografa e descriptografa texto', () => {
    const secret = 'segredo';
    const texto = 'mensagem';
    const cifrado = encryptAES(texto, secret);
    const decifrado = decryptAES(cifrado, secret);
    expect(decifrado).toBe(texto);
  });

  it('loga mensagens sem erro', () => {
    expect(() => Logger.info('Teste info')).not.toThrow();
    expect(() => Logger.error('Teste erro')).not.toThrow();
    expect(() => Logger.warn('Teste warn')).not.toThrow();
  });
});
