import React from "react";
import { useParams } from "react-router-dom";
import ShowSingleProduct from "../components/ShowSingleProduct";

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      <ShowSingleProduct productId={productId} />
    </div>
  );
};

export default ProductPage;
