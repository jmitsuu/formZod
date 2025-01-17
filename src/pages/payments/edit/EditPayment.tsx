import { FindParamsEdit } from "./editpayment.model";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Container } from "@/layouts/Container";
import { Title } from "@/components/title/Title";

export function EditPayment() {
 const { updatePayment, editPayment } = FindParamsEdit();
 return (
  <Container>
   <Title titleDesc="Editar Pagamento" />
   <h1 className="text-xl mb-10">Id {editPayment?.id}</h1>
   <FormPayment OnSubmit={updatePayment} btnTextForm="Atualizar pagamento" />
   <Link to="/">
    <Button className="mt-5 ">Voltar</Button>
   </Link>
  </Container>
 );
}
