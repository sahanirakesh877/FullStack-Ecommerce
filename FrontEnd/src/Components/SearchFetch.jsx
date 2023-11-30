import React, { useEffect, useState } from "react";
import axios from "axios";

const SearchFetch = () => {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  useEffect(() => {
    // Filter the data based on the search term
    const filtered = data.filter((a) =>
      a.email.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setFilteredData(filtered);
  }, [data, searchTerm]);

  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search by email"
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
        />
        <ul>
          {filteredData.map((a,id) => (
            <>
            <div className="flex"  key={id}>
            <li >{a.id}.{a.email}</li>
            <li>{a.name}</li>
            </div>
            </>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SearchFetch;
