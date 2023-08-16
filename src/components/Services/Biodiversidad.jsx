import ServicesTemplate from "./Template/ServicesTemplate";

// Import data
import { biodiversidadData } from "../../Data/biodiversidadData";

const Biodiversidad = () => {
  return (
    <div>
      <ServicesTemplate data={biodiversidadData} />
    </div>
  );
};

export default Biodiversidad;
