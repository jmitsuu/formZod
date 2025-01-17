import { z } from "zod"
 
export const formSchema = z.object({
  id: z.string(),
  status:z.string().min(1,{message:"Preencha o status"}).optional(),
  product:z.string().min(1,{message:"Preencha o produto"}).optional(),
  amount:z.coerce.number().min(1,{message:"Insira um valor"})
})