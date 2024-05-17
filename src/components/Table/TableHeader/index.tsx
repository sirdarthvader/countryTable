interface TableHeadProps {
  headers: string[];
}

export const TableHead = ({ headers }: TableHeadProps) => {
  return (
    <thead>
      <tr>
        {headers.map((header) => (
          <th key={header}>{header}</th>
        ))}
      </tr>
    </thead>
  );
};
