import { z } from "zod"
 
export const formSchema = z.object({
  id: z.string(),
  status:z.string().min(1,{message:"Insira a situação do pagamento"}),
  product:z.string().min(1,{message:"Preencha o produto"}),
  amout:z.coerce.number().min(1,{message:"Insira um valor"})
})