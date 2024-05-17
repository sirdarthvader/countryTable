import { Country } from "../../../types/country";
import { TableRow } from "../TableRow";

interface TableBodyProps {
  data: Country[];
  loading: boolean;
}

export const TableBody = ({ data, loading }: TableBodyProps) => {
  return (
    <tbody>
      {loading ? (
        <tr>
          <td colSpan={5}>Loading...</td>
        </tr>
      ) : data.length > 0 ? (
        data.map((country) => (
          <TableRow key={country.abbreviation} country={country} />
        ))
      ) : (
        <tr>
          <td colSpan={5}>No data available</td>
        </tr>
      )}
    </tbody>
  );
};
