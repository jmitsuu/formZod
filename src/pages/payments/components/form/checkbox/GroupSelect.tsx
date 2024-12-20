import {
 Select,
 SelectContent,
 SelectItem,
 SelectTrigger,
 SelectValue,
} from "@/components/ui/select";
import { checkList } from "./group.model";

export function GroupSelect() {
 return (
  <div>
   <Select  >
    <SelectTrigger className="w-[190px]">
     <SelectValue placeholder="Selecione o pagamento"  />
    </SelectTrigger>
    <SelectContent>
     {checkList.map((select) => {
      return (
       <SelectItem key={select.id} value={select.id}>
        {select.checkTitle}
       </SelectItem>
      );
     })}
    </SelectContent>
   </Select>
  </div>
 );
}
