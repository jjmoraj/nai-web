import Image from "next/image";

export default function Page(){
    return (
            <>
            <div className="w-full flex flex-col align-center h-full max-w-[1500px]">
                <div className="flex flex-row items-center w-full justify-end">
                    <p className="text-xl text-gray-50 font-semibold mr-3">Active</p>
                    <label className="switch">
                        <input type="checkbox"></input>
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="w-full md:h-96 rounded-md bg-gray-800 mt-5 shadow-xl">
                <div className="flex flex-col p-4 h-full w-full items-center justify-evenly sm:flex-row md:p-6 ">
                    <div className="flex flex-col justify-evenly h-96">
                        <div className="bg-gray-800 h-56 w-56 sm:h-40 sm:w-40 lg:h-64 lg:w-64 rounded-md flex items-center justify-center">
                        <Image
                            src={"/nai_logo_completo.png"}
                            alt={'Logo NAI'}
                            width={200}
                            height={200}
                            className='' 
                        ></Image>
                          
                        </div>
                        <button className="text-gray-800  bg-gray-50 rounded-md h-8 mt-5 sm:mt-0 ">Change Image</button>
                    </div>
                    <div className="flex p-4 flex-col justify-evenly w-80 xsm:w-full xsm:h-96  sm:w-96 md:w-2/3  md:ml-3" >
                        <label className="text-gray-50 font-md flex flex-col">
                          Name
                            <input type='text' placeholder='Bot Name' className="bg-gray-50 text-gray-800 border-none rounded-md focus:ring-0 focus:outline-0 focus:border-nai-2"></input>
                        </label>
                        <label className="text-gray-50 font-md flex flex-col ">
                            Description 
                            <textarea  placeholder='Bot Description' maxLength={700} className="resize-none bg-gray-50 text-gray-800 rounded-md h-40 text-start border-none focus:ring-0 focus:outline-0"></textarea>
                        </label>
                    </div>
                </div>
                </div>
            </div>
            </>
    )
}