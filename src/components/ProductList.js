import React from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { filter_products, grid_view } = useFilterContext();
  if (filter_products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>
        Sorry no products matched your search
      </h5>
    );
  }
  if (grid_view === false) {
    return <ListView products={filter_products} />;
  }
  return <GridView products={filter_products}> product list</GridView>;
};

export default ProductList;
