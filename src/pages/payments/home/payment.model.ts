
import axios from "axios"
import uniqid from 'uniqid';
import { TypePayment } from "../payment.interface";
import { usePayments } from "@/global/global.payments";
import { toast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PaymentServices } from "../payment.service";

const url = "http://localhost:3000/payments"

export function PaymentModel(){
  const {setFormModal} = usePayments();
  const {refetch} = PaymentServices();
  const queryClient = useQueryClient()

  const postNewPayment = async (data:TypePayment) =>{
  const {data:newPostPayment} = await axios.post(url, {...data, id:uniqid()})
    return newPostPayment
}
  const postDeletePayment = async(id:string) =>{
    const {data:deletePayment} = await axios.delete(`${url}/${id}`)
    return deletePayment
  }

  const {mutateAsync:formOnSubmit} = useMutation({
    mutationFn: postNewPayment,
    onSuccess(postNewPayment) {    
    
          queryClient.setQueryData(['dataPayments'],
            (oldPayments: TypePayment[]) =>[
              ...oldPayments,
              postNewPayment
            ]
          )
          toast({
            variant:"success",
            title:`Pagamento cadastrado`,
            description: `Verifique sua lista logo abaixo.`,
           
          })
          setFormModal(false)
    },
  })
  const {mutateAsync:deletePayment} = useMutation({
    mutationFn: postDeletePayment,
    onSuccess() {
          refetch()
          toast({
            variant:"destructive",
            title:`Pagamento Deletado`,
            description: ``,
           
          })

    },
  })

  return {formOnSubmit, deletePayment}  
}

