import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { formSchema } from "../payment.schema";

type FormType  = z.infer<typeof formSchema>

export function FormTypeModel(){
 
  const {register, handleSubmit , formState: {errors}}= useForm<FormType>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      id:"",

  }
 
  })
  return {register, handleSubmit ,errors}
}
