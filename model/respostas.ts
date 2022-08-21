export default class RespostaModel {
  #valor: string;
  #respostaCorreta: boolean;
  #revelada: boolean;

  constructor(valor: string, respostaCorreta: boolean, revelada = false) {
    this.#valor = valor;
    this.#respostaCorreta = respostaCorreta;
    this.#revelada = revelada;
  }

  static certa(valor: string) {
    return new RespostaModel(valor, true);
  }

  static errada(valor: string) {
    return new RespostaModel(valor, false);
  }

  get valor() {
    return this.#valor;
  }
  get respostaCorreta() {
    return this.#respostaCorreta;
  }

  get revelada() {
    return this.#revelada;
  }

  revelar(){
    return new RespostaModel(this.#valor, this.#respostaCorreta, true)
  }


  converterParaObjeto(){
    return {
      valor: this.#valor,
      respostaCorreta: this.#respostaCorreta,
      revelada: this.#revelada
    }
  }
}
