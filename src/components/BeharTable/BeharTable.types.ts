import { TableCellProps } from '@mui/material'
import React, { ReactNode } from 'react'
import { Pagination } from '../../types/main'

export interface BeharTableProps {
  rows: BeharTableRow[];
  headers: BeharTableHeader[];
  pagination?: Pagination;
  key?: string;
}

export interface BeharTableHeader {
  key: string;
  cell: React.ReactNode;
  align?: 'center' | 'inherit' | 'justify' | 'left' | 'right';
  padding?: string;
  dataCy?: string;
}

export type BeharTableCell = BeharTableCellWithProps | ReactNode
// | string
// | number
// | {hello:string}
// | React.ReactNode

export interface BeharTableCellWithProps {
  content: React.ReactNode;
  props?: TableCellProps;
  ellipsis?: boolean;
  key?: string;
}

export interface BeharTableRow {
  cells: BeharTableCell[];
  pathToGoWhenClicked?: string;
  onClick?: (cell: BeharTableCell) => void;
}

