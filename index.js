const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

keys.addEventListener('click',e => {
  if (e.target.matches('button')) {
    //Fazer algo

  }
})

const key = e.target
const action = key.dataset.action

if (!action) {
  console.log ('number key!')
}

if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  console.log('operator key!')
}

if (action === 'decimal'){
  console.log('decimal key!')
}

if(action ==='clear'){
  console.log ('clear key!')
}

if(action === 'calculate'){
  console.log ('equal key!')

}
 const discplay = document.querySelector('.calculator__display')

 keys.addEventListener('click',e =>{
  if (e.target.matches('button')) {
    const key = e.target
    const action = key.dataset.action
    const keyContent = key.textContent
    const displayedNum = display.textContent
    // ...

  }

 })

 if( !action) { 
   if (displayedNum ==='0') {
     display.textContent=keyContent
   }
 }

if (!action) {
  if (displayedNum === '0') {
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

if (action === 'decimal') {
  display.textContent = displayedNum + "."
}

if (
  action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  key.classList.add('is-depressed')
}

keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    const key = e.target
    // ...
    
    // Remove a classe .is-depressed de todas as teclas
    Array.from(key.parentNode.children)
      .forEach(k => k.classList.remove('is-depressed'))
  }
})

const calculator = document.querySelector('.calculator')
//...

keys.addEventListener('click',e => {
  if(e.target.matches('button')){
    //...

    if(
      action === 'add' ||
      action === 'subtract' ||
      action === 'multiply' ||
      action === 'divide' 
    ){
      key.classList.add('is-depressed')
      //Adiciona um atributo personalizado
      calculator.dataset.previousKeyType='operator'
  }
}
})

const previousKeyType = calculator.dataset.previousKeyType

if (!action){
  if(discplayedNum === '0'|| previousKeyType === 'operator'){
    display.textContent = keyContent
  } else {
    display.textContent = displayedNum + keyContent
  }
}

if( action === 'calculate'){
  const secondValue = displayNum
  //...
}

if(
  action === 'add'||
  action === 'subtract'||
  action === 'multiply'||
  action === 'divide'
){
  calculator.dataset.firstValue = displayedNum
  calculator.dataset.operator = action
}

if (action === 'calculate'){
    const FirstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    discplay.textContent = calculate(firstValue, operator, secondValue)
}

const calculate = (n1, operator, n2) => {
    // Realizar um cálculo e retornar o valor calculado
}

const calculate = (n1, operator, n2) => {
    let result = ''

    if (operator === 'add') {
        result = n1 + n2
    } else if (operator === 'subtract') {
        result = n1 - n2
    } else if (operator === 'multiply') {
        result = n1 * n2
    } else if (operator === 'divide') {
        result = n1 / n2
    }

    return result
}


// parseInt converte uma string em um número inteiro.
// parseFloat converte uma string em um um número de ponto flutuante(um número com casas decimais).

const calculate = (n1, operator, n2) => {
    let result = ''

    if (operator === 'add') {
        result = parseFloat(n1) + parceFloat(n2)
    } else if (operator === 'subtract') {
        result = parseFloat(n1) - parceFloat(n2)
    } else if (operator === 'multiply') {
        result = parseFloat(n1) * parceFloat(n2)
    } else if (operator === 'divide') {
        result = parceFloat(n1) / parceFloat(n2)
    }

    return result
}

//Exemplo do funcionamento de includes.
const string = 'The hamburgens taste pretty good!'
const hasExclamation = string.includes('!')
console.log(hasExclamation) / true

//Não fazer nada se a string já tiver um ponto
if (!displayNum.includes('.')) {
    display.textContent = discplayed
}

if (!action) {
    //...
    calculator.dataset.previousKey = 'number'
}

if (!action === 'decimal') {
    //...
    calculator.dataset.previousKey = 'decimal'
}

if (!action === 'clear') {
    //...
    calculator.dataset.previousKeyType = 'clear'
}

if (!action === "calculate") {
    //...
    calculator.dataset.previousKeyType = 'calcaulate'
}

//Assim que tivermos o previousKeyType correto, podemos usá-lo para verificar se a tecla anterior é um operador.

if (action === 'decimal') {
    if (!displayedNum.inclusides('.')) {
        display.textContent = displayedNum + '.'
    } else if (previousKeyType === 'operator') {
        display.textContent = '0'
    }

    calculator.dataset.previousKeyType = 'decimal'

}

//Isso significa que precisamos usar a função calculate quando firstValue, operator e secondValue existirem.

if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    const firsValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = dispatchNum

    //Obs: basta verificar firstValue e o operador, pois o secondValue existe sempre
    if (firstValue && operator) {
        display.textContent = calculate(fisrtValue, operator, secondValue)
    }

    key.classList.add('is-depressed')
    calculator.dataset.previousKeyType = 'operator'
    calculator.dataset.firtValue = displyedNum
    calculator.dataset.operator = action
}

if (
    firstValue &&
    operator &&
    previousKeyType !== 'operator'

) {
    display.textContent = calculate(firtValue, operator, secondValue)

}

const firstValue = calculator.dataset.firstValue
const operator = calculator.dataser.operator
const secondvalue = displayedNum

if (
    firstvalue &&
    operator &&
    previousKeyType !== 'operator'
) {
    const calcValue = calculate(firstValue, operator, secondvalue)
    display.textContent = calcValue

    // Atulizar o valor calculado como firstValue
    calculator.dataset.firstValue = calcValue
} else {
    // Se não houver cálculo, definir displayedNum como o firstValue
    calculator.dataset.firstValue = displayedNum
}

key.classList.add('is-depressed')
calculator.dataset.previousKeyType = 'operator'
calculator.dataset.operator = action

//O que acontece se Tim apertar a tecla de sinal de igual?

if (action === 'calculate') {
    const firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    if (firstValue) {
        display.textContent = calculate (firstValue, operator,secondValue)
    }

    calculator.dataset.previousKeyType = 'calculate'
}

//Ao invés de secondValue, queremos definir firstValue como o número exibido.

if (action === 'calculate') {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    if (firstValue) {
        if (previousKeyType === 'calculate') {
            firstValue = discplayedNum
        }
    display.textContent = calculate(firstValue, operator, secondValue)
    }

    calculator.dataset.previousKeyType = 'calculate'
}

//Também queremos levar o secondValue anterior para o novo cálculo.Para que secondValue persista no próximo cálculo, precisamos armazená - lo em outro atributo personalizado.Chamaremos esse atributo personalizado de modValue

if (action === 'calculate') {
    let firstValue = calculator.dataset.firstValue
    const operator = calculator.dataset.operator
    const secondValue = displayedNum

    if (firstValue) {
        if (previousKeyType === 'calculate') {
            firstValue = displayedNum
        }

        display.textContent = calculate(firstValue, operator, secondValue)
    }

    // Definir o atributo modValue
    calculator.dataset.modValue = secondValue
    calculator.dataset.previousKeyType = 'calculate'
}

//Se o previousKeyType é calculate, sabemos que podemos usar calculator.dataset.modValue como secondValue. Uma vez que sabemos disso, podemos fazer o cálculo

if (firstValue) {
    if (previousKeyType === 'calculate') {
        firstValue = displayedNum
        secondvalue = calculator.dataset.modValue
    }

    discplay.textContent = calculate(firstValue,operator,secondvalue)

}

//Voltando para a tecla do sinal de igual

if (!action) {
    if (
        displayedNum === '0' ||
        previousKeyType === 'operator' ||
        previousKeyType === 'calculate'
    ) {
        display.textContent = keyContent
    } else {
        display.textContent = displayedNum + keyContent
    }
    calculator.dataset.previousKeyType = 'number'
}

if (action === 'decimal') {
    if (!displayedNum.includes('.')) {
        display.textContent = displayedNum + '.'
    } else if (
        previousKeyType === 'operator' ||
        previousKeyType === ' calculate'
    ) {
        display.textContent = '0.'
    }

    calculator.dataset.previousKeyType = 'decimal'
}

//Para fazer isso, vamos verificar se o  previousKeyType é calculate antes de realizar cálculos com as teclas do operador.

if (
    action === 'add' ||
    action === 'subtract' ||
    action === 'multiply' ||
    action === 'divide'
) {
    // ...

    if (
        firstValue &&
        operator &&
        previousKeyType !== 'operator' &&
        previousKeyType !== 'calculate'
    ) {
        const calcValue = calculate(firstValue, operator, secondValue)
        display.textContent = calcValue
        calculator.dataset.firstValue = calcValue
    } else {
        calculator.dataset.firstValue = displayedNum
    }

    // ...
}

// Fazemos isso verificando se data - action está clear.Caso não esteja clear, procuramos o botão clear e alteraremos seu textContent.

if (action !== 'clear') {
    const clearButton = calculator.querySelector('[data-action=clear]')
    clearButton.textContent = 'CE'
}

if (action === 'clear') {
    display.textContent = 0
    key.textContent = 'AC'
    calculator.dataset.previousKeyType = 'clear'
}

if (action === 'clear') {
    if (key.textContent === 'AC') {
        calculator.dataset.firstValue = ''
        calculator.dataset.modValue = ''
        calculator.dataset.operator = ''
        calculator.dataset.previousKeyType = ''
    } else {
        key.textContent = 'AC'
    }

    display.textContent = 0
    calculator.dataset.previousKeyType = 'clear'
}

