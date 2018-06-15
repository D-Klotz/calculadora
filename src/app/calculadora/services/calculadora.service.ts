import { Injectable } from '@angular/core';

@Injectable()
export class CalculadoraService {

  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly MULTIPLICACAO: string = '*';
  static readonly DIVISAO: string = '/';

  constructor() { }

  /**
   * Metodo que trabalha com dois valores de acordo com o tipo de operacao
   * @param num1 primeiro numero digitado
   * @param num2 segundo numero digitado
   * @param operacao tipo da operacao que ira envolver os dois numeros
   * @return o retorno desse metodo é o resultado da operacao
   */
  calcular(num1: number, num2: number, operacao: string): number {
    let resultado: number;

    switch (operacao) {
      case CalculadoraService.SOMA:
        resultado = num1 + num2;
        break;
      case CalculadoraService.SUBTRACAO:
        resultado = num1 - num2;
        break;
      case CalculadoraService.MULTIPLICACAO:
        resultado = num1 * num2;
        break;
      case CalculadoraService.DIVISAO:
        resultado = num1 / num2;
        break;
      default:
        resultado = 0;
        break;
    }

    return resultado;
  }
}
