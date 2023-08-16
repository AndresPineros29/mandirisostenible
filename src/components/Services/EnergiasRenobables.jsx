import ServicesTemplate from "./Template/ServicesTemplate";

// Import data
import { energiasRenovablesData } from "../../Data/energiasRenovablesData";

const EnergiasRenobables = () => {
  return (
    <main>
      <ServicesTemplate data={energiasRenovablesData} />
    </main>
  );
};

export default EnergiasRenobables;
