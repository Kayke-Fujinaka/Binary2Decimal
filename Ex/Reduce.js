// Função para converter o binário para
// Vai receber um argumento chamado binary
const converter = (binary) => {
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
  const binaryString = binary.toString().split("").reverse();

  // O método test() executa uma busca por uma correspondência entre uma expressão regular e uma string.
  // Verificação para identificar se a string passada corresponde como binário
  // Deve corresponder com valores entre 0 e 1
  if (!binarySystemCheck.test(binary))
    // Vai lançar um erro com uma descrição falando que precisa ser do sistema binário
    // Além de parar a execução da função
    throw new Error("Have to be system binary, that is, zero and one!");

  // Uma variável para armazenar o método reduce()
  /* O método executa uma função para cada elemento do array, resultando num único valor de retorno.
      - Possui 4 parâmetros: acumulador(acc), valor atual(cur), index ou índice(idx) e o array(src)
        - O acc vai ir acumulando a soma e multiplicação de cada cálculo
        - O cur vai pegando cada caracter   
        - O idx vai pegando a posição de cada caracter. 
  */
  /* Ele vai começar com o acumulador valendo 0, mas o acumulador vai ser somado com 
    a multiplicação entre o número/caracter(cur) e a função Math.pow()
        - O Math.pow(base, expoente) tem o expoente que vai ser utilizado para elevar a base. No caso é o 2 elevado pela posição(i) do caracter
    Vai acumulando conforme passa por todos caracteres. Até finalmente retornar um valor final
   */
  let storage = binaryString.reduce((acc, cur, idx) => {
    return (acc += cur * Math.pow(2, idx));
  }, 0);

  // Retorna o valor da váriavel decimal depois de ter feito todas as soma
  return storage;
};

// Váriavel que armazena a função chamada com um argumento
// O argumento deve ser um número binário que será convertido
const call = converter(100);
console.log(call);
