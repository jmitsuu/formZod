import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function PostsServices(){
  const{isPending, data:posts, error, refetch} = useQuery({
    queryKey:['posts'],
    queryFn: async()=>
     {
      const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts") 
      return data;
     }
  })
  return {posts, isPending, error , refetch}
}