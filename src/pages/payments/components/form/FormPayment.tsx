import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormTypeModel } from "../../payment.type";
import { TypePayment } from "../../payment.interface";
interface TypeForm {
 OnSubmit: (data: TypePayment) => Promise<void>;
 fieldValueId?: string;
 fieldValueProduct?: string;
 fieldValueAmout?: number;
 fieldValueStatus?: string;
 btnTextForm: string;
}
export function FormPayment({ OnSubmit, btnTextForm }: TypeForm) {
 const { register, handleSubmit, errors } = FormTypeModel();
 return (
  <form onSubmit={handleSubmit(OnSubmit)} className="space-y-8">
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

   <Button type="submit">{btnTextForm}</Button>
  </form>
 );
}
