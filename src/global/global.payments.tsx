import { useState, createContext, useContext } from "react";
import { PaymentsContextType, TypePaymentsProvider } from "./payment.contextType";
import { TypePayment } from "@/pages/payments/payment.interface";




const PaymentsContext = createContext<PaymentsContextType | undefined>(undefined
);

export function PaymentsProvider({ children }: TypePaymentsProvider) {
 const [payments, setPayments] = useState<TypePayment[]>([]);
 const [formModal, setFormModal] = useState(false);

 return (
  <PaymentsContext.Provider
   value={{ payments, setPayments, formModal, setFormModal }}
  >
   {children}
  </PaymentsContext.Provider>
 );
}
export const usePayments = (): PaymentsContextType => {
 const context = useContext(PaymentsContext);
 if (!context) {
  throw new Error("Nenhum contexto localizado.");
 }
 return context;
};
