import styles from "@/styles/404.module.scss";
import Image from "next/image";

const Custom404 = () => {
  return (
    <div className={styles.error}>
      <img className={styles.error__image} src="/404.png" alt="" />
      <div>Halaman Tidak Ditemukan</div>
    </div>
  );
};

export default Custom404;
