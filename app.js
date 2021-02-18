let value
let result
function button(num) {
    value = document.calc.display.value += num
}

function reset () {
    document.calc.display.value = ''
}

document.getElementById('result').addEventListener('click', () => {
    result = math.evaluate(value)
    document.calc.display.value = result.toLocaleString('pt-BR')
})
