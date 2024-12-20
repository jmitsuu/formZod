import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FormTypeModel } from "../../payment.type";
import { TypePayment } from "../../payment.interface";
// import { GroupSelect } from "./checkbox/GroupSelect";
import { checkList } from "./checkbox/group.model";
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
   <select
    {...register("status")}
    className="bg-white shadow-sm border text-sm   w-[190px] py-2 px-2 rounded-md"
   >
    {checkList.map((option) => {
     return <option key={option.id}>{option.checkTitle}</option>;
    })}
   </select>
   {/* <GroupSelect option={ {...register("status")}} /> */}

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
