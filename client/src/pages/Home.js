import React from "react";
import MainTable from "../components/MainTable"

import { useProduct } from "../Hooks/useProduct";

export const Home = ({ query }) => {
  const [products] = useProduct(query);
  return (
    <div>
      <MainTable products={products} />
    </div>
  );
};
