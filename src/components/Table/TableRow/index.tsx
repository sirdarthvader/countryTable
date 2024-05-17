import { Country } from "../../../types/country";
interface TableRowProps {
  country: Country;
}
export const TableRow = ({ country }: TableRowProps) => {
  return (
    <tr>
      <td>{country.name}</td>
      <td>{country.abbreviation}</td>
      <td>{country.capital}</td>
      <td>{country.population}</td>
      <td>
        <img
          src={country.media?.flag}
          alt={`${country.name} flag`}
          style={{ width: "50px" }}
        />
      </td>
    </tr>
  );
};
