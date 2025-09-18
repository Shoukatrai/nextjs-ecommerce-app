// "use client";
import ProductList from "@/components/ProductList";
import CategoryList from "@/components/CategoryList";
import Slider from "@/components/Slider";
import { Suspense, useEffect } from "react";
import { useWixClient } from "@/hooks/useWixClient";
import { wixClientServer } from "@/lib/wixClientServer";

const HomePage = async () => {
  // const wixClient = useWixClient();

  // const getProducts = async () => {
  //   const res = await wixClient.products.queryProducts().find();
  //   console.log("getProducts res", res);
  // };
  // useEffect(() => {
  //   getProducts();
  // }, [wixClient]);

  return (
    <div className="">
      <Slider />
      <div className="m-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">Featured Products</h1>
        <Suspense fallback={"loading"}>
          <ProductList
            categoryId={process.env.FEATURED_PRODUCTS_ID!}
            limit={4}
          />
        </Suspense>
      </div>
      <div className="">
        <h1 className="m-24 text-2xl  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">
          Categories
        </h1>
        <CategoryList />
      </div>
      <div className="m-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl ">New Products</h1>
        <ProductList categoryId={process.env.FEATURED_PRODUCTS_ID!} limit={4} />
      </div>
    </div>
  );
};

export default HomePage;
