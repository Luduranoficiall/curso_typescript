// Exemplo prático: Teste E2E com Cypress
// Salve este arquivo em cypress/e2e/ para rodar com Cypress

describe('Fluxo de autenticação', () => {
  it('deve registrar, logar e acessar rota protegida', () => {
    cy.request('POST', 'http://localhost:4001/register', { email: 'test@exemplo.com', password: '123456' });
    cy.request('POST', 'http://localhost:4001/login', { email: 'test@exemplo.com', password: '123456' })
      .its('body.token').then(token => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:4001/me',
          headers: { Authorization: `Bearer ${token}` }
        }).its('body.user.email').should('eq', 'test@exemplo.com');
      });
  });
});
/// <reference types="cypress" />
  
describe('Fluxo de autenticação', () => {
  it('deve registrar, logar e acessar rota protegida', () => {
    cy.request('POST', 'http://localhost:4001/register', { email: 'test@exemplo.com', password: '123456' });
    cy.request('POST', 'http://localhost:4001/login', { email: 'test@exemplo.com', password: '123456' })
      .its('body.token').then((token: string) => {
        cy.request({
          method: 'GET',
          url: 'http://localhost:4001/me',
          headers: { Authorization: `Bearer ${token}` }
        });
      });
  });
});
