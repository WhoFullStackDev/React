import { createColumnHelper } from "@tanstack/react-table";
import RowAction from "./RowAction";

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
};

const columnHelper = createColumnHelper<Person>();

export const defaultColumns = [
  columnHelper.display({
    id: "action",
    cell: (props) => <RowAction row={props.row} />,
  }),
  columnHelper.group({
    header: "Name",
    footer: (props) => props.column.id,
    columns: [
      columnHelper.accessor("firstName", {
        cell: (info) => info.getValue(),
        footer: (props) => props.column.id,
      }),
      {
        accessorFn: (row) => row.lastName,
        id: "lastName",
        cell: (info) => info.getValue(),
        header: () => <span>Last Name</span>,
        footer: (props) => props.column.id,
      },
    ],
  }),
  columnHelper.group({
    header: "info",

    footer: (props) => props.column.id,
    columns: [
      columnHelper.accessor("age", {
        header: "Age",
        footer: (props) => props.column.id,
      }),
      columnHelper.group({
        header: "More info",
        columns: [
          columnHelper.accessor("visits", {
            header: () => <span>Visits</span>,
            footer: (props) => props.column.id,
          }),
          columnHelper.accessor("status", {
            header: () => "Status",
            footer: (props) => props.column.id,
          }),
          columnHelper.accessor("progress", {
            header: "Profile Progress",
            footer: (props) => props.column.id,
          }),
        ],
      }),
    ],
  }),
];