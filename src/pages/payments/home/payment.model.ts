
import {useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { cacheKey } from "@/cache/payments/cache-keys";
import { createPaymentApi, deletePaymentById, getPayments } from "../payment.service";
import { toast } from "sonner"
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "../payment.schema";
import { TypePayment } from "../payment.interface";

export function useModelPayment(){
  const queryClient = useQueryClient()
  const [modalControl, setModalControl] = useState(false)
  
  function handleResponseMessage(message:string){
    setModalControl(false)
    toast.success(message)
     queryClient.invalidateQueries({
       queryKey:[cacheKey.payments.list]
     })
   }
  const form = useForm<TypePayment>({
    resolver:zodResolver(formSchema),
    defaultValues:{
      id:"",
      product:"teste",
      status:"Pago",
      amount:0.00
  }
 
  })
  const{isPending, data:payments} = useQuery({
      queryKey:[cacheKey.payments.list],
      queryFn:getPayments
  })

  const {mutate:createPayment}= useMutation({
    mutationKey:[cacheKey.payments.create],
    mutationFn: createPaymentApi,
    onSuccess(){handleResponseMessage("Pagamento criado com Sucesso")},
  
  })
  const onSubmit: SubmitHandler<TypePayment> = (data) => {
    createPayment(data);
  };
  const {mutateAsync:deletePayment} = useMutation({
    mutationKey:[cacheKey.payments.delete],
    mutationFn: deletePaymentById,
    onSuccess(){handleResponseMessage("Pagamento deletado com Sucesso")}
  })

  return {
    data:{form,payments},
    actions:{onSubmit, deletePayment, setModalControl},
    state:{modalControl, isPending}
  }  
}

