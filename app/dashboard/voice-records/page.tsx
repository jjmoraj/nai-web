'use client'
import { useState } from "react";

import VoicePlayerComponent from "@/app/dashboard/voice-records/voice-player"

const voiceRecordsMock = [
    {
        name:'voice-record-30-04.mp3',
        file:'/voice-records/C. Tangana_ Tiny Desk (Home) Concert.mp3',
        date:'30-04-2024'
    },
    {
        name:'voice-record-1-05.mp3',
        file:'/voice-records/Residente - René (Official Video).mp3',
        date:'01-05-2024'
    },
    {
        name:'voice-record-2-05.mp3',
        file:'/voice-records/Slow Dancing In A Burning Room (Live in L.A.).mp3',
        date:'02-05-2024'
    },
    {
        name: "Beaver Creek",
        file: "https://mp3.chillhop.com/serve.php/?mp3=10075",
        date:'30-04-2024'
      },
      {
        name: "Daylight",
        file: "https://mp3.chillhop.com/serve.php/?mp3=9272",
        date:'30-04-2024'
      },
      {
        name: "Keep Going",
        file: "https://mp3.chillhop.com/serve.php/?mp3=9222",
        date:'30-04-2024'
      },
      {
        name: "Nightfall",
        file: "https://mp3.chillhop.com/serve.php/?mp3=9148",
        date:'30-04-2024'
      },
      {
        name: "Reflection",
        file: "https://mp3.chillhop.com/serve.php/?mp3=9228",
        date:'30-04-2024'


      },
      {
        name: "Under the City Stars",
        file: "https://mp3.chillhop.com/serve.php/?mp3=10074",
        date:'30-04-2024'

      },

]

export default function VoiceRecordsPage(){

    const [audioPlaying,setAudioPlaying] = useState('')

    return (
        <>
        <div className="w-full flex flex-col align-center h-full max-w-[1500px]">
          <div className="flex flex-row justify-center">
            <div className="flex flex-row justify-between w-10/12 lg:w-8/12 md:max-w-8/12">
                <div className="flex flex-row items-center ">
                        <p className="text-xl text-gray-50 font-semibold mr-3">Voice Records</p>
                </div>
                <div className="flex flex-row items-center ">
                        <p className="text-xl text-gray-50 font-semibold mr-3">Active</p>
                        <label className="switch">
                            <input type="checkbox"></input>
                            <span className="slider round"></span>
                        </label>
                </div>
                </div>
                
            </div>
            <div className="flex flex-row justify-center">
              <div className="flex flex-row justify-between pt-4 w-10/12 lg:w-8/12 md:max-w-8/12">
                <p>Aviable Record {`${voiceRecordsMock.length}/20`}</p>
              </div>
            </div>

            <div className="flex flex-col static">
                {
                    voiceRecordsMock.map((voiceRecord,index)=>{
                        return (
                                <VoicePlayerComponent key={index}  voiceRecord={voiceRecord} audioPlaying={audioPlaying} setAudioPlaying={setAudioPlaying}/>           
                        )
                    })
                }
            </div>
        </div>
        </>
    )
}