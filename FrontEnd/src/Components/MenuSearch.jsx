import React from "react";
import { useState } from "react";
import productList from "../Data/data";

const Search = () => {
  const [search, setSearch] = useState("");

  const filterdata = productList.filter((x) => {
    if (search === "") {
      return x;
    } else if (x.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
      return x;
    }
  });

  return (
    <>
      <input
        type="text"
        placeholder="enter for search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <br />
      <br />
      <div>
        {filterdata.map((a) => {
          return (
            <>
              <div>{a}</div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Search;
