// Exemplo de módulo avançado: Logger customizado
export class Logger {
  static info(msg: string, ctx?: object) {
    console.info(`[INFO] ${msg}`, ctx || '');
  }
  static error(msg: string, ctx?: object) {
    console.error(`[ERROR] ${msg}`, ctx || '');
  }
  static warn(msg: string, ctx?: object) {
    console.warn(`[WARN] ${msg}`, ctx || '');
  }
}
