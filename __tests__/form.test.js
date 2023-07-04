import fs from 'fs';
import path from 'path';

import { TextEncoder } from 'fast-text-encoding';
global.TextEncoder = TextEncoder;

import { JSDOM } from 'jsdom';

describe('Testes de estrutura do formulário', () => {
  let dom;
  let document;

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf-8');
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  test('O formulário deve estar envolto pela tag "form"', () => {
    const form = document.querySelector('form');
    expect(form).toBeTruthy();
  });

  test('O formulário deve conter apenas 2 inputs', () => {
    const inputs = document.querySelectorAll('input');
    expect(inputs.length).toBe(2);
  });

  test('Os inputs devem ter os ids "email" e "password" respectivamente', () => {
    const emailInput = document.querySelector('input#email');
    expect(emailInput.id).toBe('email');
    
    const passwordInput = document.querySelector('input#password');
    expect(passwordInput.id).toBe('password');
  });

  test('Os inputs devem ter os tipos "email" e "password" respectivamente', () => {
    const emailInput = document.querySelector('input#email');
    expect(emailInput.type).toBe('email');
    
    const passwordInput = document.querySelector('input#password');
    expect(passwordInput.type).toBe('password');
  });

  test('Os inputs devem ter as labels "E-mail" e "Senha" respectivamente', () => {
    const emailLabel = document.querySelector('label[for="email"]');
    expect(emailLabel.textContent).toMatch(/E-mail/);
    
    const passwordLabel = document.querySelector('label[for="password"]');
    expect(passwordLabel.textContent).toMatch(/Senha/);
  });

  test('O formulário deve ter um botão com o id "login" e o texto "Entrar"', () => {
    const button = document.querySelector('button#login');
    expect(button).toBeTruthy();
    expect(button.textContent).toMatch(/entrar/i);
  });
});
