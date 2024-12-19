import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./payment.schema";
import { FindParamsEdit } from "./edit/editpayment.model";

type FormType  = z.infer<typeof formSchema>

export function FormTypeModel(){
  const{ editPayment}=  FindParamsEdit()
  const {register, handleSubmit , formState: {errors}}= useForm<FormType>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      id:`${editPayment?.id}`,
      status:editPayment?.status,
      product:editPayment?.product,
      amout:editPayment?.amout
  }
 
  })
  return {register, handleSubmit ,errors}
}
