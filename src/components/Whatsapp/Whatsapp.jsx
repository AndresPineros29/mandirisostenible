// Animation
import { easeOut, motion as m } from "framer-motion";

// Import Icons
import { BsWhatsapp } from "react-icons/bs";

const Whatsapp = () => {
  return (
    <m.section
      whileHover={{ scale: 1.2 }}
      transition={{ easeOut, duration: 0.3 }}
      className="fixed z-20 bottom-8 right-8 lg:bottom-20 lg:right-20"
    >
      <a
        target="_blank"
        rel="noreferrer"
        href="https://api.whatsapp.com/send?phone=573118780706"
      >
        <div className="p-4 lg:p-4 bg-green-500 rounded-full">
          <BsWhatsapp className="text-3xl lg:text-4xl" color="white" />
        </div>
      </a>
    </m.section>
  );
};

export default Whatsapp;
