'use client'
import { useState,useEffect,useRef } from "react";
import useSound from "use-sound"; 


import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { StopCircleIcon } from "@heroicons/react/24/outline";
import { DocumentTextIcon,TrashIcon,ArrowDownTrayIcon } from "@heroicons/react/24/outline";

export default function VoicePlayerComponent({voiceRecord,audioPlaying,setAudioPlaying}){




const [audio, setAudio] = useState<HTMLAudioElement>();
const [duration, setDuration] = useState(0);


const [currTime, setCurrTime] = useState({
    min: '--',
    sec: '--',
  }); 
const [songTime, setSongTime] = useState({
    min: '--',
    sec: '--',
  }); 

const [isPlaying, setIsPlaying] = useState(false);

const [seconds, setSeconds] = useState(0);

const play=()=>{
    audio?.play()
}
const pause=()=>{
    audio?.pause()
}

useEffect(() => {
    const tempAudio = new Audio(voiceRecord.file)
    tempAudio.preload = "auto"
    tempAudio.load()
    setAudio(tempAudio)
    console.log(tempAudio.duration)
    setDuration(tempAudio.duration)
}, []);

useEffect(() => {
    let sec = (duration / 1000).toString();
    let min = Math.floor(sec / 60).toString();
    let secRemain = Math.floor(sec % 60).toString();
    min.length == 1 ? min = "0"+min : min = min 
    sec.length == 1 ? sec = "0"+sec : sec = sec 
    secRemain.length == 1 ? secRemain = "0"+secRemain : secRemain = secRemain 
    setSongTime({
      min: min,
      sec: secRemain
    })
}, [duration]);


useEffect(() => {
    const interval = setInterval(() => {
        if (audio) {
            setSeconds(audio.currentTime)
            let min = Math.floor(audio.currentTime / 60).toString();
            let sec = Math.floor(audio.currentTime % 60).toString();
            min.length === 1 ? min = "0" + min : min = min;
            sec.length === 1 ? sec = "0" + sec : sec = sec;
            setCurrTime({
                min,
                sec,
            });
        }
    }, 1000);
    return () => clearInterval(interval);
}, [duration]);


useEffect(() => {
    if(audioPlaying!==voiceRecord.file){
        pause()
        setIsPlaying(false)
    }
}, [audioPlaying]);



    return (
        <>

        <div className={`w-full overflow-visible pt-3 pb-3 
            ${
                isPlaying ? 'sticky top-[-50px] ' : 'static'
            } 
        `}>
            <div className={`
                    rounded-md flex w-10/12 lg:w-8/12 md:max-w-8/12  bg-gray-800 shadow-xl rounded-lg overflow-hidden mx-auto overflow-visible`
            }>
                <div className="flex flex-col w-full">
                    <div className="flex flex-col xsm:flex-row p-5 border-b">
                        <div className="flex flex-col px-2 w-full">

                            {
                                    isPlaying ? 
                                    <span className="text-xs text-gray-50 uppercase font-medium ">
                                        now playing
                                    </span> :
                                    
                                    <span className="text-xs text-gray-50 uppercase font-medium ">
                                        &nbsp;
                                    </span> 
                                }   
                            <span className="text-sm text-gray-50 font-semibold pt-1">
                                {voiceRecord.name}   
                            </span>
                            <span className="text-xs text-gray-50 uppercase font-medium ">
                                {voiceRecord.date}   
                            </span>
                        </div>
                        <div className="flex flex-row p-2 md:p-5 justify-end ">
                            <button   className="group/item relative  ml-4  "><DocumentTextIcon className='w-6 group-hover/item:scale-125  transition ease-in-out delay-50  motion-reduce:transition-none'></DocumentTextIcon>
                                <span className={`hidden  absolute shadow-xl bg-gray-600 rounded-md  text-neutral-50 p-3 text-sm font-normal text-nowrap  h-fit mt-2 group-hover/item:block`}>Transalte to text</span>
                            </button>
                            <button className="group/item  relative ml-4 "><ArrowDownTrayIcon className='w-6 group-hover/item:scale-125  transition ease-in-out delay-50  motion-reduce:transition-none'></ArrowDownTrayIcon>
                                <span className={`hidden absolute shadow-xl bg-gray-600 rounded-md  text-neutral-50 p-3 text-sm font-normal text-nowrap  h-fit mt-2 group-hover/item:block`}>Download</span>
                            </button>
                            <button className="group/item relative ml-4 "><TrashIcon className='w-6 group-hover/item:scale-125  transition ease-in-out delay-50  motion-reduce:transition-none'></TrashIcon >
                                <span className={`hidden absolute shadow-xl bg-red-600 rounded-md  text-neutral-50 p-3 text-sm font-normal text-nowrap h-fit mt-2 group-hover/item:block`}>Delete</span>
                            </button>
                        </div>
                    </div>
                    

                    <div className="flex flex-col sm:flex-row items-center p-5  ">
                        <div className="flex items-center">
                            <div className="flex space-x-3 p-2">
                                <button className="group/item relative rounded-full w-10 h-10 flex items-center justify-center  focus:outline-none overflow-visible"
                                    onClick={()=>{if (isPlaying) {
                                        pause(); 
                                        setIsPlaying(false);
                                      } else {
                                        play(); 
                                        setIsPlaying(true);
                                        setAudioPlaying(voiceRecord.file)
                                      }}}
                                >
                                   {
                                       isPlaying ?
                                       <StopCircleIcon className="w-10 h-10 group-hover/item:scale-125  transition ease-in-out delay-50  motion-reduce:transition-none "></StopCircleIcon>
                                        :
                                        <PlayCircleIcon className="w-10 h-10 group-hover/item:scale-125  transition ease-in-out delay-50  motion-reduce:transition-none "></PlayCircleIcon>
                                    }
                                   { /*<!-- <span className={`hidden  absolute shadow-xl bg-gray-600 rounded-md  text-neutral-50 p-3 text-sm font-normal  w-fit h-fit group-hover/item:block top-[40px]`}>
                                        {
                                            isPlaying ? 'Stop' : 'Play'
                                        }   
                                    </span> */}

                                </button>
        
                            </div>
                        </div>
                        <div className="relative w-full grow ml-2">
                            <input
                                type={"range"}
                                min={0}
                                max={duration / 1000}
                                value={seconds}
                                className='accent-gray-500 h-2 w-full bg-gray-50'
                                onChange={(e) => {
                                    audio.currentTime = parseInt(e.target.value);
                                  }}
                                onMouseDown={()=>{
                                    pause()
                                }}
                                onMouseUp={()=>{
                                    if(isPlaying){
                                        play()
                                    }
                                   
                                }}
                            ></input>                
                        </div>
                        <div className="flex justify-end pt-1 sm:pt-0 sm:w-32 pr-2 text-nowrap">
                            <span className="text-xs text-gray-50 uppercase font-xl pl-2 text-nowrap"> 

                            {            
                                duration ? 
                                `${currTime.min}:${currTime.sec} / ${songTime.min}:${songTime.sec}`
                                :
                                
                                `${currTime.min}:${currTime.sec}` 
                            }                            
                            </span>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    )
}