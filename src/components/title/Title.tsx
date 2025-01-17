interface typeTitle{
  titleDesc:string
}
export function Title({titleDesc}:typeTitle) {
 return (
  <h1 className="text-6xl pb-20 text-slate-700 uppercase underline">
  {titleDesc}
  </h1>
 );
}
