import styles from "./SobreMim.module.css";
import fotoSobreMim from "assets/foto-sobre-mim-Hugo.jpg";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre Mim"
        >
            <h3 className={styles.subtitulo}>
                Olá eu sou o Hugo!
            </h3>

            <img
                alt="foto do Hugo sorrindo"
                src={fotoSobreMim}
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Tive meu primeiro contato com programação em 2015 através do Curso Técnico em Informática na instituição do Senac de São José do Rio Preto, trabalhei como Analista de suporte (Por um curto período de tempo.) atuando no treinamento e auxílio dos clientes no software para automação de postos de combustível da empresa Linx com nome de AutoSistem.
            </p>
            <p className={styles.paragrafo}>
                Em 2022 retomei os estudos na area de TI voltada para programação através da plataforma cursoemvideo.com pelo Prof. Gustavo Guanabara, assim tendo concluído os seguintes cursos:
                HTML5, CSS3
                GIT & GITHUB
                Lógica de Programação
                Javascript
            </p>
            <p className={styles.paragrafo}>
                Um estudante e amante das tecnologias HTML5, CSS3 e Javascript. Sempre buscando aprender mais, e sempre compartilhando conhecimentos.
            </p>
            <p className={styles.paragrafo}>
                Um dos motivos para eu ter escolhido a programação para atuar, é que nela existe uma coisa chamada aprendizado que só a área de TI nos proporciona, aprendizado este que temos dia após dia trabalhando com muito esforço e dedicação.
            </p>
            <p className={styles.paragrafo}>
                Gosto muito de saber que meu trabalho possa impactar positivamente na vida das pessoas, quero ajudar os outros com resolução de problemas.
                Falando em esforço e dedicação, porque não citar os benefícios que podemos ter como trabalhar muito e ganhar muito, nunca parar de aprender e sempre estar em constante evolução.
            </p>
            <p className={styles.paragrafo}>
                Decidi escolher o Javascript como linguagem de programação pois o que mais me chama atenção na área de desenvolvimento web (Front end.) é infinita possibilidade de criação e edição de conteúdo, é saber que centenas de pessoas poderão ser beneficiadas com meus projetos e criações
            </p>
        </PostModelo>
    )
}