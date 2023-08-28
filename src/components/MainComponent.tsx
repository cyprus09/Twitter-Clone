import React from 'react'
import { AiOutlineRetweet } from 'react-icons/ai'
import { BiLike, BiShare } from 'react-icons/bi'
import { BsChat, BsDot, BsThreeDots } from 'react-icons/bs'
import { IoIosCheckmarkCircleOutline, IoMdStats } from 'react-icons/io'
import ComposeTweet from './server-components/compose-tweet'


const getTweets = async () => {
    
} 
const MainComponent = () => {


    
  return (
        <main className='flex w-full xl:w-[50%] h-full min-h-screen flex-col border-l-[0.5px] border-r-[0.5px] border-gray-400'>
            <h1 className='text-xl font-bold p-4 backdrop-blur bg-black/20 sticky top-0 z-10'>Home</h1>
            <div className='border-t-[0.5px] border-b-[0.5px] px-4 flex items-stretch py-6 space-x-2 border-gray-400 relative z-0'>
                <div className='w-11 h-11 bg-white rounded-full flex-none my-2 mx-1'></div>
                <ComposeTweet />
            </div>
            <div className='flex flex-col w-full'>
                {
                   Array.from({length:5}).map((_,i)=>(
                    <div key={i} className='py-4 px-6 border-b-[0.5px] flex space-x-3 border-gray-400'>
                        <div>
                            <div className='w-10 h-10 bg-slate-200 rounded-full'/>
                        </div>
                        <div className='flex flex-col w-full space-y-2'>
                            <div className='flex items-center my-1 w-full justify-between'>
                                <div className='flex items-center space-x-1 w-full'>
                                <div className='font-bold'>MayankPallai</div>
                                <div className='text-gray-500'>@kadduuu</div>
                                <div className='text-gray-500'>
                                    <BsDot/>
                                </div>
                                <div className='text-gray-500'>1 hour ago</div>
                                </div>
                                <div className='hover:bg-white/50 p-1 cursor-pointer rounded-full'>
                                    <BsThreeDots/>
                                </div>
                            </div>
                            <div className='text-white text-l space-y-1'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis eveniet error, quas ratione beatae voluptas. Harum sint quibusdam autem neque, quod iure unde dolorum expedita itaque. Nulla commodi beatae iusto.
                            </div>
                            <div className='bg-slate-400 aspect-square w-full h-80 rounded-xl'></div>
                            <div className='flex items-center space-x-15 w-full justify-around'>
                                <div className='rounded-full hover:bg-white/30 p-1 cursor-pointer transition duration-150'>
                                    <BsChat/>
                                </div>
                                <div className='rounded-full hover:bg-white/30 p-1 cursor-pointer'>
                                    <AiOutlineRetweet/>
                                </div>
                                <div className='rounded-full hover:bg-white/30 p-1 cursor-pointer'>
                                    <BiLike/>
                                </div>
                                <div className='rounded-full hover:bg-white/30 p-1 cursor-pointer'>
                                   <IoMdStats/>
                                </div>
                                <div className='rounded-full hover:bg-white/30 p-1 cursor-pointer'>
                                    <BiShare/>
                                </div>
                            </div>
                        </div>
                    </div>
                   ))
                }
            </div>
        </main>
  )
}

export default MainComponent