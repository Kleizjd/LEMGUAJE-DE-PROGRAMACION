console.log(Palindromo('aerea'));

function Palindromo(entrada){
    return entrada.split('').reverse().join('') == entrada;
}