import { z } from "zod"
 
export const formSchema = z.object({
  id: z.string(),
  status:z.enum(["Pago", "Em Aberto", "Em Atraso"]),
  product:z.string().min(1,{message:"Preencha o produto"}),
  amout:z.coerce.number().min(1,{message:"Insira um valor"})
})