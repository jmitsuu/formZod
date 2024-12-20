import { FindParamsEdit } from "./editpayment.model";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { FormPayment } from "../components/form/FormPayment";

export function EditPayment() {
 const { editPayment, updatePayment } = FindParamsEdit();
 return (
  <section className="w-full h-full flex flex-col items-center  ">
   <div className="container mx-auto mt-20 px-10">
    <h1 className="text-6xl pb-20 text-slate-700 uppercase underline">
     Editar Pagamento{" "}
    </h1>
    <h1 className="text-xl mb-10">Id {editPayment?.id}</h1>
    <FormPayment OnSubmit={updatePayment} btnTextForm="Atualizar pagamento" />
    <Link to="/">
     <Button className="mt-5 ">Voltar</Button>
    </Link>
   </div>
  </section>
 );
}
