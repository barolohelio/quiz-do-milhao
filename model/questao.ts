import { embaralhar } from "../functions/arrays";
import respostasModel from "./respostas";

export default class QuestaoModel{
  #id: number;
  #enunciado: string;
  #respostas: respostasModel[]
  #acertou: boolean;
  //#answered: boolean

  constructor(id: number, enunciado: string, respostas: respostasModel[], acertou = false){
    this.#id = id
    this.#enunciado = enunciado
    this.#respostas = respostas
    this.#acertou = acertou
  }

  get id(){
    return this.#id
  }
  get enunciado(){
    return this.#enunciado
  }
  get respostas(){
    return this.#respostas
  }
  get acertou(){
    return this.#acertou
  }

  get answered(){
    for(let respostas of this.#respostas){
      if(respostas.revelada) return true
    }
    //FIXME: implementar esse método
    return false
  }

  embaralharRespostas(): QuestaoModel{
    let respostasEmbaralhadas = embaralhar(this.#respostas)
    return new QuestaoModel(this.#id, this.#enunciado, respostasEmbaralhadas, this.#acertou)
  }

  converterParaObjeto(){
    return {
      id: this.#id,
      enunciado: this.#enunciado,
      respostas: this.#respostas.map(resp => resp.converterParaObjeto()), 
      acertou: this.#acertou
    }
  }

}