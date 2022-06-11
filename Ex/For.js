// Função para converter o binário para
// Vai receber um argumento chamado binary
const converterToDecimal = (binary) => {
  // Regular Expressions (RegExp) que vai validar o padrão de caracteres do argumento da minha função
  // Ele vai verificar se a string possui caracteres que não são 0 ou 1
  const binarySystemCheck = new RegExp(/^[01]+$/g);

  // Alterando a tipagem do argumento de number para string
  // Além de precisar inverter as string, então utilizei métodos em conjunto
  // Sendo os três métodos:
  // O split() vai dividir os elementos dentro de um Array, sendo a divsão a cada caracter
  // O reverse() vai inverter a ordem de um Array, por isso utilizei o split para criar um Array
  // O join() vai unir todos os elementos de um Array em uma única string novamente
  // O split cria um array pegando cada caracter e separando-os em String, o reverse inverte a ordem desse array e o join volta para uma string única sem array
  const binaryString = `${binary}`.split("").reverse().join("");

  // O método test() executa uma busca por uma correspondência entre uma expressão regular e uma string.
  // Verificação para identificar se a string passada corresponde como binário
  // Deve corresponder com valores entre 0 e 1
  if (!binarySystemCheck.test(binary))
    // Vai lançar um erro com uma descrição falando que precisa ser do sistema binário
    // Além de parar a execução da função
    throw new Error("Have to be system binary, that is, zero and one!");

  // Uma váriavel para armazenar o resultado da soma das multiplicações
  let decimal = 0;

  // A multiplicação é de cada dígito pela potência de 2 relativa à posição por ele ocupada e por fim só somar os resultados
  // Iniciando com o index valendo 0 e aumentando ele até o total de caracteres
  for (let i = 0; i < binaryString.length; i++) {
    // Condicional para verificar se o index é igual a 1
    // Caso seja igual a 1, ele vai fazer o seguinte cálculo, pois um número multiplicado por 0 é 0:
    if (binaryString[i] == 1) {
      /* 
      - Vai começar com o decimal valendo 0, mas irá somar o próprio decimal com a função Math.pow();
      - O Math.pow(base, expoente) tem o expoente que vai ser utilizado para elevar a base. No caso é o 2 elevado pela posição(i) do caracter
      - LEMBRANDO: O caracter está ao contrário, pois, está seguindo a posição relativa que começa da direita pela esquerda no cálculo de conversão do binário 
      - Vai ir somando com o valor do decimal atual e com o cálculo exponencial. Até finalmente ter o binário convertido para decimal.
      */
      decimal += Math.pow(2, i);
    }
  }
  // Retorna o valor da váriavel decimal depois de ter feito todas as soma
  return decimal;
};

// Váriavel que armazena a função chamada com um argumento
// O argumento deve ser um número binário que será convertido
const convertedBinary = converterToDecimal(100);
console.log(convertedBinary);
