import { useContext } from "react";
import { LgContext } from "./Langprovider";

export const useLanguage = () => {
  return useContext(LgContext);
};

