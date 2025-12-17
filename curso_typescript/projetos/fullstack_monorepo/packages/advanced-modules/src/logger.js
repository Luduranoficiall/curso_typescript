// Exemplo de módulo avançado: Logger customizado
export class Logger {
    static info(msg, ctx) {
        console.info(`[INFO] ${msg}`, ctx || '');
    }
    static error(msg, ctx) {
        console.error(`[ERROR] ${msg}`, ctx || '');
    }
    static warn(msg, ctx) {
        console.warn(`[WARN] ${msg}`, ctx || '');
    }
}
//# sourceMappingURL=logger.js.map