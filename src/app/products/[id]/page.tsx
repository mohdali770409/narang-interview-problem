"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";

const SingleProduct = ({ params }: any) => {
 
  const [product, setProduct] = useState<any>({});
  const fetchSingleProduct = async () => {
    const response = await axios.get(`https://dummyjson.com/products/${params.id}`);
    console.log("response",response)
    setProduct(response?.data);
  };
  useEffect(() => {
    fetchSingleProduct();
  }, []);

  return product && <div>
    <div>
        <div className="w-[400px] h-[400px] mx-auto flex flex-col">
            <img src={product?.images} alt="image"/>
        </div>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <p>{product.rating}</p>
    </div>
  </div>
};



export default SingleProduct;
