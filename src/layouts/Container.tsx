interface TypeContainer {
 children: React.ReactNode;
}
export function Container({ children }: TypeContainer) {
 return (
  <section className="w-full h-full flex flex-col ">
   <div className=" mt-20 px-20">{children}</div>
  </section>
 );
}
