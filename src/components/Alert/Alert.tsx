import {
 AlertDialog,
 AlertDialogAction,
 AlertDialogCancel,
 AlertDialogContent,
 AlertDialogDescription,
 AlertDialogFooter,
 AlertDialogHeader,
 AlertDialogTitle,
 AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
interface TypeAlert {
 btnIcon: JSX.Element;
 titleAlert: string;
 alertDescrip: string;
 alertFuncion: React.MouseEventHandler<HTMLButtonElement> | undefined;
}
export function Alert({
 btnIcon,
 alertDescrip,
 titleAlert,
 alertFuncion,
}: TypeAlert) {
 return (
  <AlertDialog>
   <AlertDialogTrigger>{btnIcon}</AlertDialogTrigger>
   <AlertDialogContent>
    <AlertDialogHeader>
     <AlertDialogTitle>{titleAlert}</AlertDialogTitle>
     <AlertDialogDescription>{alertDescrip}</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
     <AlertDialogCancel className="bg-red-500 hover:bg-red-300">
      Cancelar
     </AlertDialogCancel>
     <AlertDialogAction
      className="bg-green-500 hover:bg-green-300"
      onClick={alertFuncion}
     >
      Continuar
     </AlertDialogAction>
    </AlertDialogFooter>
   </AlertDialogContent>
  </AlertDialog>
 );
}
