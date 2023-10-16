import { fetcher } from "@/lib/swr/fetcher";
import { ProductType } from "@/types/product.type";
import ProductDetailView from "@/views/Products/detail";
import { useRouter } from "next/router";
import useSWR from "swr";

const DetailProductPage = ({ product }: { product: ProductType }) => {
  // Client Side
  // const { query } = useRouter();
  // const { data, error, isLoading } = useSWR(
  //   `/api/products/${query.slug}`,
  //   fetcher
  // );

  return (
    <div>
      {/* Client Side */}
      {/* <ProductDetailView product={isLoading ? {} : data.data} /> */}

      {/* Server Side & Static Site Generetaions */}
      <ProductDetailView product={product} />
    </div>
  );
};

export default DetailProductPage;

// Server Side
// export async function getServerSideProps({
//   params,
// }: {
//   params: { slug: string };
// }) {
//   console.log(params.slug);
//   const res = await fetch(`http://localhost:3000/api/products/${params.slug}`);

//   const response = await res.json();

//   return {
//     props: {
//       product: response.data,
//     },
//   };
// }

// Static Site Generations

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/products");
  const response = await res.json();

  const paths = response.data.map((product: ProductType) => ({
    params: {
      slug: product.id,
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  const res = await fetch(`http://localhost:3000/api/products/${params.slug}`);

  const response = await res.json();

  return {
    props: {
      product: response.data,
    },
  };
}
