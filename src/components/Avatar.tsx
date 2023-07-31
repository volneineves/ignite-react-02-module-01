import styles from "./Avatar.module.css";

interface IAvatar {
  src: string;
}

export function Avatar({ src }: IAvatar) {
  return <img className={styles.avatar} src={src} />;
}
