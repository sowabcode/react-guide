import React from "react";
import "remixicon/fonts/remixicon.css";

const Item = ({ item }) => {
  return (
    <div className="leading-8 flex justify-between">
      <h1 className="font-semibold text-xl leading-10">{item}</h1>
      <div className="space-x-2">
        <i className="ri-pencil-line text-blue-400"></i>
        <i className="ri-delete-bin-6-line text-red-400"></i>
      </div>
    </div>
  );
};

export default Item;
