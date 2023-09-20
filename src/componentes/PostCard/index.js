import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import BotaoPrincipal from "componentes/BotaoPrincipal";

export default function PostCard( {post} ){ // pegando o componente criado dentro da <li> de index inicio 'Post'
    return (

        <Link to={`/posts/${post.id}`}>
            <div className={styles.post}>
                <img 
                    className={styles.capa}
                    src={`/assets/posts/${post.id}/capa.png`}// interpolando para puxar imgs posts
                    alt="Imagem de Capa do post"
                />

                <h2 className={styles.titulo}>{post.titulo}</h2>

                <BotaoPrincipal>Ler</BotaoPrincipal>
            </div>
        </Link>
    )
}