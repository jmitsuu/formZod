import axios from "axios";
import { useParams } from "react-router-dom"
import { TypePayment } from "../payment.interface";
import { useToast } from "@/hooks/use-toast";
import { PaymentServices } from "../payment.service";
import { useMutation } from "@tanstack/react-query";
const url = "http://localhost:3000/payments"
export function FindParamsEdit(){
  const {id} = useParams();
  const { toast } = useToast();
  const {payments} = PaymentServices()
  const editPayment = payments?.find((payment:TypePayment)=> payment.id === id)

  const updatePaymentById = async(data:TypePayment) =>{
   return await axios.put(`${url}/${id}`, data)
  }
  const {mutateAsync:updateDataPayment} = useMutation({
    mutationFn: updatePaymentById,
    onSuccess() {  
          toast({
            variant:"success",
            title:`Tudo certo!`,
            description: `Seu cadastro foi atualizado.`,
           
          })
     setTimeout(() => {
      window.location.href = "/"
     }, 1200);
    },
  })
  const updatePayment = async (data:TypePayment) =>{
    try {
      await updateDataPayment(data)
     
    } catch (error) {
      console.log(error)
    }
  }
  return {updatePayment ,editPayment}
}