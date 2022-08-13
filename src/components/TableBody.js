import React from "react";

const TableBody = ({ tableData, columns }) => {
  return (
    <tbody>
      {tableData.cookies.map((it) => (
        <tr>
          {columns.map((tdata) => (
            <td>{it[tdata.accessor]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
