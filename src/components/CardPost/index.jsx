import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from './cardpost.module.css'

export const CardPost = ({ post }) => {
  return (
    <article className={styles.card}>
      <header className={styles.banner}>
        <figure>
          <Image
            src={post.cover}
            width={438}
            height={133}
            alt={`Capa do post de título: ${post.title}`}
            className={styles.image}
          />
        </figure>
      </header>
      <section className={styles.content}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
      </section>
      <footer className={styles.signature}>
        <Avatar imageSrc={post.author.avatar} name={post.author.username} />
      </footer>
    </article>
  );
};
