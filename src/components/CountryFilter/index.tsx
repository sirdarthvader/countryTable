import React, { useState } from "react";
import "./styles.css";
import { CountryFilterProps } from "./types";

export const CountryFilter = ({
  onSearch,
  onFilter,
  onClear,
  handleFetch,
}: CountryFilterProps) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    onSearch(event.target.value);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(event.target.value);
    onFilter(event.target.value);
  };

  const handleClear = () => {
    setSearch("");
    setFilter("");
    onClear();
  };

  return (
    <div className="filter-container">
      <div className="left">
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Search..."
        />
        <select value={filter} onChange={handleFilterChange}>
          <option value="">Population</option>
          <option value="<1M">&lt; 1M</option>
          <option value="<5M">&lt; 5M</option>
          <option value="<10M">&lt; 10M</option>
        </select>
        <button onClick={handleClear}>Clear</button>
      </div>
      <div className="right">
        <button onClick={handleFetch}>Fetch Countries</button>
      </div>
    </div>
  );
};

export default CountryFilter;
