
function add (num1, num2) {
    // let add = document.getElementById('add').value;
    return num1 + num2
}

function sub (num1, num2) {
    // let add = document.getElementById('add').value;
    return num1 - num2
}

function multi (num1, num2) {
    // let add = document.getElementById('add').value;
    return num1 * num2
}

function divi (num1, num2) {
    // let add = document.getElementById('add').value;
    return num1 / num2
}


let operation = add
function myFunction() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let answer = operation (Number(num1), Number(num2));
    expander(answer)
    document.getElementById('answer').innerHTML = answer
}

function expander(answer) {
    if (answer < 99){
        document.getElementById('expand').style.width = `30px`
    } else if (answer < 999) {
        document.getElementById('expand').style.width = `70px`
    } else if (answer < 99999){
        document.getElementById('expand').style.width = `100px`
    } else {
        document.getElementById('expand').style.width = `150px`
    }
}

function operator (operator){
   switch (operator) { 
    case 'add':
    operation = add
    break
    case 'sub':
    operation = sub
    break
    case 'multi':
    operation = multi
    break
    case 'divi':
    operation = divi
    break 
}

}

function clearabc() {
    // debugger
    document.getElementById('num1').value = '';
    document.getElementById('num2').value = '';
    document.getElementById('answer').innerHTML = '';
}


console.log(add(10, 30))
console.log(sub(10, 30))
console.log(multi(10, 30))
console.log(divi(10, 30))