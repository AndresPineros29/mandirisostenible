import ServicesTemplate from "./Template/ServicesTemplate";

// Import data
import { forestalData } from "../../Data/forestalData";

const Forestal = () => {
  return (
    <main>
      <ServicesTemplate data={forestalData} />
    </main>
  );
};

export default Forestal;
