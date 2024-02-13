import React from "react";
import countriesJson from "../country.json";

const Selector = () => {
  return (
    <div>
      <select>
        {countriesJson.map((country) => console.log(country.Country))}
        {/* 国データの読み込み */}
      </select>
    </div>
  );
};

export default Selector;
