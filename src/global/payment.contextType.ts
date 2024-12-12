
import { TypePayment } from "@/pages/payments/payment.interface";
import { ReactNode } from "react";


export interface PaymentsContextType {
  payments: TypePayment[];
  formModal: boolean;
  setPayments: React.Dispatch<React.SetStateAction<TypePayment[]>>;
  setFormModal: React.Dispatch<React.SetStateAction<boolean>>;
 }
 export interface TypePaymentsProvider {
  children: ReactNode;
 }