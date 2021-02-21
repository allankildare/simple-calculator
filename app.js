let value
let result

function button(num) {
    value = document.calc.display.value += num
}

function reset() {
    document.calc.display.value = ''
}

function backspace() {
    event.preventDefault()
    value = document.calc.display.value
    let array = value.split('')
    array.pop()
    let novoDisplay = array.join('')
    document.calc.display.value = novoDisplay
}

function resultado() {
    result = math.evaluate(value)
    document.calc.display.value = result.toLocaleString('pt-BR')
}

document.getElementById("result").addEventListener("click", resultado)