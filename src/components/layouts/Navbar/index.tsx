import styles from "./Navbar.module.scss";
import { signIn, signOut, useSession } from "next-auth/react";
const Navbar = () => {
  const { data }: any = useSession();
  return (
    <div className={styles.navbar}>
      <div>Navbar</div>
      <div className={styles.profile}>
        {data?.user?.image && (
          <img
            className={styles.avatar}
            src={data.user.image}
            alt={data.user.fullname}
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
