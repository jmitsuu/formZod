import { usePayments } from "@/global/global.payments";
import axios from "axios";
import { useParams } from "react-router-dom"
import { TypePayment } from "../payment.interface";
import { useToast } from "@/hooks/use-toast";
const url = "http://localhost:3000/payments"
export function FindParamsEdit(){
  const {id} = useParams();
  const {payments, setPayments} = usePayments();
  const { toast } = useToast()

  const findIdPayment  = payments.find((payment) => payment.id === id)
  const updatePayment = async ( data:TypePayment) =>{
    try {
    const response =   await axios.put(`${url}/${id}`,data);
    if(response.data){
     const {data} =   await axios.get(`${url}`);
     setPayments(data)
     toast({
      variant:"success",
      title:`Tudo certo!`,
      description: `Seu cadastro foi atualizado.`,
     
    })
     setTimeout(() => {
      
      window.location.href = "/"
   

     }, 2000);
    }
    } catch (error) {
      console.log(error)
    }
  }
  return {findIdPayment, updatePayment}
}