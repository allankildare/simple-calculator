var value
var result
function button(num) {
    value = document.calc.display.value += num
}

function reset () {
    document.calc.display.value = ''
}

function result () {
    result = eval(value)
    document.calc.display.value = result.toLocaleString('pt-BR')
}