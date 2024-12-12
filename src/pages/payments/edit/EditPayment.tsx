import { Input } from "@/components/ui/input";
import { FindParamsEdit } from "./editpayment.model";
import { FormTypeModelEdit } from "./editpayment.type";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function EditPayment() {
 const { findIdPayment, updatePayment } = FindParamsEdit();
 const { register, handleSubmit, errors } = FormTypeModelEdit();
 return (
  <section className="w-full h-full flex flex-col items-center  ">
   <div className="container mx-auto mt-20 px-10">
    <h1 className="text-6xl pb-20 text-slate-700 uppercase underline">
     Editar Pagamento{" "}
    </h1>
    <h1 className="text-xl mb-10">Id {findIdPayment?.id}</h1>
    <form onSubmit={handleSubmit(updatePayment)} className="space-y-8">
     <Input
      {...register("status")}
      className="w-60"
      placeholder="Status do pagamento"
     />
     {/* <GroupSelect teste={{...register("status")}}  /> */}
     <p className="text-red-500">{errors.status?.message}</p>

     <Input
      {...register("product")}
      className="w-80"
      placeholder="Insira o produto"
     />
     <p className="text-red-500">{errors.product?.message}</p>

     <Input
      {...register("amout")}
      className="w-32"
      placeholder="Insira o valor"
     />
     <p className="text-red-500">{errors.amout?.message}</p>

     <Button
      type="submit"
      className="bg-green-500 text-black hover:bg-green-400"
     >
      Atualizar Pagamento
     </Button>
    </form>
    <Button className="mt-5 ">
     {" "}
     <Link to="/">Voltar</Link>
    </Button>
   </div>
  </section>
 );
}
