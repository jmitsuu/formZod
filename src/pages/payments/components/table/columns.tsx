import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";
import { TypePayment } from "../../payment.interface";
import { ColumnDef } from "@tanstack/react-table";

export const columnsTable: ColumnDef<TypePayment>[] = [
 {
  accessorKey: "id",
  header: "id",
 },
 {
  accessorKey: "status",
  header: ({ column }) => {
   return (
    <Button
     variant="ghost"
     onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
     Status
     <ArrowUpDown />
    </Button>
   );
  },
 },
 {
  accessorKey: "product",
  header: "Produto",
 },
 {
  accessorKey: "amount",
  header: "Valor",
 },
 {
  accessorKey: "##",
  header: "",
 },
];
