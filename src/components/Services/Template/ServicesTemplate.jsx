/* eslint-disable react/prop-types */
// Animation
import { motion as m } from "framer-motion";
import { transition1 } from "../../../transitions";

const ServicesTemplate = ({ data, oculto }) => {
  return (
    <m.container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition1}
    >
      <section className=" mt-20 xl:mt-36 px-7 lg:px-24 xl:px-[38rem] py-10 flex justify-center bg-secundary-green">
        <m.div
          initial={{ y: "-50%" }}
          animate={{ y: 0 }}
          transition={transition1}
          className="text-center"
        >
          <h1 className="font-bold text-2xl text-white uppercase ">
            {data.name}
          </h1>
          <br />
          <p className="text-xl text-gray-100 lg:leading-10">
            {data.description}
          </p>
        </m.div>
      </section>

      <section className="flex flex-col gap-10 my-10 lg:px-16 md:grid md:grid-cols-2 lg:justify-aroundz xl:px-0 xl:grid-cols-4">
        {data.lines.map((info, i) => (
          <m.div
            initial={{ y: "-50%", scale: 0 }}
            animate={{ y: 0, scale: 1 }}
            transition={transition1}
            key={i}
            className="mx-12 flex flex-col items-center lg:max-w-xs"
          >
            <div
              className={`flex justify-center w-full h-96 shadow-xl rounded-lg ${
                oculto ? "hidden" : ""
              }`}
            >
              <img
                className="h-full w-full overflow-hidden object-cover rounded-lg"
                src={info.image}
              />
            </div>
            <div className="relative bottom-5 bg-primary-blue rounded-md">
              <h2 className="m-2 text-2xl font-bold text-center text-white">
                {info.line}
              </h2>
            </div>
          </m.div>
        ))}
      </section>
    </m.container>
  );
};

export default ServicesTemplate;
