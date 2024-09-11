import Image from "next/image";
import { Avatar } from "../Avatar";
import styles from "./cardpost.module.css";
import Link from "next/link";

export const CardPost = ({ post, highlight }) => {
  return (
    <Link href={`/posts/${post.slug}`} className={styles.link}>
      <article className={styles.card} style={{ width: highlight ? 993 : 486 }}>
        <header className={styles.banner}>
          <figure style={{ height: highlight ? 300 : 133 }}>
            <Image
              src={post.cover}
              fill             
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
    </Link>
  );
};
