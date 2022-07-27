import React from "react";

const SelectsCard = (props) => {
  return (
    <div>
      <div className="relative">
        <img
          className="w-[470px] h-[587px]"
          src={props.bg}
          alt="a random island"
        />
        <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
          <p className="left-4 bottom-4 text-2xl text-white absolute font-bold">
            {props.text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectsCard;
