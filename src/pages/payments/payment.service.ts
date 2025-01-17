import axios from "axios";
import { TypePayment } from "./payment.interface";
import uniqid from 'uniqid';

const url = "http://localhost:3000/payments"
export async function getPayments(){
   const {data} = await axios.get(url) 
return data;
}

export  async function createPaymentApi (data: TypePayment): Promise<TypePayment>{
    return  await axios.post(url, {...data, id:uniqid()})
}
export const deletePaymentById = async(id:string) =>{
  const {data:deletePayment} = await axios.delete(`${url}/${id}`)
  return deletePayment
}