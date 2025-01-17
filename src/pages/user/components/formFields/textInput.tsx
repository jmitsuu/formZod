import { Input } from "@/components/ui/input";
interface TypeTextInput {
 Labelname?: string;
 cnDiv?: string;
 placeholder: string;
 cnInput?: string;
 errorMessage?:string
}
export function TextInput({
 placeholder,
 Labelname,
 errorMessage,
 cnInput,
 ...props
}: TypeTextInput) {
 return (
  <>
   <div className="w-full">
    <label>{Labelname}</label>
    <Input placeholder={placeholder} className={`${cnInput}`} {...props} />
    <p className="text-red-500 text-xs py-2">{errorMessage}</p>
   </div>
  </>
 );
}
