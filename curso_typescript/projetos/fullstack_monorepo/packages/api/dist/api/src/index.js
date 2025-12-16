"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
let users = [
    { id: 1, nome: 'Ana', email: 'ana@email.com' },
    { id: 2, nome: 'João', email: 'joao@email.com' }
];
app.get('/api/users', (req, res) => {
    res.json(users);
});
app.post('/api/users', (req, res) => {
    const { nome, email } = req.body;
    const novo = { id: Date.now(), nome, email };
    users.push(novo);
    res.status(201).json(novo);
});
app.listen(4000, () => {
    console.log('API rodando na porta 4000');
});
