import React from "react";
import dest1 from "../assets/destination1.jpg";
import dest2 from "../assets/destination2.jpg";
import dest3 from "../assets/destination3.jpg";
import dest4 from "../assets/destination4.jpg";
import dest5 from "../assets/destination5.jpg";
import dest6 from "../assets/destination6.jpg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={dest1} text="Bora Bora" />
      <SelectsCard bg={dest2} text="Maldives" />
      <SelectsCard bg={dest3} text="Cozumel" />
      <SelectsCard bg={dest4} text="Antigua" />
      <SelectsCard bg={dest5} text="Key West" />
      <SelectsCard bg={dest6} text="Jamaica" />
    </div>
  );
};

export default Selects;
