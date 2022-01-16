import { TableCell, TableRow } from '@mui/material'
import React from 'react'
import { BeharTableCell, BeharTableCellWithProps } from './BeharTable.types'

export default function BeharTableRow({ cells }: { cells: BeharTableCell[] }) {

  return (
    <TableRow>
      {cells.map((cell: BeharTableCell, index) => {
        const c = cell as BeharTableCellWithProps
        if (c.content) {
          return (
            <TableCell key={c?.key || index} {...c.props}>{c?.content}</TableCell>
          )
        }
        // eslint-disable-next-line react/no-array-index-key
        return <TableCell key={index}>{cell}</TableCell>
      })}
    </TableRow>
  )
}

