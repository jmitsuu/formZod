import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function PaymentServices(){
  const{isPending, data:payments, error, refetch} = useQuery({
    queryKey:['dataPayments'],
    queryFn: async()=>
     {
      const {data} = await axios.get("http://localhost:3000/payments") 
      return data;
     }
  })
  return {payments, isPending, error , refetch}
}