import { useState } from "react";

export function useSearch(initialData) {
  const [search, setSearch] = useState("");

  const filteredData = initialData.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const clearFilter = () => {
    setSearch('')
  }

  return {
    search,
    setSearch,
    filteredData,
    clearFilter
  };
}