import React from 'react'
import { Paper, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import { BeharTableProps } from './BeharTable.types'
import BeharTableRow from './BeharTableRow'

export default function BeharTable({ rows, headers }:BeharTableProps): JSX.Element {

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
        {rows.map((row) => (
          <BeharTableRow cells={row.cells} />
        ))}
      </Table>
    </TableContainer>
  )
}
