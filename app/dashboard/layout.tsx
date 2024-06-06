'use client'
import SideNav from './sidenav';
import Image from 'next/image';
import { Bars3Icon, SunIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { PowerIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import NaiLogoSmall from '@/app/nai-logo-small'
import NaiLogo from '@/app/nai-logo';
import { usePathname } from 'next/navigation';


export default function Layout({
    children,
  }: {
    children: React.ReactNode;
  }){

    const pathname = usePathname();

    const [isVisibleUserDropDown,setIsVisibleUserDropDown] = useState(false)
    const [isMobileSideNavVisible,setIsMobileSideNavVisible] = useState(false)

    return(
        <>
        <header className='bg-gray-800 h-16  w-full flex flex-row p-2 items-center justify-between '>
            <button className='visible w-1/3 md:hidden' onClick={()=>setIsMobileSideNavVisible(!isMobileSideNavVisible)}>{isMobileSideNavVisible ? <XMarkIcon width={30}></XMarkIcon> : <Bars3Icon width={30}></Bars3Icon>}</button>
            <section className='hidden md:items-center md:flex md:flex-row md:justify-between md:content-center '>
                <div className='w-[63px] lg:w-[159px]'>
                    <div className=''>
                        <NaiLogo/>
                        <NaiLogoSmall/>
                    </div>
                </div>
                <div className='hidden md:flex md:w-fit md:text-nowrap md:h-full items-center  '>
                    
                    <ul className='flex flex-row items-center' >
                    <li key={1} className='text-gray-50 bg-gray-700 p-2 rounded-md shadow-xl'>My server</li>

                    <li key={2} className='text-2xl text-gray-50 '>&nbsp;{'/'}&nbsp;</li>
                        {
                            pathname.slice(1).split('/').map((route,index)=>{
                                return (
                                    <>  
                                            <li key={index+3} className='text-gray-50 p-2 bg-gray-700 rounded-md shadow-xl'>{ route.charAt(0).toUpperCase() + route.slice(1).replace("-"," ")}</li>
                                            {
                                                   index+1 === pathname.slice(1).split('/').length   ? null :
                                            
                                                <li  key={index+1*10} className='text-2xl text-gray-50 '>&nbsp;{'/'}&nbsp;</li>
                                            }
                                        
                                    </>
                                )
                            })
                        }   
                    </ul>
                </div>
            </section>
            <section className='visible self-center w-1/3 flex justify-center md:hidden lg:hidden '>
                       {/* <NaiLogo /> */}
                        <NaiLogoSmall/>
                   {/* <Image
                        src={"/nai_logo_completo.png"}
                        alt={'Logo NAI'}
                        width={70}
                        height={50}
                        className='hidden xsm:flex lg:hidden drop-shadow-xl'
                    ></Image>
                     <Image
                        src={"/nai_logo_pequeño.png"}
                        alt={'Logo NAI'}
                        width={37}
                        height={37}
                        className='block xsm:hidden  sm:hidden lg:hidden drop-shadow-xl'
                ></Image>*/}
            </section>
            <div className=' flex flex-row h-full items-center w-1/3  justify-end md:w-fit ' onClick={()=>setIsVisibleUserDropDown(!isVisibleUserDropDown)}>

                <div className='text-neutral-50 p-2 bg-gray-700 rounded-md md:mr-3 cursor-pointer ' >@moraj01</div>
                <div className={`z-10 transition-all ease-in-out duration-1000 transform ${isVisibleUserDropDown ? 'visible' : 'hidden'}
                absolute right-2 top-16 text-neutral-200 bg-gray-600 rounded-lg shadow-xl
                `}>
                    <ul className="p-2">
                    <li key={1}>
                        <button className="group text-neutral-50 flex grow items-center justify-center gap-2 p-2">
                            <SunIcon className='w-4 transition ease-in-out delay-150  motion-reduce:transition-none  duration-1000  group-hover:rotate-180'></SunIcon>
                            <p  className="text-nowrap group-hover:transform-none" >Light Mode</p>
                        </button>
                    </li>
                    <li key={2}>
                        <button className='text-neutral-50 flex grow items-center justify-center gap-2 2 p-2 transition ease-in-out delay-150  motion-reduce:transition-none  duration-300  hover:text-red-600'>
                            <PowerIcon className="w-4" />
                            <p className="text-nowrap">Sign Out</p>
                        </button>
                    </li>
                    </ul>
                </div>

                
                <Image
                src="/darth.jpg"

                width={50}
                height={35}
                className="hidden md:flex md:object-cover md:rounded-full md:h-full md:shadow-xl"
                alt="Profile pic "
                >

                </Image>
            </div>
        </header>

        <div className="flex flex-row md:flex-row h-[calc(100vh-64px)]  ">
            <div className={`bg-gray-50/10 absolute z-10 h-screen w-full overflow-x-auto no-scrollbar shadow-3xl  md:relative md:block md:w-fit md:flex-none md:bg-gray-800  ${isMobileSideNavVisible ? 'flex ' : 'hidden'}
                `}>
                    <SideNav />
            </div>
            <div className="flex p-2 xsm:p-4  overflow-y-auto md:p-12 md:rounded-md w-full  justify-center border-l-0 border-r-0 border-y-[1px] md:border-[1px] md:border-r-0 md:rounded-r-none no-scrollbar">{children}</div>
      </div>
      </>
    )
}