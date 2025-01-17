import { z } from "zod"

export const UserFormSchema = z.object({
  name:z.string().min(1,{message:"Campo Nome deve ser preenchido"}),
  lastName:z.string().min(1,{message:"Campo sobrenome deve ser preenchido"}),
  email:z.string().min(1,{message:"Campo e-mail deve ser preenchido"}).email("Verifique se o e-mail é válido '@'"),
  phone:z.string().min(1,{message:"Campo Telefone deve ser preenchido"}).max(10),
})