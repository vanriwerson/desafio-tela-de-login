import fs from 'fs';
import path from 'path';

import '@babel/register';

import { TextEncoder } from 'fast-text-encoding';
global.TextEncoder = TextEncoder;

import { JSDOM } from 'jsdom';
import { fireEvent } from '@testing-library/dom/dist/@testing-library/dom.umd.js';

import validCredentials from '../validCredentials';

describe('Testes de interação com o formulário', () => {
  let dom;
  let document;
  let emailInput;
  let passwordInput;
  let button;
  let showAlert = jest.fn();

  beforeAll(() => {
    const html = fs.readFileSync(path.resolve(__dirname, '../src/index.html'), 'utf-8');
    dom = new JSDOM(html, { runScripts: 'dangerously' });
    document = dom.window.document;

    emailInput = document.getElementById('email');
    passwordInput = document.getElementById('password');
    button = document.getElementById('login');

    const scriptContent = fs.readFileSync(path.resolve(__dirname, '../src/script.js'), 'utf-8');
    const scriptElement = document.createElement('script');
    scriptElement.textContent = scriptContent;
    document.head.appendChild(scriptElement);

    dom.window.alert = showAlert;
  });

  test('Deve existir uma variável para cada elemento do formulário', () => {
    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
    expect(button).toBeDefined();
  });

  test('O botão "Entrar" deve estar desabilitado ao carregar a página', () => {
    expect(button.disabled).toBe(true);
  });

  test('O botão "Entrar" deve ser habilitado quando os campos "E-mail" e "Senha" estiverem preenchidos', () => {
    fireEvent.input(emailInput, { target: { value: validCredentials.email } });
    fireEvent.input(passwordInput, { target: { value: validCredentials.password } });
    expect(button.disabled).toBe(false);
  });

  test('Deve exibir um alerta com a mensagem "E-mail ou senha inválidos" se as credenciais forem inválidas', () => {
    fireEvent.input(emailInput, { target: { value: 'wrongmail@email.com' } });
    fireEvent.input(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(button);

    expect(showAlert).toHaveBeenCalledWith('E-mail ou senha inválidos');
  });

  test('Deve exibir um alerta com a mensagem "Login efetuado com sucesso" sucesso se as credenciais forem válidas', () => {
    fireEvent.input(emailInput, { target: { value: validCredentials.email } });
    fireEvent.input(passwordInput, { target: { value: validCredentials.password } });
    fireEvent.click(button);

    expect(showAlert).toHaveBeenCalledWith('Login efetuado com sucesso');
  });
});
