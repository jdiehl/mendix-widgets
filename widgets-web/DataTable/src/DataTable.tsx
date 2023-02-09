import { type ReactElement, createElement, useEffect, useState, useMemo, type UIEvent } from 'react'
import DataGrid, { type RowsChangeData } from 'react-data-grid'

import { type DataTableContainerProps } from '../typings/DataTableProps'

import { ODataResource } from './ODataResource'

import 'react-data-grid/lib/styles.css'
import './DataTable.css'

function isAtBottom({ currentTarget }: UIEvent<HTMLDivElement>): boolean {
  return currentTarget.scrollTop + 10 >= currentTarget.scrollHeight - currentTarget.clientHeight
}

export function DataTable({ endpoint }: DataTableContainerProps): ReactElement {
  const [context, setContext] = useState<any>({ columns: [], rows: [], isLoading: true })

  const resource = useMemo(() => new ODataResource(endpoint), [endpoint])

  useEffect(() => {
    resource.load().then(context => {
      setContext({ ...context, isLoading: false })
    }, err => { console.error(err) })
  }, [])

  const onRowsChange = (rows: any, data: RowsChangeData<any, any>): void => {
    setContext({ ...context, rows })
    Promise.all(data.indexes.map(async index => {
      const key = rows[index][context.key]
      const change = { [data.column.key]: rows[index][data.column.key] }
      await resource.update(key, change)
    })).catch(err => { console.error(err) })
  }

  const handleScroll = (event: UIEvent<HTMLDivElement>): void => {
    if (context.isLoading || !isAtBottom(event)) return
    resource.loadMore()
      .then(newRows => {
        const rows = [...context.rows, ...newRows]
        setContext({ ...context, rows, isLoading: false })
      }).catch(err => { console.error(err) })
  }

  return <DataGrid
    columns={context.columns}
    rows={context.rows}
    rowKeyGetter={context.rowKeyGetter}
    onRowsChange={onRowsChange}
    onScroll={handleScroll}
    className="fill-grid"
  />
}
