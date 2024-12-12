import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableCaption,
 TableRow,
} from "@/components/ui/table";
import { Modal } from "../components/modal/Modal";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { PaymentModel } from "./payment.model";
import { TypePayment } from "../payment.interface";
import { usePayments } from "@/global/global.payments";
import { Link } from "react-router-dom";

export function Payments() {
 const { payments } = usePayments();
 const { deletePayment } = PaymentModel();

 return (
  <section className="w-full h-full flex flex-col items-center  ">
   <div className=" container mx-auto mt-20 px-10 ">
    <h1 className="text-6xl pb-20 text-slate-700 uppercase underline">
     Pagamentos{" "}
    </h1>
    <div className="w-full flex mb-10 gap-x-3 relative ">
     <Modal />
    </div>

    <Table className="">
     <TableHeader>
      <TableRow>
       <TableHead className="w-[100px]">Id</TableHead>
       <TableHead>Status</TableHead>
       <TableHead>Produto</TableHead>
       <TableHead className="text-right">Valor</TableHead>
       <TableHead className="text-right"># #</TableHead>
      </TableRow>
     </TableHeader>
     <TableBody>
      {payments?.map((cellPayment: TypePayment) => {
       return (
        <TableRow key={`${cellPayment.id}`}>
         <TableCell className="text-slate-500">{cellPayment.id}</TableCell>
         <TableCell>{cellPayment.status}</TableCell>
         <TableCell>{cellPayment.product}</TableCell>
         <TableCell className="text-right font-bold">
          {cellPayment.amout} R$
         </TableCell>
         <TableCell className="flex gap-x-3 float-right text-xl">
          {" "}
          <Link to={`/edit/${cellPayment.id}`}>
           <button>
            <AiOutlineEdit className="text-blue-500" />
           </button>
          </Link>
          <button
           onClick={() => {
            deletePayment(cellPayment.id);
           }}
          >
           <AiOutlineDelete className="text-red-500" />
          </button>
         </TableCell>
        </TableRow>
       );
      })}
     </TableBody>
     <TableCaption className="flex">
      {payments?.length} {payments?.length > 1 ? "Pagamentos" : "Pagamento"}
     </TableCaption>
    </Table>
   </div>
  </section>
 );
}
