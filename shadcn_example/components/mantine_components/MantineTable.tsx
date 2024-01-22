import React, { useState } from 'react';
import { Table, Pagination } from '@mantine/core';

const MantineTable = ({ rows, columns }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 10;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = currentPage * rowsPerPage;
  const paginatedRows = rows.slice(startIndex, endIndex);

  return (
    <div>
      <Table stickyHeader>
        <Table.Thead>
          <Table.Tr>
            {columns.map((column, columnIndex) => (
              <Table.Th key={columnIndex}>{column.field}</Table.Th>
            ))}
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          {paginatedRows.map((row, rowIndex) => (
            <Table.Tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <Table.Td key={colIndex}>{row[column.field]}</Table.Td>
              ))}
            </Table.Tr>
          ))}
        </Table.Tbody>
      </Table>
      <Pagination
        total={Math.ceil(rows.length / rowsPerPage)}
        value={currentPage}
        onChange={handlePageChange}
      />
    </div>
  );
};

export default MantineTable;
