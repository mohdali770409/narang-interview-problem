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
        <p className="text-lg font-bold text-center">{product.title}</p>
        <p className="text-sm text-center">{product.description}</p>
        <div className="flex justify-center items-center gap-10">
        <p className="font-bold">Price: {product.price}</p>
        <p className="font-bold">Rating: {product.rating}</p>

        </div>
    </div>
  </div>
};



export default SingleProduct;
