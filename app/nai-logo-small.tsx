import { Monoton } from "next/font/google";

const monoton = Monoton({
    weight: '400',
    subsets: ['latin'],
  })


export default function NaiLogoSmall(){

return (
    <>
        <h1 className={ `${monoton.className} text-5xl flex lg:hidden drop-shadow-xl`} >N</h1>
    </>
    )    
}
