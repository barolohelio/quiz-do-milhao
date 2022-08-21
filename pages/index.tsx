import { useState } from 'react';
import {Questao} from '../components/Questao'
import QuestaoModel from '../model/questao'
import RespostaModel from '../model/respostas'

const questaoMock = new QuestaoModel(1, 'Melhor cor',[
  RespostaModel.errada('Azul'),
  RespostaModel.errada('Vermelho'),
  RespostaModel.errada('Verde'),
  RespostaModel.certa('Preta')
])

export default function Home() {
  const [questao, setQuestao] = useState(questaoMock);

  function respostaFornecida(indice: number){
    console.log(indice)
    setQuestao(questao.responderCom(indice))
  }

  function tempoEsgotado(){
    if(questao.naoRespondida){
      setQuestao(questao.responderCom(-1))
    }
  }

  return (
   <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
   }}>
     <Questao 
        valor={questao} 
        respostaFornecida={respostaFornecida}
        tempoEsgotado={tempoEsgotado}
     />
   </div>
  )
}
