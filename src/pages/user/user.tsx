import { Title } from "@/components/title/Title";
import { Container } from "@/layouts/Container";
import { Outlet } from "react-router-dom";

export function User() {
 return (
  <div>
   <Container>
    <Title titleDesc="Formulário de usuário" />
    <div className="flex flex-col  w-[980px] min-h-[400px] border ">
     <div className="text-xs flex gap-x-2">
      <h1 className="text-blue-600">Etapa 1</h1>
      <h1>Etapa 2</h1>
      <h1>Etapa 3</h1>
     </div>
     <Outlet />
    </div>
   </Container>
  </div>
 );
}
