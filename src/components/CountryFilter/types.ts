export interface CountryFilterProps {
  onSearch: (search: string) => void;
  onFilter: (filter: string) => void;
  onClear: () => void;
  handleFetch: () => void;
}
