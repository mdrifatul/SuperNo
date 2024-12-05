import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import Products from "../Products/Products";

const category = [
  { title: "all" },
  { title: "keyboard" },
  { title: "mobile" },
  { title: "watch" },
  { title: "laptop" },
];

const Home = () => {
  const [selectCategory, setSelectCategory] = useState("all");
  const [search, setSearch] = useState("");
  const [brands, setBrand] = useState('');
  
  const { data: products = []} = useQuery({
    queryKey: ["contest",brands],
    queryFn: async () => {
      const res = await axios.get(
        `/products.json?brand=${brands}`
      );
      return res.data;
    },
  });

  const handleCategory = (category) => {
    setSelectCategory(category);
  };

  const filteredProducts = products.filter((item) => {
    const matchesCategory =
      selectCategory === "all" || item?.category.includes(selectCategory);
    const matchesSearch = !search || item?.brand?.includes(search);
    return matchesCategory && matchesSearch;
  });

  return (
    <div className=" my-10">
      <div className="w-11/12  mx-auto flex justify-center md:gap-10 gap-2">
        <div className="dropdown dropdown-hover">
          <div
            tabIndex={0}
            role=""
            className="btn border-1 border-cyan-600 text-cyan-700 bg-white md:text-xl text-base"
          >
            {selectCategory === "all" ? "Category" : selectCategory}
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-cyan-700 rounded-box z-[1] w-52 p-2 shadow text-white"
          >
            {category?.map((item) => (
              <li className="capitalize text-lg" key={item?.title}>
                <a onClick={() => handleCategory(item?.title)}>{item?.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <div className="md:w-full  join flex justify-center">
            <input
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              className="input input-bordered join-item md:w-[30rem] w-40"
              placeholder="Find Your Products by brand name"
              required
            />
            <button
              onClick={() => {
                if (search.trim()) {
                  setBrand(search);
                }
              }}
              className="btn join-item bg-[#0776a6] text-white"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5 my-20">
        {filteredProducts?.map((item) => (
          <Products key={item?.id} item={item}></Products>
        ))}
      </div>
    </div>
  );
};

export default Home;
