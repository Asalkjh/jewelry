"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    router.push(`/store?title=${search}`);
  };

  return (
    <div className="flex flex-col justify-center w-full mt-3 ">
      <input
        className="border px-7 rounded-2xl my-2.5  mx-auto max-sm:w-[200px] "
        onChange={(e) => setSearch(e.target.value)}
        placeholder="searach the product"
        type="text"
      />
      <button
        className="border px-2.5  w-[100px] rounded-2xl mx-auto hover:border-sky-700 hover:text-sky-700 max-sm:w-[70px]"
        onClick={handleSearch}
      >
        {" "}
        search{" "}
      </button>
    </div>
  );
}

export default Search;
