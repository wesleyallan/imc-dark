# Alterações no HTML

Para adicionar semântica ao HTML acima, podemos utilizar as tags do HTML de forma a melhor descrever o conteúdo e a estrutura da página. Por exemplo, a tag `<h1>` pode ser utilizada para o título "IMC" e a tag `<label>` pode ser utilizada para descrever os campos de entrada de peso e altura. Também podemos utilizar a tag `<form>` para agrupar os campos de entrada e o botão de cálculo, e a tag `<fieldset>` para agrupar os campos de entrada e descrição. Além disso, podemos utilizar a tag `<output>` para exibir o resultado do cálculo do IMC.

## Refatoração

Antes de refatorar o HTML

```HTML
  <body>
    <div class="container">
      <div class="container-input">
        <h1>IMC</h1>
        <p>
          <label for="input-weight">Peso (KG): </label><br />
          <input id="input-weight" type="number" step="0.1" value="100" />
        </p>
        <p>
          <label for="input-height">Altura (m): </label><br />
          <input id="input-height" type="number" step="0.01" value="1.90" />
        </p>
        <p>
          <button id="button-calculate-imc">Calcular IMC</button>
        </p>
      </div>
      <div class="container-result">
        <p id="paragraph-result">O IMC desses dados</p>
        <p>
          <strong id="imc-result"></strong>
        </p>
        <p id="imc-result-text"></p>
      </div>
    </div>
    <script src="./assets/js/script.js" defer></script>
  </body>
```

Aqui está uma versão refatorada do código HTML acima, que utiliza marcação semântica para torná-lo mais legível e estruturado:

```HTML
<body>
  <div class="container">
    <header>
      <h1>IMC</h1>
    </header>
    <form>
      <fieldset>
        <label for="input-weight">Peso (KG):</label>
        <input id="input-weight" type="number" step="0.1" value="100" />
      </fieldset>
      <fieldset>
        <label for="input-height">Altura (m):</label>
        <input id="input-height" type="number" step="0.01" value="1.90" />
      </fieldset>
      <button id="button-calculate-imc">Calcular IMC</button>
    </form>
    <section>
      <p id="paragraph-result">O IMC desses dados</p>
      <p>
        <strong id="imc-result"></strong>
      </p>
      <p id="imc-result-text"></p>
    </section>
  </div>
  <script src="./assets/js/script.js" defer></script>
</body>
```

A marcação acima usa tags como `<header>`, `<form>`, `<fieldset>` e `<section>` para dar significado semântico às diferentes seções do código. Isso torna o código mais legível e facilita a compreensão do conteúdo e sua estrutura.

# Função para calculo de IMC

Para calcular o Índice de Massa Corporal (IMC) em JavaScript, você pode usar a seguinte função:

```javascript
function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}
```

Para usar essa função, basta passar os valores de peso e altura em quilogramas e metros, respectivamente, como argumentos. Por exemplo:

```javascript
calcularIMC(65, 1.75); // Retorna 21.2
```

O resultado retornado pela função é o valor do IMC. Esse valor pode ser usado para verificar se a pessoa está com o peso adequado de acordo com sua altura, de acordo com a seguinte tabela:

| IMC   | Situação                |
| ----- | ----------------------- |
| Menor | que 18.5 Abaixo do peso |
| Entre | 18.5 e 24.9 Peso normal |
| Entre | 25 e 29.9 Sobrepeso     |
| Maior | que 30 Obesidade        |

Por exemplo, no caso do exemplo acima, a função retornou 21.2, o que indica que a pessoa está com o peso normal.

É importante lembrar que o IMC é apenas uma medida geral da relação entre peso e altura, e não é um indicador preciso da composição corporal de uma pessoa. Por isso, é sempre recomendável consultar um profissional de saúde para avaliar o peso e a composição corporal de uma pessoa de forma mais precisa.
