import Image from "next/image";
import styles from './avatar.module.css'

export const Avatar = ({ name, imageSrc }) => {
  return (
    <ul className={styles.list}>
      <li>
        <Image
          src={imageSrc}
          width={32}
          height={32}
          alt={`Imagem do(a) ${name}`}
        />
      </li>
      <li>@{name}</li>
    </ul>
  );
};
