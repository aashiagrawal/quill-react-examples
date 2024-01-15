import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'
import { TableComponentProps } from '@quillsql/react/src/components/UiComponents'

export function ChakraTable({rows, columns}: TableComponentProps) {
    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                <Tr>
                    {columns.map((column, columnIndex) => (
                        <Th key={columnIndex}>{column.field}</Th>
                        ))}
                </Tr>
                </Thead>
                <Tbody>
                    {rows.map((row, rowIndex) => (
                        <Tr key={rowIndex}>
                        {columns.map((column, colIndex) => (
                            <Td key={colIndex}>{row[column.field]}</Td>
                        ))}
                        </Tr>
                    ))}
                </Tbody>
            </Table>
        </TableContainer>
    )
}

export default ChakraTable


// import React from 'react';
// import {
//   useTable,
//   usePagination,
// } from 'react-table';
// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Flex,
//   IconButton,
//   Text,
//   Select,
//   NumberInput,
//   NumberInputField,
//   TableContainer,
// } from '@chakra-ui/react';
// import {
//   ArrowRightIcon,
//   ArrowLeftIcon,
//   ChevronRightIcon,
//   ChevronLeftIcon
// } from '@chakra-ui/icons';
// import { TableComponentProps } from '@quillsql/react/src/components/UiComponents';

// export function ChakraTable({rows, columns}: TableComponentProps) {
//   const {
//     getTableProps,
//     getTableBodyProps,
//     headerGroups,
//     prepareRow,
//     page,
//     canPreviousPage,
//     canNextPage,
//     pageOptions,
//     pageCount,
//     gotoPage,
//     nextPage,
//     previousPage,
//     setPageSize,
//     state: { pageIndex, pageSize },
//   } = useTable(
//     {
//       columns,
//       data: rows,
//       initialState: { pageIndex: 0 },
//     },
//     usePagination
//   );

//   return (
//       <TableContainer>
//         <Table variant='simple' {...getTableProps()}>
//           <Thead>
//             {headerGroups.map(headerGroup => (
//               <Tr {...headerGroup.getHeaderGroupProps()}>
//                 {headerGroup.headers.map(column => (
//                   <Th {...column.getHeaderProps()}>{column.render('Header')}</Th>
//                 ))}
//               </Tr>
//             ))}
//           </Thead>
//           <Tbody {...getTableBodyProps()}>
//             {page.map(row => {
//               prepareRow(row);
//               return (
//                 <Tr {...row.getRowProps()}>
//                   {row.cells.map(cell => (
                   
//                    <Td {...cell.getCellProps()}>{cell.render("Cell")}</Td>
//                    ))}
//                  </Tr>
//                );
//              })}
//            </Tbody>
//          </Table>
//        </TableContainer>
     
//        {/* Pagination */}
//        <Flex justifyContent="space-between" m={4} alignItems="center">
//          <Flex>
//            <IconButton
//              onClick={() => gotoPage(0)}
//              isDisabled={!canPreviousPage}
//              icon={<ArrowLeftIcon h={3} w={3} />}
//              mr={4}
//            />
//            <IconButton
//              onClick={previousPage}
//              isDisabled={!canPreviousPage}
//              icon={<ChevronLeftIcon h={6} w={6} />}
//            />
//          </Flex>
     
//          <Flex alignItems="center">
//            <Text flexShrink="0" mr={8}>
//              Page{" "}
//              <Text fontWeight="bold" as="span">
//                {pageIndex + 1}
//              </Text>{" "}
//              of{" "}
//              <Text fontWeight="bold" as="span">
//                {pageOptions.length}
//              </Text>
//            </Text>
//            <NumberInput
//              ml={2}
//              mr={8}
//              w={28}
//              min={1}
//              max={pageOptions.length}
//              defaultValue={pageIndex + 1}
//              onChange={(valueString) => {
//                const page = parseInt(valueString, 10) - 1;
//                gotoPage(page);
//              }}
//            >
//              <NumberInputField />
//              <NumberInputStepper>
//                <NumberIncrementStepper />
//                <NumberDecrementStepper />
//              </NumberInputStepper>
//            </NumberInput>
//            <Select
//              w={32}
//              value={pageSize}
//              onChange={(e) => {
//                setPageSize(Number(e.target.value));
//              }}
//            >
//              {[10, 20, 30, 40, 50].map((size) => (
//                <option key={size} value={size}>
//                  Show {size}
//                </option>
//              ))}
//            </Select>
//          </Flex>
     
//          <Flex>
//            <IconButton
//              onClick={nextPage}
//              isDisabled={!canNextPage}
//              icon={<ChevronRightIcon h={6} w={6} />}
//            />
//            <IconButton
//              onClick={() => gotoPage(pageCount - 1)}
//              isDisabled={!canNextPage}
//              icon={<ArrowRightIcon h={3} w={3} />}
//              ml={4}
//            />
//          </Flex>
//        </Flex>
//   );
//              }
