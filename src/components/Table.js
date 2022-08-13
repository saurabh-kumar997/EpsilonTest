import axios from "axios";
import React, { useEffect, useState } from "react";
import TableBody from "./TableBody";
import TableHead from "./TableHead";

const Table = () => {
  const [tableData, setTableData] = useState({ cookies: [] });
  const [sortOrder, setsortOrder] = useState("asc");
  const [accessor, setAccessor] = useState("");

  useEffect(() => {
    axios
      .get(
        "https://raw.githubusercontent.com/epsilon-ux/code-challenge-resources/main/cookies.json"
      )
      .then((response) => {
        console.log(response.data);
        setTableData(response.data);
      });
  }, []);

  useEffect(() => {
    handleSorting(accessor, sortOrder);
  }, [accessor, sortOrder]);

  const handleSorting = (field, sortOrder) => {
    if (field) {
      const sorted = [...tableData.cookies].sort((a, b) => {
        if (a[field] === null) return 1;
        if (b[field] === null) return -1;
        if (a[field] === null && b[field] === null) return 0;
        return (
          a[field].toString().localeCompare(b[field].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setTableData({ cookies: sorted });
    }
  };

  const handleSortChange = (field) => {
    let order = accessor === field && sortOrder === "asc" ? "desc" : "asc";
    setAccessor(field);
    setsortOrder(order);
  };

  const columns = [
    { label: "Name", accessor: "name" },
    { label: "Price", accessor: "price" },
    { label: "Category", accessor: "category" },
  ];
  return (
    <table className="table">
      <TableHead
        handleSorting={handleSortChange}
        columns={columns}
        sortOrder={sortOrder}
        field={accessor}
      />
      <TableBody tableData={tableData} columns={columns} />
    </table>
  );
};

export default Table;
