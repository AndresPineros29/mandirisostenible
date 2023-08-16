import ServicesTemplate from "./Template/ServicesTemplate";

// Import data
import { saneamientoBasicoData } from "../../Data/saneamientoBasicoData";

const SaneamientoBasico = () => {
  return (
    <main>
      <ServicesTemplate data={saneamientoBasicoData} />
    </main>
  );
};

export default SaneamientoBasico;
