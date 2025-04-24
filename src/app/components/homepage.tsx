"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./product-card";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const fetchAllData = async () => {
    const response = await axios.get("https://dummyjson.com/products?limit=20");
    setData(response?.data?.products);
    console.log("response", response?.data?.products);
  };
  useEffect(() => {
    fetchAllData();
  }, []);
  const handleChange = (e: any) => {
    console.log("first", e.target.value);
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (search === "") {
      fetchAllData();
    }
    const newData = data?.filter((item: any) => {
      return item?.title?.toLowerCase()?.includes(search?.toLowerCase());
    });
    setData(newData);
  }, [search]);

  return (
    <div>
      <div className="text-5xl text-center font-bold">Products</div>
      <div className="flex justify-center items-center mt-10">
      <input
        type="text"
        placeholder="Search"
        className="border-2 border-gray-300 rounded-md p-2 mb-4"
        onChange={handleChange}
      />
      </div>

      <div className="flex gap-4">
        {data &&
          data.length > 0 &&
          data.map((item, ind) => <ProductCard item={item} key={ind} />)}
      </div>
    </div>
  );
};

export default HomePage;
