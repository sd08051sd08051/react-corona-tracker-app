import React from "react";
import countriesJson from "../country.json";

const Selector = () => {
  countriesJson.map((country) => console.log(country));
  return (
    <div>
      <select>
        <option>USA</option>
        <option>JAPAN</option>
        <option>CHINA</option>
      </select>
    </div>
  );
};

export default Selector;
