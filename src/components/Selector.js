import React from "react";
import countriesJson from "../country.json";

const Selector = () => {
  return (
    <div>
      <select>{countriesJson.map((country) => console.log(country))}</select>
    </div>
  );
};

export default Selector;
