import ProductView from "@/views/Products";
import { ProductType } from "@/types/product.type";

const ProductStaticPage = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductStaticPage;

export async function getStaticProps() {
  // fetch data
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
    // revalidate: 10,
  };
}
