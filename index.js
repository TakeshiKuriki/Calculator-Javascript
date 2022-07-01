// IF 
// === é muito verdade?
// = tal coisa é igual.
// || OU
// && E


const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = document.querySelector('.calculator__display')

keys.addEventListener('click', e => {
    const calculate = (n1, operator, n2) => {
        const firstNum = parseFloat(n1)
        const secondNum = parseFloat(n2)
        if (operator === 'add') return firstNum + secondNum
        if (operator === 'subtract') return firstNum - secondNum
        if (operator === 'multiply') return firstNum * secondNum
        if (operator === 'divide') return firstNum / secondNum
    }
    if (e.target.matches('button')) {
        //Declarando minhas constantes 

        const createResultString = () => {


            display.textContent = resultString
            updateCalculatorState

        }

        const key = e.target
        const action = key.dataset.action
        const keyContent = key.textContent
        const displayedNum = display.textContent
        const previousKeyType = calculator.dataset.previousKeyType
        const firstValue = calculator.dataset.firstValue
        const operator = calculator.dataset.operator
        const secondValue = displayedNum
        const resultString = createResultString


        // Remove a classe .is-depressed de todas as teclas
        Array.from(key.parentNode.children)
            .forEach(k => k.classList.remove('is-depressed'))



        //Codigo logica da minha calculadora
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

        //Codigo logico operações
        if (
            action === 'add' ||
            action === 'subtract' ||
            action === 'multiply' ||
            action === 'divide'
        ) {
            if (firstValue && operator) {
                display.textContent = calculate(firstValue, operator, secondValue)
            }

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


            key.classList.add('is-depressed')
            //Adiciona um atributo personalizado 
            calculator.dataset.previousKeyType = 'operator'
            calculator.dataset.firstValue = displayedNum
            calculator.dataset.operator = action
        }




        //Codigo logico decimal,clear,calculate
        if (action === 'decimal') {
            if (!displayedNum.includes('.')) {
                display.textContent = displayedNum + '.'
            } else if (
                previousKeyType === 'operator' ||
                previousKeyType === 'calculate'
            ) {
                display.textContent = '0.'
            }

            calculator.dataset.previousKeyType = 'decimal'
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

        if (action === 'calculate') {
            let firstValue = calculator.dataset.firstValue

            if (firstValue) {
                if (previousKeyType === 'calculate') {
                    firstValue = displayedNum
                    secondValue = calculator.dataset.modValue

                }

                display.textContent = calculate(firstValue, operator, secondValue)
            }

            // Definir o atributo modValue
            calculator.dataset.modValue = secondValue
            calculator.dataset.previousKeyType = 'calculate'
        }
        

    }

 


    // Exemplo do funcionamento de includes.
    const string = 'The hamburgers taste pretty good!'
    const hasExclamation = string.includes('!')
    console.log(hasExclamation) // true



})
