import { Monoton } from "next/font/google";

const monoton = Monoton({
    weight: '400',
    subsets: ['latin'],
  })

export default function NaiLogo(){

return (
    <>
        <h1 className={ `${monoton.className} text-5xl  hidden lg:block drop-shadow-xl pt-1 }`} >NAI</h1>
    </>
    )    
}