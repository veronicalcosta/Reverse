function reverseString(str) {
    return str.split('').reverse().join('');
  }
  
  // Exemplo de uso:
  const minhaString = "Bootstrap";
  const stringInvertida = reverseString(minhaString);
  
  console.log(stringInvertida); // Saída: "pstarpsooB"
  