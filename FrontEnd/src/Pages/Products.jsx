import React, { useState } from "react";
import data from "../EcommData/EcomData";
import { toast, ToastContainer } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Redux/CartSlice";
import { Button, Input, Radio } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Products = () => {
  // Radio button click  by color filter----------------------------
  const [selectedColorFilter, setSelectedColorFilter] = useState("All");
  const filterByColor = (color) => {
    setSelectedColorFilter(color);
    if (color === "All") {
      setFiltered(data);
    } else {
      const updatedItems = data.filter((item) => item.color === color);
      setFiltered(updatedItems);
    }
  };
  // Radio button click  by category filter----------------------------
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState("All");
  const filterByCategory = (category) => {
    setSelectedCategoryFilter(category);
    if (category === "All") {
      setFiltered(data);
    } else {
      const updatedItems = data.filter((item) => item.category === category);
      setFiltered(updatedItems);
    }
  };
  // -----------------------end-------------------------------------
  // serach button filter----------------------
  const [searchQuery, setSearchQuery] = useState("");
  const filterItemsBySearch = (query) => {
    const updatedItems = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setFiltered(updatedItems);
  };
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    filterItemsBySearch(query);
  };

  // ----------------------end--------------------------------------

  // button click filter methods-----------------------------------
  const [filtered, setFiltered] = useState(data);
  const filterItem = (categItem) => {
    const updateItem = data.filter((b) => {
      return b.company === categItem;
    });
    setFiltered(updateItem);
  };
  // -----------------------end-------------------------------------

  //  cart added system
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(add(item));

    // Display a success toast notification
    toast.success(` ${items.length + 1} Added  to the cart!`, {
      position: "top-right",
      autoClose: 1000, // Duration in milliseconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };
  const items = useSelector((state) => state.cart);

  return (
    <>
      <div className="container mx-auto mb-8">
        <p className="text-2xl font-bold ms-8 inline-block border-b-2 border-red-500 ">
          Our Trending Products
        </p>
      </div>
      <div className="flex  container mx-auto ">
        <div className="w-[20%]   ">
          <div className="flex flex-col">
            <p className="text-xl font-semibold  ">Category:</p>
            <Radio name="type" label="All" />
            <Radio
              name="type"
              label="Sneakers"
              checked={selectedCategoryFilter === "sneakers"}
              onChange={() => filterByCategory("sneakers")}
            />
            <Radio
              name="type"
              label="Flats"
              checked={selectedCategoryFilter === "flats"}
              onChange={() => filterByCategory("flats")}
            />
            <Radio
              name="type"
              label="Sandals"
              checked={selectedCategoryFilter === "sandals"}
              onChange={() => filterByCategory("sandals")}
            />
            <Radio
              name="type"
              label="Heels"
              checked={selectedCategoryFilter === "heels"}
              onChange={() => filterByCategory("heels")}
            />
          </div>
          {/* <div className="flex flex-col">
            <p className="text-xl font-semibold">Price:</p>
            <Radio name="type" label="All" />
            <Radio name="type" label="$0-$50" />
            <Radio name="type" label="$50-$100" />
            <Radio name="type" label="$50-$150" />
            <Radio name="type" label="over $100" />
          </div> */}
          <div className="flex flex-col">
            <p className="text-xl font-semibold">color:</p>
            <Radio name="type" label="All" color="teal" />
            <Radio
              name="type"
              label="Black"
              checked={selectedColorFilter === "black"}
              onChange={() => filterByColor("black")}
            />
            <Radio
              name="type"
              label="Blue"
              color="blue"
              checked={selectedColorFilter === "blue"}
              onChange={() => filterByColor("blue")}
            />
            <Radio
              name="type"
              label="Red"
              color="red"
              checked={selectedColorFilter === "red"}
              onChange={() => filterByColor("red")}
            />
            <Radio
              name="type"
              color="green"
              label="Green"
              checked={selectedColorFilter === "green"}
              onChange={() => filterByColor("green")}
            />
            <Radio
              name="type"
              label="White"
              color="indigo"
              checked={selectedColorFilter === "white"}
              onChange={() => filterByColor("white")}
            />
          </div>
        </div>
        <div className="flex flex-col">
          <p className="text-2xl  mx-3 font-semibold">Recommended:</p>
          <div className=" flex  justify-around items-center  my-4">
            <div className="flex gap-3">
              <Button variant="outlined" onClick={() => setFiltered(data)}>
                All
              </Button>
              <Button variant="outlined" onClick={() => filterItem("Nike")}>
                Nike
              </Button>

              <Button variant="outlined" onClick={() => filterItem("Adidas")}>
                Adidas
              </Button>

              <Button variant="outlined" onClick={() => filterItem("Puma")}>
                puma
              </Button>
              <Button variant="outlined" onClick={() => filterItem("Vans")}>
                Vans
              </Button>
            </div>
            <div>
              <Input
                label="search...."
                color="red"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
            </div>
          </div>

          <div className=" flex justify-between items-center">
            <section className="text-gray-600 body-font">
              <div className="container px-5 py-9  mx-auto">
                <div className="flex flex-wrap -m-4">
                  {filtered.slice(0, 12).map((item, id) => {
                    return (
                      <>
                        <div
                          className="lg:w-1/4 md:w-1/2 p-3 w-full  border"
                          key={id}
                        >
                          <a className="block relative h-48 rounded overflow-hidden">
                            <img
                              alt="ecommerce"
                              className="object-cover object-center  block"
                              src={item.img}
                            />
                          </a>

                          <div className="mt-4">
                            <Link to={`/products/${item.id}`}>
                              <h3 className="text-black text-sm font-semibold     tracking-widest title-font mb-1">
                                {item.title}
                              </h3>
                            </Link>

                            <section className="card-price">
                              <div className="price">
                                <del>{item.prevPrice}</del> &nbsp; $
                                {item.newPrice}
                              </div>
                            </section>
                            <div className="flex justify-end mt-4">
                              <Button
                                color="red"
                                onClick={() => {
                                  handleAddToCart(item);
                                }}
                              >
                                add Cart
                              </Button>
                            </div>
                            <ToastContainer />
                          </div>
                        </div>
                      </>
                    );
                  })}
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
