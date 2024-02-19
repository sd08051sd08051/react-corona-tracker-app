import React from "react";
import countriesJson from "../country.json";

const Selector = () => {
  return (
    <div>
      <select>
        {countriesJson.map((country) => console.log(country.slug))}
      </select>
    </div>
  );
};

//Default

export default Selector;
