import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(false);
  const router = useRouter();
  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }
  }, []);
  return (
    <div>
      <h1>Product Page</h1>
    </div>
  );
};

export default ProductPage;
