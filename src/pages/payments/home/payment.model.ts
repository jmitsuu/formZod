
import axios from "axios"
import uniqid from 'uniqid';
import { TypePayment } from "../payment.interface";
import { usePayments } from "@/global/global.payments";
import { toast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { PaymentServices } from "../payment.service";

const url = "http://localhost:3000/payments"

export function PaymentModel(){
  const {setFormModal} = usePayments();
  const {refetch} = PaymentServices();

  const postNewPayment = async (data:TypePayment) =>{
 return await  axios.post(url, data)
  }
  const postDeletePayment = async(id:string) =>{
    return await axios.delete(`${url}/${id}`)
  }

  const {mutateAsync:createProductFn} = useMutation({
    mutationFn: postNewPayment,
    onSuccess() {
          refetch()     
          toast({
            variant:"success",
            title:`Pagamento cadastrado`,
            description: `Verifique sua lista logo abaixo.`,
           
          })
          setFormModal(false)
    },
  })
  const {mutateAsync:deletePaymentId} = useMutation({
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

  const formOnSubmit = async (data:TypePayment) =>{
    try {
      await createProductFn({
        ...data,
        id:uniqid(),
      })
     
    } catch (error) {
      console.log(error)
    }
  }
  const deletePayment = async(id:string)=>{
    try {
      await deletePaymentId(id)
    } catch (error) {
      console.log(error)
    }
  }


  return {formOnSubmit, deletePayment}  
}

