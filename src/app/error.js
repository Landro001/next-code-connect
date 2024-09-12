"use client"; // Error boundaries must be Client Components

import Image from "next/image";
import Link from "next/link";
import { ArrowBack } from "@/components/icons/ArrowBack";
import { Heading } from "@/components/Heading";

import { useEffect } from "react";
import banner from "./error/500.png";
import styles from "./error/error.module.css"

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.container}>
      <Image src={banner} />
      <Heading>Opa! Um erro ocorreu.</Heading>
      <p className={styles.text}>Não conseguimos carregar a página, volte para seguir navegando</p>
      <Link className={styles.link} href={"/"}>
        Voltar ao feed <ArrowBack color="#81FE88" />
      </Link>
    </div>
  );
}
