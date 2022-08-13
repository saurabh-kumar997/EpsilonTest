import React from "react";

const TableHead = ({ columns, handleSorting, field, sortOrder }) => {
  return (
    <thead>
      {columns.map((col) => (
        <th key={col.accessor} onClick={() => handleSorting(col.accessor)}>
          {col.label}
          {col.accessor === field ? (
            sortOrder === "asc" ? (
              <span>&darr;</span>
            ) : (
              <span>&uarr;</span>
            )
          ) : (
            <span>&darr;&uarr;</span>
          )}
        </th>
      ))}
    </thead>
  );
};

export default TableHead;
