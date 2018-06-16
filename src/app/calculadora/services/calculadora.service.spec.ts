import { TestBed, inject } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculadoraService]
    });
  });

  it('should be created', inject([CalculadoraService], (service: CalculadoraService) => {
    expect(service).toBeTruthy();
  }));

  it('deveria garantir 4 + 1 = 5',
    inject([CalculadoraService], (service: CalculadoraService) => {
    let soma: number = service.calcular(1,4, CalculadoraService.SOMA);
    expect(soma).toEqual(5);
  }));

  it('deveria garantir 4 - 1 = 3',
  inject([CalculadoraService], (service: CalculadoraService) => {
  let subtracao: number = service.calcular(4, 1, CalculadoraService.SUBTRACAO);
  expect(subtracao).toEqual(3);
  }));

  it('deveria garantir 4 / 2 = 2',
  inject([CalculadoraService], (service: CalculadoraService) => {
  let divisão: number = service.calcular(4, 2, CalculadoraService.DIVISAO);
  expect(divisão).toEqual(2);
  }));

  it('deveria garantir 4 * 2 = 8',
  inject([CalculadoraService], (service: CalculadoraService) => {
  let multiplicacao: number = service.calcular(4, 2, CalculadoraService.MULTIPLICACAO);
  expect(multiplicacao).toEqual(8);
  }));

  it('deveria retornar 0 para operacao inválida',
  inject([CalculadoraService], (service: CalculadoraService) => {
  let operacaoInvalida: number = service.calcular(4,2, '%');
  expect(operacaoInvalida).toEqual(0);
  }));
});
