import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/minha-foto-Hugo.jfif';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu projeto pessoal! Eu sou Hugo da Silva, aluno de Front-end da Alura.Aqui eu compartilho muitos conhecimentos, espero que aprenda algo novo!
                </p>

                <div className={styles.imagens}>
                    <img 
                        alt='circulo colorido'                        className={styles.circuloColorido}
                        src={circuloColorido}
                        aria-hidden={true}
                    />

                    <img
                        alt='foto do Hugo'
                        className={styles.minhaFoto}
                        src={minhaFoto}
                    />
                </div>
            </div>
        </div>
    )
}