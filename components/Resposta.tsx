import styles from "../styles/Resposta.module.css";
import RespostaModel from "../model/respostas";

interface RespostaProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  respostaFornecida: (indice: number) => void;
}

export function Resposta(props: RespostaProps) {
  const resposta = props.valor;
  return (
    <div
      className={styles.resposta}
      onClick={() => props.respostaFornecida(props.indice)}
    >
      <div className={styles.conteudoResposta}>
        {!resposta.revelada ? (
          <div className={styles.frente}>
            <div
              style={{ backgroundColor: props.corFundoLetra }}
              className={styles.letra}
            >
              {props.letra}
            </div>
            <div className={styles.valor}>{resposta.valor}</div>
          </div>
        ) : (
          <div className={styles.verso}>
            {resposta.respostaCorreta ? (
              <div className={styles.certa}>
                <div>A resposta certa é...</div>
                <div className={styles.valor}>{resposta.valor}</div>
              </div>
            ) : (
              <div className={styles.errada}>
                <div>A resposta informada está errada...</div>
                <div className={styles.valor}>{resposta.valor}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
