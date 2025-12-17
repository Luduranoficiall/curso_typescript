// Exemplo de módulo avançado: Validação de Dados com Zod
import { z } from 'zod';
export const userSchema = z.object({
    id: z.string().uuid(),
    nome: z.string().min(3),
    email: z.string().email(),
    idade: z.number().int().min(18)
});
export function validarUsuario(dados) {
    return userSchema.parse(dados);
}
//# sourceMappingURL=validation.js.map