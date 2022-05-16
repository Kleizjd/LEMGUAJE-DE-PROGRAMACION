// 4.Palabra o frase cuyas letras están dispuestas de tal manera que resulta la misma leída de izquierda a derecha 
// que de derecha a izquierda; por ejemplo, anilina; dábale arroz a la zorra el abad.

// Escriba una función que reciba una cadena string y retorne si la cadena es un palíndromo o no

console.log(revisarPalindromo("varco"));
function revisarPalindromo(str) {
    const strAlrevez = str.split("").reverse().join("");
  
    return strAlrevez === str ? "Es palindromo" : "No es palindromo";
  }
  console.log(revisarPalindromo("varco")); // es palindromo
  console.log(revisarPalindromo("mom"));
  console.log(revisarPalindromo("sometemos"));
// es palindromo