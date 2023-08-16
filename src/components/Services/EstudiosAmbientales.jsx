import ServicesTemplate from "./Template/ServicesTemplate";

// Import data
import { estudiosAmbientalesData } from "../../Data/estudiosAmbientalesData";

const EstudiosAmbientales = () => {
  return (
    <main>
      <ServicesTemplate data={estudiosAmbientalesData} />
    </main>
  );
};

export default EstudiosAmbientales;
