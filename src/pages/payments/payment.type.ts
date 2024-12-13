import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./payment.schema";
import { FindParamsEdit } from "./edit/editpayment.model";

type FormType  = z.infer<typeof formSchema>

export function FormTypeModel(){
  const{ findIdPayment}=  FindParamsEdit()
  const {register, handleSubmit , formState: {errors}}= useForm<FormType>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      id:`${findIdPayment?.id}`,
      status:findIdPayment?.status,
      product:findIdPayment?.product,
      amout:findIdPayment?.amout
  }
 
  })
  return {register, handleSubmit ,errors}
}
