import ServicesTemplate from "./Template/ServicesTemplate";

// Import data
import { hidricoData } from "../../Data/hidricoData";

const Hidrico = () => {
  return (
    <main>
      <ServicesTemplate data={hidricoData} />
    </main>
  );
};

export default Hidrico;
