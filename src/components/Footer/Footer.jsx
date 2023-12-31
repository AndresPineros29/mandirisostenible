import { RxDoubleArrowUp } from "react-icons/rx";

// Animation
import { easeOut, motion as m } from "framer-motion";

const Footer = () => {
  // Scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 flex flex-col gap-10 justify-around items-center text-center text-white text-lg bg-secundary-green/70">
      <m.section
        whileHover={{ scale: 1.1 }}
        transition={{ easeOut, duration: 0.3 }}
        className="flex flex-col items-center gap-2"
        onClick={scrollToTop}
      >
        <RxDoubleArrowUp size={25} />
        <p>VOLVER ARRIBA</p>
      </m.section>
      <section>
        <div>
          <ul>
            <li>Telefono: 74123741</li>
            <li>Instagram: @mandirisostenible</li>
            <li>Facebook: Mandiri Sostenible S.A.S.</li>
          </ul>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
