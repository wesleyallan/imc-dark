function imcResultText(imc) {
  const imcResultText = document.querySelector('#imc-result-text');
  imcResultText.innerHTML = '';
  imcResultText.classList.remove('danger', 'alert', 'nice');
  if (imc < 16) {
    imcResultText.classList.add('danger');
    imcResultText.textContent = 'Invalido!';
  } else if (imc < 17) {
    imcResultText.classList.add('danger');
    imcResultText.textContent = 'Muito abaixo do peso';
  } else if (imc < 18.5) {
    imcResultText.classList.add('alert');
    imcResultText.textContent = 'Abaixo do peso';
  } else if (imc < 25) {
    imcResultText.classList.add('nice');
    imcResultText.textContent = 'Peso normal';
  } else if (imc < 30) {
    imcResultText.classList.add('alert');
    imcResultText.textContent = 'Acima do peso';
  } else if (imc < 35) {
    imcResultText.classList.add('danger');
    imcResultText.textContent = 'Obesidade grau I';
  } else if (imc < 40) {
    imcResultText.classList.add('danger');
    imcResultText.textContent = 'Obesidade grau II';
  } else {
    imcResultText.classList.add('danger');
    imcResultText.textContent = 'Obesidade grau III';
  }
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  const inputWeight = document.querySelector('#input-weight');
  const inputHeight = document.querySelector('#input-height');
  const imcResult = document.querySelector('#imc-result');
  let weight = Number(inputWeight.value);
  let height = Number(inputHeight.value);
  let imc = calculateImc(weight, height);
  let formattedImc = imc.toFixed(2).replace('.', ',');
  imcResult.textContent = formattedImc;
  imcResultText(imc);
}

function start() {
  const inputWeight = document.querySelector('#input-weight');
  const inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

start();
