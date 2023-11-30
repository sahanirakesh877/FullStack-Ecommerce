
import React, { useState, useEffect } from "react";
import data from "../EcommData/EcomData";
import { Button, Input, Radio } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Products = () => {
  const [selectedColorFilter, setSelectedColorFilter] = useState("All");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    // filter by button click
    
    // Filter based on color
    const colorFilteredData =
      selectedColorFilter === "All"
        ? data
        : data.filter((item) => item.color === selectedColorFilter);

    // Filter based on category
    const categoryFilteredData =
      selectedCategoryFilter === "All"
        ? data
        : data.filter((item) => item.category === selectedCategoryFilter);

    // Filter based on search query
    const searchFilteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log(searchFilteredData)

    // Combine all filters
    const finalFilteredData = colorFilteredData.filter((item) =>
      categoryFilteredData.includes(item)
    );

    setFilteredData(finalFilteredData);
  }, [selectedColorFilter, selectedCategoryFilter, searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="flex container mx-auto">
        <div className="w-[20%] border">
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Category:</p>
            <Radio name="category" label="All" />
            <Radio
              name="category"
              label="Sneakers"
              checked={selectedCategoryFilter === "sneakers"}
              onChange={() => setSelectedCategoryFilter("sneakers")}
            />
            <Radio
              name="category"
              label="Flats"
              checked={selectedCategoryFilter === "flats"}
              onChange={() => setSelectedCategoryFilter("flats")}
            />
            <Radio
              name="category"
              label="Sandals"
              checked={selectedCategoryFilter === "sandals"}
              onChange={() => setSelectedCategoryFilter("sandals")}
            />
            <Radio
              name="category"
              label="Heels"
              checked={selectedCategoryFilter === "heels"}
              onChange={() => setSelectedCategoryFilter("heels")}
            />
          </div>
          <div className="flex flex-col">
            <p className="text-xl font-semibold">Color:</p>
            <Radio name="color" label="All" />
            <Radio
              name="color"
              label="Black"
              checked={selectedColorFilter === "black"}
              onChange={() => setSelectedColorFilter("black")}
            />
            <Radio
              name="color"
              label="Blue"
              checked={selectedColorFilter === "blue"}
              onChange={() => setSelectedColorFilter("blue")}
            />
            <Radio
              name="color"
              label="Red"
              checked={selectedColorFilter === "red"}
              onChange={() => setSelectedColorFilter("red")}
            />
            <Radio
              name="color"
              label="Green"
              checked={selectedColorFilter === "green"}
              onChange={() => setSelectedColorFilter("green")}
            />
            <Radio
              name="color"
              label="White"
              checked={selectedColorFilter === "white"}
              onChange={() => setSelectedColorFilter("white")}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl mx-3 font-bold">Recommended:</p>
          <div className="flex justify-around items-center my-4">
            {/* Your company filtering buttons */}
            <Input
              label="Search products by company:"
              color="red"
              className="w-[400px]"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
          </div>
          <div className="flex justify-between items-center">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-9 mx-auto">
                <div className="flex flex-wrap -m-4">
                  {filteredData.map((item, id) => (
                    <div className="lg:w-1/4 md:w-1/2 p-3 w-full gap-2 border" key={id}>
                      <a className="block relative h-48 rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="object-cover object-center block"
                          src={item.img}
                        />
                      </a>
                      <div className="mt-4">
                        <Link to={`/products/${item.id}`}>
                          <h3 className="text-black text-sm font-semibold tracking-widest title-font mb-1">
                            {item.title}
                          </h3>
                        </Link>
                        <section className="card-price">
                          <div className="price">
                            <del>{item.prevPrice}</del> &nbsp; ${item.newPrice}
                          </div>
                        </section>
                        <div className="flex justify-end mt-4">
                          <Button color="red">Add to Cart</Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <section></section>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;

