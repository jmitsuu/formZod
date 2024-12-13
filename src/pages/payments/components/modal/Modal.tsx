import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog";
import { FormPayment } from "../form/FormPayment";
import { usePayments } from "@/global/global.payments";
import { PaymentModel } from "../../home/payment.model";
// import { usePayments } from "@/global/global.payments";

export function Modal() {
 const { formModal, setFormModal } = usePayments();
 const { formOnSubmit } = PaymentModel();

 return (
  <Dialog open={formModal} onOpenChange={setFormModal}>
   <DialogTrigger className="absolute right-0 bg-black hover:bg-slate-600 py-1 px-2 rounded-lg text-slate-200">
    Novo pagamento
   </DialogTrigger>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Novo Cadastro</DialogTitle>
     <DialogDescription></DialogDescription>
    </DialogHeader>
    <FormPayment OnSubmit={formOnSubmit} btnTextForm="Cadastrar" />
   </DialogContent>
  </Dialog>
 );
}
