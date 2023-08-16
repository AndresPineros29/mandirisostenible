/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../../Data/servicesData";

const ServicesSm = ({ active, setActive }) => {
  const [services, setServices] = useState(false);

  const showServices = () => {
    setServices(!services);
  };
  //Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  };

  return (
    <section
      className={
        active
          ? "lg:hidden fixed top-0 w-full h-full text-lg bg-white"
          : "hidden"
      }
    >
      <div className="flex flex-col h-full items-center justify-center gap-8 font-bold text-3xl text-secundary-green">
        {/* Home */}
        <Link to={"/"} onClick={scrollToTop}>
          <div onClick={() => setActive(!active)}>
            <h3>Home</h3>
          </div>
        </Link>

        {/* Services */}
        <hr />
        <div onClick={showServices}>
          <h3>Servicios</h3>
        </div>
        <div className={services ? "px-10 w-full" : "hidden"}>
          <ul className="flex flex-col gap-3 ">
            {servicesData.map((data, i) => (
              <Link key={i} to={data.ruta} onClick={scrollToTop}>
                <li
                  className="  text-xl"
                  onClick={() => {
                    setActive(!active), setServices(!services);
                  }}
                >
                  {data.service}
                </li>
                <hr />
              </Link>
            ))}
          </ul>
        </div>
        {/* Contacto */}
        <hr />
        <Link to={"/contacto"}>
          <div
            className="flex justify-center bg-secundary-green rounded-xl"
            onClick={() => setActive(!active)}
          >
            <h3 className="font-bold p-3 text-white">Contactanos</h3>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default ServicesSm;
