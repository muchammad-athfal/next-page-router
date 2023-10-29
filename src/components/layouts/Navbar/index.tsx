import Image from "next/image";
import styles from "./Navbar.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
import Script from "next/script";
const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <div id="title-navbar"></div>
      <Script id="script-navbar" strategy="lazyOnload">
        {`document.getElementById('title-navbar').innerHTML = 'Navbar'`}
      </Script>
      <div className={styles.profile}>
        {data?.user?.image && (
          <Image
            className={styles.avatar}
            src={data.user.image}
            alt={data.user.fullname}
            width={30}
            height={30}
          />
        )}
        {data && data.user.fullname}{" "}
        {data ? (
          <button className={styles.button} onClick={() => signOut()}>
            Sign out
          </button>
        ) : (
          <button className={styles.button} onClick={() => signIn()}>
            Sign In
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
