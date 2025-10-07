"use client";
import { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <FilterContext.Provider value={{ searchTerm, setSearchTerm }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilter = () => useContext(FilterContext);

