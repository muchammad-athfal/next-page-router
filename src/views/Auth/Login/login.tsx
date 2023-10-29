import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginView = () => {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/products");
  };

  return (
    <div className={styles.login}>
      <h1 className="text-3xl font-bold">Login Page</h1>
      <button onClick={() => handleLogin()}>Product</button>
      <p
        style={{ color: "red", border: "1px solid red", borderRadius: "10px" }}
      >
        Belum Punya Akun ? Register <Link href={"/auth/register"}>Disini</Link>
      </p>
    </div>
  );
};

export default LoginView;
