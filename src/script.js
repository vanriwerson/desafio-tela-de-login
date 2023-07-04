// O objeto validCredentials contém o e-mail e senha que devem
// ser usados para efetuar login com sucesso nece desafio
const validCredentials = {
  email: 'valid@email.com',
  password: 'strongpassword',
};

const email = document.getElementById('email');
const password = document.getElementById('password');

const button = document.getElementById('login');

function validateCredentials() {
  if (email.value === validCredentials.email &&
  password.value === validCredentials.password) {
    window.alert('Login efetuado com sucesso');
  } else {
    window.alert('E-mail ou senha inválidos');
  }
}

function toggleButtonDisabledProp() {
  button.disabled = !(email.value && password.value);
}

email.addEventListener('input', toggleButtonDisabledProp);
password.addEventListener('input', toggleButtonDisabledProp);

button.addEventListener('click', validateCredentials);
