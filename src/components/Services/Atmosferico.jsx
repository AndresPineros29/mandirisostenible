import ServicesTemplate from "./Template/ServicesTemplate";

// Import data
import { atmosfericoData } from "../../Data/atmosfericoData";

const Atmosferico = () => {
  return (
    <div>
      <ServicesTemplate data={atmosfericoData} oculto={true} />
    </div>
  );
};

export default Atmosferico;
