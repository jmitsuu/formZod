
import axios from "axios"
import uniqid from 'uniqid';
import {useEffect} from "react";
import { TypePayment } from "../payment.interface";
import { usePayments } from "@/global/global.payments";
import { toast } from "@/hooks/use-toast";

const url = "http://localhost:3000/payments"

export function PaymentModel(){
  const {setFormModal, setPayments} = usePayments();

  const formOnSubmit = async (data:TypePayment) =>{
      try {
        const response = await axios.post(url,
          {
            ...data,
            id:uniqid()
          })
          setFormModal(false)
          setPayments((state) => [...state, response.data]);
          toast({
            variant:"success",
            title:`Pagamento cadastrado`,
            description: `Verifique sua lista logo abaixo.`,
           
          })
      } catch (error) {
        console.log(error)
      }
    }
    const deletePayment = async (id:string) =>{
      try {
      const response =   await axios.delete(`${url}/${id}`);
      if(response.data){
       const {data} =   await axios.get(`${url}`);
       setPayments(data)
      }
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      const fetchApiPayments = async () => {
       try {
        const { data } = await axios.get(`${url}`);
        setPayments(data);
       } catch (error) {
        console.log(error);
       }
      };
      fetchApiPayments();
   
     }, [setPayments]);
  return {formOnSubmit, deletePayment}  
}

