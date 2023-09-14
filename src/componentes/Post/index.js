import styles from "./Post.module.css";

export default function Post( {post} ){ // pegando o componente criado dentro da <li> de index inicio 'Post'
    return (
        <div className={styles.post}>
            <img 
                className={styles.capa}
                src={`/assets/posts/${post.id}/capa.png`}// interpolando para puxar imgs posts
                alt="Imagem de Capa do post"
            />

            <h2 className={styles.titulo}>{post.titulo}</h2>

            <button className={styles.botaoLer}>ler</button>
        </div>
    )
}