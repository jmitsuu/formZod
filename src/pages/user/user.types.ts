import { useForm } from "react-hook-form";
import { z } from "zod";
import { UserFormSchema } from "./user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
type TypeCheckOne  = z.infer<typeof UserFormSchema>
export function FormCheckOne(){
  const { register, handleSubmit, formState:{errors}} = useForm<TypeCheckOne>({
    resolver:zodResolver(UserFormSchema),
    defaultValues:{
      name: "",
      lastName: "",
      email: "",
      phone: "",
    }
  })
  return {register, handleSubmit, errors}
}