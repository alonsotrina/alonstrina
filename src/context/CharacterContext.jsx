/* eslint-disable react/prop-types */
// CharacterContext.js
import { createContext, useState, useContext } from "react";

const CharacterContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export function useCharacterContext() {
  return useContext(CharacterContext);
}

export function CharacterContextProvider({ children }) {
  const [selectedElement, setSelectedElement] = useState(null);

  const value = {
    selectedElement,
    setSelectedElement
  };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}