import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import { BeharTableProps } from './BeharTable.types'
import BeharTableRow from './BeharTableRow'

export default function BeharTable({ rows, headers }: BeharTableProps): JSX.Element {

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell key={header.key || index}>{header.cell}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <BeharTableRow key={index} cells={row.cells} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
