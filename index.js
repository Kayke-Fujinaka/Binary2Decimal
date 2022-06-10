// Regular Expressions (RegExp) que vai validar o padrão de caracteres do argumento da minha função
// Ele vai verificar se a string possui caracteres que não são 0 ou 1
const binarySystemCheck = new RegExp(/^[01]+$/g);

// Função para converter o binário para
// Vai receber um argumento chamado binary
const converterToDecimal = (binary) => {
  // Alterando a tipagem do argumento de number para string
  binary = `${binary}`;

  // Verificação para identificar se a string passada é binário
  // Deve corresponder com valores entre 0 e 1
  if (!binarySystemCheck.test(binary)) {
    // Vai lançar um erro com uma descrição falando que precisa ser do sistema binário
    // Além de parar a execução da função
    throw new Error("Have to be system binary, that is, zero and one!");
  }

  // Ele vai servir para armazenar o resultado da soma das multiplicações
  // A multiplicação é de cada dígito pela potência de 2 relativa à posição por ele ocupada e somar os resultados.
  let decimal = 0

  
};

// Váriavel que armazena a função chamada com um argumento
// O argumento deve ser um número binário que será convertido
const convertedBinary = converterToDecimal(1010);
// console.log(convertedBinary);
