import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "./payment.schema";
// import { FindParamsEdit } from "./edit/editpayment.model";

type FormType  = z.infer<typeof formSchema>

export function FormValues(){
  const {register, handleSubmit, formState:{errors}} = useForm<FormType>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      id:"",
      product:"teste",
      status:"Pago",
      amount:0.00
  }
 
  })
return {register, handleSubmit, errors}
}
