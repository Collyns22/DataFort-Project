const Table = ({ data, columns }) => (
  <table className="min-w-full bg-white border border-gray-300">
    <thead>
      <tr>
        {columns.map((col) => (
          <th
            key={col.accessor}
            className="py-2 px-4 border-b font-semibold text-left"
          >
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr key={row.id || idx} className="border-b hover:bg-gray-50">
          {columns.map((col) => (
            <td key={col.accessor} className="py-2 px-4">
              {row[col.accessor]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
