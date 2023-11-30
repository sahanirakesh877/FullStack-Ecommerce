import React, { useState } from "react";

const FilterData = () => {
  const [category, setCategory] = useState("Medium");
  const onOptionChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <>
      <div className="App">
        <h3>Select Pizza Size</h3>

        <input
          type="radio"
          name="category"
          value="Regular"
          id="regular"
          checked={category === "Regular"}
          onChange={onOptionChange}
        />
        <label htmlFor="regular">Regular</label>

        <input
          type="radio"
          name="category"
          value="Medium"
          id="medium"
          checked={category === "Medium"}
          onChange={onOptionChange}
        />
        <label htmlFor="medium">Medium</label>

        <input
          type="radio"
          name="category"
          value="Large"
          id="large"
          checked={category === "Large"}
          onChange={onOptionChange}
        />
        <label htmlFor="large">Large</label>

        <p>
          Select category <strong>{category}</strong>
        </p>
      </div>
    </>
  );
};

export default FilterData;
