import ProductList from "@/components/shared/product/product-list";
import { getLatestProducts } from "@/lib/actions/product.actions";

// const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// example loading feature
// const HomePage = async () => {
// await delay(2000);
//   return <>Neostore</>;
// };

const HomePage = async () => {
  const latestProducts = await getLatestProducts();

  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default HomePage;
