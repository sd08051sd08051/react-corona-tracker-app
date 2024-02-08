import React from "react";
import countriesJson from "../country.json";

const Selector = () => {
  console.log(countriesJson);
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
