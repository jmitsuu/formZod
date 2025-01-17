import { Button } from "@/components/ui/button";
import { TextInput } from "../components/formFields/textInput";
import { FormCheckOne } from "../user.types";


export function Checkone() {
  const {register, handleSubmit, errors}  =FormCheckOne();
  console.log(register)
  const testPrev = (e) =>{
   
    return e
  }

 return (
  <section className="flex flex-col items-center p-2">
    <h1 className="text-2xl text-slate-500">Dados pessoais</h1>
   <form onSubmit={handleSubmit(testPrev)} className="mx-auto relative">
    <label>Nome</label>
    <div className="flex gap-x-2">
     <TextInput placeholder="nome" {...register("name")}  errorMessage={errors.name?.message} />
     <TextInput Labelname="" placeholder="sobrenome" {...register("lastName")}  errorMessage={errors.lastName?.message} />
    </div>
    <div className="gap-x-2">
     <TextInput placeholder="Email" Labelname="E-mail" {...register("email")}  errorMessage={errors.email?.message} />
     <TextInput placeholder="Telefone" Labelname="Telefone" cnInput="w-44" {...register("phone")}  errorMessage={errors.phone?.message}/>
    </div>
    <Button className="bg-slate-600 uppercase float-right mt-10 ">Avançar</Button>
   
   </form>
  </section>
 );
}
