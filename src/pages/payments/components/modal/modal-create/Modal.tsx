import {
 Dialog,
 DialogContent,
 DialogDescription,
 DialogHeader,
 DialogTitle,
 DialogTrigger,
} from "@/components/ui/dialog";
import {
 Form,
 FormControl,
 FormField,
 FormItem,
 FormLabel,
 FormMessage,
} from "@/components/ui/form";
import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { Controller } from "react-hook-form";
import { useModelPayment } from "../../../home/payment.model";
import { checkList } from "../../checkbox/group.model";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Modal() {
 const { actions, data, state } = useModelPayment();
 return (
  <Dialog open={state.modalControl} onOpenChange={actions.setModalControl}>
   <DialogTrigger className="absolute right-0 bg-blue-800/90 hover:bg-blue-600 py-2 text-sm px-2 rounded-lg text-slate-200">
    Novo pagamento
   </DialogTrigger>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Novo Cadastro</DialogTitle>
     <DialogDescription></DialogDescription>
    </DialogHeader>
    <Form {...data.form}>
     <form
      onSubmit={data.form.handleSubmit(actions.onSubmit)}
      className="space-y-8"
     >
      <Controller
       name="status"
       control={data.form.control}
       render={({ field }) => (
        <Select
         {...field}
         value={field.value || ""}
         onValueChange={(value) => field.onChange(value)}
        >
         <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Status" />
         </SelectTrigger>
         <SelectContent>
          {checkList.map((check) => {
           return (
            <SelectItem key={check.id} value={check.checkTitle}>
             {check.checkTitle}
            </SelectItem>
           );
          })}
         </SelectContent>
        </Select>
       )}
      />
      <FormField
       control={data.form.control}
       name="product"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Produto</FormLabel>
         <FormControl>
          <Input placeholder="Produto" {...field} />
         </FormControl>

         <FormMessage />
        </FormItem>
       )}
      />
      <FormField
       control={data.form.control}
       name="amount"
       render={({ field }) => (
        <FormItem>
         <FormLabel>Valor</FormLabel>
         <FormControl>
          <Input placeholder="shadcn" {...field} className="w-44" />
         </FormControl>

         <FormMessage />
        </FormItem>
       )}
      />
      <Button type="submit">Cadastrar</Button>
     </form>
    </Form>
   </DialogContent>
  </Dialog>
 );
}
