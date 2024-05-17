import { Country } from "../../types/country";
import { TableBody } from "./TableBody";
import { TableHead } from "./TableHeader";
import "./styles.css";

interface TableProps {
  headers: string[];
  data: Country[];
  loading: boolean;
}
export const Table = ({ headers, data, loading }: TableProps) => {
  return (
    <table>
      <TableHead headers={headers} />
      <TableBody data={data} loading={loading} />
    </table>
  );
};
