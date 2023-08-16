import ServicesTemplate from "./Template/ServicesTemplate";

// Import data
import { ecoturismoData } from "../../Data/ecoturismoData";

const Ecoturismo = () => {
  return (
    <main>
      <ServicesTemplate data={ecoturismoData} />
    </main>
  );
};

export default Ecoturismo;
