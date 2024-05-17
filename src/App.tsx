import { useState } from "react";
import { useCountries } from "./api/useCountries";
import CountryFilter from "./components/CountryFilter";
import { Table } from "./components/Table";

export const CountryTable = () => {
  const [fetchCountry, setFetchCountry] = useState(false);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");
  const {
    data: countries = [],
    isLoading,
    error,
    refetch,
  } = useCountries({
    enabled: fetchCountry,
  });

  const handleSearch = (search: string) => {
    setSearch(search);
  };

  const handleFetch = () => {
    setFetchCountry(true);
    refetch();
  };

  const handleFilter = (filter: string) => {
    setFilter(filter);
  };

  const handleClear = () => {
    setSearch("");
    setFilter("");
  };

  if (error) {
    return <div>Error loading countries</div>;
  }

  const filteredCountries = countries
    .filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((country) => {
      if (filter === "<1M") return country.population < 1_000_000;
      if (filter === "<5M") return country.population < 5_000_000;
      if (filter === "<10M") return country.population < 10_000_000;
      return true;
    })
    .sort((a, b) => (a.name > b.name ? 1 : -1));

  return (
    <div className="container">
      <h1>Countries Info</h1>
      <CountryFilter
        onSearch={handleSearch}
        onFilter={handleFilter}
        onClear={handleClear}
        handleFetch={handleFetch}
      />
      <Table
        headers={["Name", "Code", "Capital", "Population", "Flag"]}
        data={filteredCountries || []}
        loading={isLoading}
      />
    </div>
  );
};
