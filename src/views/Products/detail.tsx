import { ProductType } from "@/types/product.type";
import styles from "./Product.module.scss";

const ProductDetailView = ({ product }: { product: ProductType }) => {
  return (
    <>
      <h1 className={styles.product__title}>Detail Product</h1>
      <div key={product.id} className={styles.productDetail}>
        <div className={styles.productDetail__image}>
          <img src={product.image} alt={product.name} />
        </div>
        <h4 className={styles.productDetail__name}>{product.name}</h4>
        <p className={styles.productDetail__category}>{product.category}</p>
        <p className={styles.productDetail__price}>
          {product.price &&
            product.price.toLocaleString("id-ID", {
              style: "currency",
              currency: "IDR",
            })}
        </p>
      </div>
    </>
  );
};

export default ProductDetailView;
