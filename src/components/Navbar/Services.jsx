/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { servicesData } from "../../Data/servicesData";

const Services = ({ active }) => {
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <div
      className={
        active ? "fixed bg-white p-10 lg:grid bg-[#52cc0600] hidden" : "hidden"
      }
    >
      {servicesData.map((data, i) => (
        <div key={i}>
          <Link to={`/${data.ruta}`}>
            <h2
              className="mb-5 text-xl text-green-500 select-none cursor-pointer hover:text-green-600"
              onClick={scrollToTop}
            >
              {data.service}
            </h2>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Services;
