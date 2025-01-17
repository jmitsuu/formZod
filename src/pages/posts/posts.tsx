import { Title } from "@/components/title/Title";
import {
 Table,
 TableBody,
 TableCell,
 TableHead,
 TableHeader,
 TableCaption,
 TableRow,
} from "@/components/ui/table";
import { Container } from "@/layouts/Container";
import { PostsServices } from "./posts.service";
import { TypePosts } from "./posts.interfaces";

export function Posts() {
 const { posts, isPending } = PostsServices();
 return (
  <Container>
   <div>{isPending ? "carregando" : ""}</div>
   <Title titleDesc="Posts" />
   <Table className="">
    <TableHeader>
     <TableRow>
      <TableHead className="w-[100px]">Id</TableHead>
      <TableHead>Titulo</TableHead>
      <TableHead>Descrição</TableHead>
      <TableHead className="text-right"># #</TableHead>
     </TableRow>
    </TableHeader>
    <TableBody>
     {posts?.map((post: TypePosts) => {
      return (
       <TableRow>
        <TableCell className="text-slate-500">{post.id}</TableCell>
        <TableCell className="">{post.title}</TableCell>
        <TableCell className="">{post.body}</TableCell>
        
       </TableRow>
      );
     })}
    </TableBody>

    <TableCaption className="flex">''</TableCaption>
   </Table>
  </Container>
 );
}
