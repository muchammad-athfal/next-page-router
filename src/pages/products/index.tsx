import { fetcher } from "@/lib/swr/fetcher";
import ProductView from "@/views/Products";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import useSWR from "swr";

const ProductPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  // const [products, setProducts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    if (!isLogin) {
      router.push("/auth/login");
    }

    // fetch("/api/products")
    //   .then((res) => res.json())
    //   .then((response) => {
    //     setProducts(response.data);
    //   });
  }, []);

  const { data, error, isLoading } = useSWR("/api/products", fetcher);

  return (
    <div>
      <ProductView products={isLoading ? [] : data.data} />
    </div>
  );
};

export default ProductPage;
