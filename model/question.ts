import AnswersModel from "./answers";

export default class QuestionModel{
  #id: number;
  #statement: string;
  #answers: AnswersModel[]
  #correct: boolean;
  //#answered: boolean

  constructor(id: number, statement: string, answers: AnswersModel[], correct: boolean){
    this.#id = id
    this.#statement = statement
    this.#answers = answers
    this.#correct = correct
  }

  get id(){
    return this.#id
  }
  get statement(){
    return this.#statement
  }
  get answers(){
    return this.#answers
  }
  get correct(){
    return this.#correct
  }

  get answered(){
    for(let resposta of this.#answers){
      if(resposta.revealed) return true
    }
    //FIXME: implementar esse método
    return false
  }

}