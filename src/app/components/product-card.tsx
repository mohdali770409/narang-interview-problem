import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
const ProductCard = ({ item }: any) => {
  const router = useRouter();
  const handleClick = (id: number) => {
    router.push(`/products/${id}`);
  };
  return (
    item && (
      <div
        className="w-[400px] h-[600px] bg-white shadow-md rounded-lg p-4 m-4 flex justify-center items-center mx-auto cursor-pointer"
        onClick={() => {
          handleClick(item?.id);
        }}
      >
        <div className="w-[400px] h-[600px] mx-auto flex flex-col">
          <div className="w-[400px] h-[400px]">
            <img
              src={item?.thumbnail}
              alt={item?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-center">
            <p className="text-lg font-bold text-center">{item?.title}</p>
            <p className="text-sm text-center">{item?.description}</p>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductCard;
