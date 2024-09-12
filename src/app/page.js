import { CardPost } from "@/components/CardPost";
import logger from "@/logger";
import styles from "./page.module.css";
import Link from "next/link";
import db from "../../prisma/db";

async function getAllPosts(page) {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true
      }
    });
    return { data: posts, prev: null, next: null };
  } catch (error) {
    logger.error("Falha ao obter posts", { error });
    return { data: [], prev: null, next: null };
  }
}

export default async function Home({ searchParams }) {
  const currentPage = searchParams?.page || 1;
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main>
      <div className={styles.posts}>
        {posts.map((post) => (
          <CardPost key={post.id} post={post} />
        ))}
      </div>
      <div className={styles.pagination}>
        {prev && (
          <Link className={styles.link} href={`/?page=${prev}`}>
            Página anterior
          </Link>
        )}
        {next && (
          <Link className={styles.link} href={`/?page=${next}`}>
            Próxima página
          </Link>
        )}
      </div>
    </main>
  );
}
