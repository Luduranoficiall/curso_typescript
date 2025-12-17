import bcrypt from 'bcryptjs';

/**
 * Gera um hash seguro para senha usando bcrypt.
 */
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt);
}

/**
 * Compara senha em texto puro com hash armazenado.
 */
export async function comparePassword(password: string, hash: string): Promise<boolean> {
  return bcrypt.compare(password, hash);
}

/**
 * Exemplo de uso seguro:
 *
 * // Cadastro:
 * const hash = await hashPassword('senha123');
 * // Armazene apenas o hash no banco de dados!
 *
 * // Login:
 * const ok = await comparePassword('senha123', hashRecebidoDoBanco);
 */
