import { useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import data from './assets/data.js';
import { Stack } from '@mui/material';

const Example = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: 'id',
        header: 'ID',
        size: 50,
      },
      {
        accessorKey: 'name',
        header: 'Name',
        size: 150,
      },
      {
        accessorKey: 'category',
        header: 'Category',
        size: 100,
      },
      {
        accessorKey: 'subcategory',
        header: 'Subcategory',
        size: 100,
      },
      {
        accessorKey: 'createdAt',
        header: 'Created At',
        size: 150,
      },
      {
        accessorKey: 'updatedAt',
        header: 'Updated At',
        size: 150,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        size: 100,
      },
      {
        accessorKey: 'sale_price',
        header: 'Sale Price',
        size: 100,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableGrouping: true,
    groupedColumnMode: 'reorder',
    initialState: {
      expanded: true,
      pagination: { pageIndex: 0, pageSize: 10 },
    },
    muiTableContainerProps: { sx: { maxHeight: '800px' } },
  });

  return (
    <Stack gap="1rem">
      <MaterialReactTable table={table} />
    </Stack>
  );
};

export default Example;
