export function embaralhar(elementos: any[]): any[]{
  return elementos
  .map(valor => ({valor, aleatorio: Math.random()}))
  .sort((obj1, obj2) => obj1.aleatorio - obj2.aleatorio)
  .map(obj => obj.valor)
}
 /**
  *   Faz um map sobre os elementos, pegando cada elemento dos elementos e 
  *   colocando valor e numero aleatório. Para depois fazer ordenação com sort())
  *   e depois pegando só os valores do obj
  */