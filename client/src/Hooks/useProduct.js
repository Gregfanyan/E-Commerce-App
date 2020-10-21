import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { fetchProducts } from "../redux/Products/ProductActions";

export const useProduct = (query) => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    setData(products);
  }, [products]);

  return [data];
};
