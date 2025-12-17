import { z } from 'zod';
export declare const userSchema: z.ZodObject<{
    id: z.ZodString;
    nome: z.ZodString;
    email: z.ZodString;
    idade: z.ZodNumber;
}, z.core.$strip>;
export type User = z.infer<typeof userSchema>;
export declare function validarUsuario(dados: unknown): User;
//# sourceMappingURL=validation.d.ts.map