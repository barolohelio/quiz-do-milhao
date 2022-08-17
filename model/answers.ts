export default class AnswersModel{
  #value: string
  #answersCorrect: boolean;
  #revealed: boolean;

  constructor(value: string, answersCorrect: boolean, revealed: boolean){
    this.#value = value;
    this.#answersCorrect = answersCorrect;
    this.#revealed = revealed;

  }

  get value(){
    return this.#value
  }
  get answersCorrect(){
    return this.#answersCorrect
  }
  get revealed(){
    return this.#revealed
  }


}