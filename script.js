const loginEmailTrybe = document.querySelector('#login-email');
const loginSenhaTrybe = document.querySelector('#login-senha');
const loginButtonTrybe = document.querySelector('#login-button');
const containerAvaliacao = document.querySelector('#container-avaliacao');
const concordo = document.querySelector('#agreement');
const buttonSubmit = document.getElementById('submit-btn');
const nameFamily = document.getElementsByName('family');
const listConteudoTech = document.querySelector('#conteudo-tech').getElementsByTagName('input');
const caixaDeTexto = document.querySelector('#textarea');
const contadorDeCaracter = document.querySelector('#counter');

const entrar = function loginTrybewarts(event) {
  event.preventDefault();
  if ((loginEmailTrybe.value === 'tryber@teste.com') && (loginSenhaTrybe.value === '123456')) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};

const criaRadioAvaliacao = () => {
  for (let i = 1; i <= 10; i += 1) {
    const radio = document.createElement('input');
    const label = document.createElement('label');
    radio.type = 'radio';
    radio.name = 'rate';
    radio.classList.add('rate');
    radio.value = i;
    radio.id = `rate${i}`;
    label.htmlFor = `rate${i}`;
    label.appendChild(radio);
    label.innerHTML += i;
    containerAvaliacao.appendChild(label);
  }
  containerAvaliacao.lastElementChild.firstElementChild.checked = true;
};

criaRadioAvaliacao();

const contagemRegressiva = () => {
  contadorDeCaracter.innerHTML = 500 - parseInt(caixaDeTexto.value.length, 10);
};

const listContainerAvaliacao = document.querySelectorAll('.rate');

const habilitaEnviar = function checkHabilitaBotao() {
  if (concordo.checked) {
    buttonSubmit.disabled = false;
  } else if (!concordo.checked) {
    buttonSubmit.disabled = true;
  }
};
function geraValorFamilia() {
  for (let i = 0; i < nameFamily.length; i += 1) {
    if (nameFamily[i].checked) {
      return nameFamily[i].value;
    }
  }
}
function geraValorConteudoTech() {
  const valoresConteudoTech = [];
  for (let i = 0; i < listConteudoTech.length; i += 1) {
    if (listConteudoTech[i].checked) {
      valoresConteudoTech.push(listConteudoTech[i].value);
    }
  }
  return valoresConteudoTech.join(', ');
}
function geraValorValorAvaliacao() {
  for (let i = 0; i < listContainerAvaliacao.length; i += 1) {
    if (listContainerAvaliacao[i].checked) {
      return listContainerAvaliacao[i].value;
    }
  }
}

const criaForm = () => {
  const esperanca = document.querySelector('#evaluation-form');
  const inputName = document.querySelector('#input-name').value;
  const inputLastname = document.querySelector('#input-lastname').value;
  const inputEmail = document.querySelector('#input-email').value;
  const selectHouse = document.querySelector('#house').value;
  const valorFamily = geraValorFamilia();
  const valorConteudoTech = geraValorConteudoTech();
  const valorAvaliacao = geraValorValorAvaliacao();
  const textarea = document.querySelector('#textarea').value;
  esperanca.innerHTML = `<p>Nome: ${inputName} ${inputLastname}</p><p>Email: ${inputEmail}</p>
  <p>Casa: ${selectHouse}</p><p>Família: ${valorFamily}</p>
  <p>Matérias: ${valorConteudoTech}</p>
  <p>Avaliação: ${valorAvaliacao}</p><p>Observações: ${textarea}</p>`;
};
// const conteudoForm = ['Nome', 'Email', 'Casa', 'Família', 'Matérias', 'Avaliação', 'Observações'];
loginButtonTrybe.onclick = entrar;
concordo.onclick = habilitaEnviar;
caixaDeTexto.onkeyup = contagemRegressiva;
buttonSubmit.onclick = criaForm;
