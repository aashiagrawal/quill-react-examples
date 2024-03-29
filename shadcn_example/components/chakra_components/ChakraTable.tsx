import React from "react";
import { useTable, usePagination } from "react-table";
import {
  TableContainer,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Flex,
  IconButton,
  Text,
  Tooltip,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  ChevronRightIcon,
  ChevronLeftIcon
} from "@chakra-ui/icons";

export function ChakraTable({ rows, columns: originalColumns }) {
    const columns = React.useMemo(() => 
    originalColumns.map(col => ({
      Header: col.label, // Assuming you have a label for each column's header
      accessor: col.field
    })),
    [originalColumns]
  );
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize }
  } = useTable(
    {
      columns,
      data: rows,
      initialState: { pageIndex: 0 }
    },
    usePagination
  );
  const stickyHeaderStyle = { 
    position: "sticky",
    top: 0,
    backgroundColor: "white", // or any background color that fits your design
    zIndex: 1 // To ensure the header is above other content
  };
  const hasData = rows && rows.length > 0;

  return (
    <>
      <TableContainer overflowY={scroll} overflowX={scroll}>
        <Table variant='simple' {...getTableProps()}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <Th {...column.getHeaderProps()} style={{...stickyHeaderStyle}}>{column.render("Header")}</Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()} overflow={'scroll'}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
                  ))}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      {hasData && (
        <div className="sticky-footer" style={{ 
          position: 'sticky',
          bottom: 0,
          backgroundColor: 'white',
          borderTop: '1px solid #ddd',
          padding: '10px',
          display: 'flex',
          justifyContent: 'end',
          zIndex: 1
        }}>
          <Flex justifyContent="space-between" m={4} alignItems="center">
            <Flex>
              <Tooltip label="First Page">
                <IconButton
                  onClick={() => gotoPage(0)}
                  isDisabled={!canPreviousPage}
                  icon={<ArrowLeftIcon h={3} w={3} />}
                  mr={4}
                />
              </Tooltip>
              <Tooltip label="Previous Page">
                <IconButton
                  onClick={previousPage}
                  isDisabled={!canPreviousPage}
                  icon={<ChevronLeftIcon h={6} w={6} />}
                />
              </Tooltip>
            </Flex>

            <Flex alignItems="center">
              <Text flexShrink="0" mr={8}>
                Page{" "}
                <Text fontWeight="bold" as="span">
                  {pageIndex + 1}
                </Text>{" "}
                of{" "}
                <Text fontWeight="bold" as="span">
                  {pageOptions.length}
                </Text>
              </Text>
              <Text flexShrink="0">Go to page:</Text>{" "}
              <NumberInput
                ml={2}
                mr={8}
                w={28}
                min={1}
                max={pageOptions.length}
                onChange={(value) => {
                  const page = value ? value - 1 : 0;
                  gotoPage(page);
                }}
                defaultValue={pageIndex + 1}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Select
                w={32}
                value={pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[10, 20, 30, 40, 50].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </Select>
            </Flex>
              <Flex>
                <Tooltip label="Next Page">
                  <IconButton
                    onClick={nextPage}
                    isDisabled={!canNextPage}
                    icon={<ChevronRightIcon h={6} w={6} />}
                  />
                </Tooltip>
                <Tooltip label="Last Page">
                  <IconButton
                    onClick={() => gotoPage(pageCount - 1)}
                    isDisabled={!canNextPage}
                    icon={<ArrowRightIcon h={3} w={3} />}
                    ml={4}
                  />
                </Tooltip>
              </Flex>
          </Flex>
        </div>
      )
    }
    </>
  );
}

export default ChakraTable;
