import { CountdownCircleTimer } from '../node_modules/react-countdown-circle-timer/lib/index';
import styles from '../styles/Temporizador.module.css';

interface TemporizadorProps {
  key: any
  duracao: number
  tempoEsgotado: () => void
}

export function Temporizador(props: TemporizadorProps ){
  return (
    <div className={styles.temporizador}>
        < CountdownCircleTimer 
          duration = { props.duracao }
          size={120} 
          isPlaying
          onComplete={props.tempoEsgotado} 
          colors = { [ '#31f752' ,  '#bbb818' ,  '#ED827A' ,  '#ED827A' ] } 
          colorsTime = { [ props.duracao ,  5 ,  2 ,  0 ] } 
        > 
    { ( { remainingTime } )  =>  remainingTime }
        </ CountdownCircleTimer > 
    </div>
  )
}