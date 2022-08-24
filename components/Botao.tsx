import Link from "../node_modules/next/link";
import styles from "../styles/Botao.module.css";

interface BotaoProps {
  href?: string;
  texto: string;
  onClick?: (e: any) => void;
}

export function Botao(props: BotaoProps) {
  function renderizarBotao() {
    return (
      <button onClick={props.onClick} className={styles.botao}>
        {props.texto}
      </button>
    );
  }

  return props.href ? (
    <Link href={props.href}>{renderizarBotao()}</Link>
  ) : (
    renderizarBotao()
  );
}
