import styles from "./Inicio.module.css";
// interação entre o json
import posts from "json/posts.json";
import Post from "componentes/PostCard";

export default function Inicio() {
    return (
        <ul className={styles.posts}>
            {posts.map((post) => ( // renderizando os posts do arquivo json
                <li key={post.id}>
                    <Post post={post}/>
                </li>
                ))}
        </ul>
        
    )
}