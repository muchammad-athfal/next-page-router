import ProductView from "@/views/Products";
import { ProductType } from "@/types/product.type";

const ProductServerPage = ({ products }: { products: ProductType[] }) => {
  return (
    <div>
      <ProductView products={products} />
    </div>
  );
};

export default ProductServerPage;

// Dipanggil setiap melakukan request
export async function getServerSideProps() {
  // fetch data
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  return {
    props: {
      products: response.data,
    },
  };
}
