import { companyLogos } from "../constants";
import Infinite from "./Infinite";

const CompanyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Saving You FRom Getting Scammed
      </h5>
      <Infinite/>
    </div>
  );
};

export default CompanyLogos;
