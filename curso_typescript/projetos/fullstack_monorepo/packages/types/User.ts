/**
 * Representa um usuário do sistema
 * @typedef User
 * @property {number} id - Identificador único
 * @property {string} nome - Nome do usuário
 * @property {string} email - E-mail do usuário
 */
export interface User {
  /** Identificador único */
  id: number;
  /** Nome do usuário */
  nome: string;
  /** E-mail do usuário */
  email: string;
}
