import { Modal } from "../components/modal/modal-create/Modal";
import { Container } from "@/layouts/Container";
import { Title } from "@/components/title/Title";
import { useModelPayment } from "./payment.model";
import { TablePayments } from "../components/table/table-payments";
import { columnsTable } from "../components/table/columns";

export function Payments() {
 const { data } = useModelPayment();
 return (
  <Container>
   <Title titleDesc="Pagamentos" />
   <div className="w-full flex mb-10 gap-x-3 relative ">
    <Modal />
   </div>
   <div>
    <TablePayments columns={columnsTable} data={data.payments ?? []} />
   </div>
  </Container>
 );
}
