import { converterBinaryToDecimal, NonBinaryStringError } from ".";

// Jest é um framework de teste em JavaScript projetado para garantir a correção de qualquer código JavaScript.

// Vai criar um bloco que agrupa vários testes
describe("Function that converts binary to decimal", () => {
  // Vai executar um teste
  // Primeiro argumento: É o nome do Teste
  // Segundo argumento: É uma função que contém as expectativas para testar.

  // expect().toBe() é a expectativa de ser alguma coisa.

  test("Binary 1010 must be converted to 10 in decimal", () => {
    const binaryString = "1";
    const result = converterBinaryToDecimal(binaryString);
    expect(result).toBe(1);
  });
  test("Binary 10101010 must be converted to 170 in decimal", () => {
    const binaryString = "10101010";
    const result = converterBinaryToDecimal(binaryString);
    expect(result).toBe(170);
  });
  test("Binary 1110 must be converted to 14 in decimal", () => {
    const binaryString = "1110";
    const result = converterBinaryToDecimal(binaryString);
    expect(result).toBe(14);
  });
  test("Should throws when it does not receive a binary number", () => {
    const binaryString = "abc123";
    expect(() => converterBinaryToDecimal(binaryString)).toThrow(
      NonBinaryStringError
    );
  });
  test("Should throws when it does not receive a binary number", () => {
    const binaryString = null;
    expect(() => converterBinaryToDecimal(binaryString as any)).toThrow(
      NonBinaryStringError
    );
  });
});

// Para rodar nm test
