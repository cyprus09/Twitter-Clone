import React from 'react'
import { BsSearch } from 'react-icons/bs'

const RightComponent = () => {
  return (
    <section className='mt-2 w-[35%] sticky top-2 overflow-scroll lg:flex flex-col items-stretch h-screen px-6 hidden'>
          <div>
            <div className='relative w-full h-full group'>
              <input id="searchBox" type="text" placeholder='Search Twitter' className='outline-none peer focus:border-1 bg-neutral-900/90 w-full h-full rounded-xl py-4 pl-14 pr-4'/>
              <label htmlFor="searchBox" className='absolute top-0 left-0 h-full flex items-center justify-center p-4 text-gray-500 peer-focus:text-twitterColor'> 
                <BsSearch className="w-5 h-5"/>
              </label>
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-900 p-3 my-4'>
            <h3 className='font-bold text-xl my-2 p-2'>What's happening</h3>
            <div>
            {Array.from({length:5}).map((_, i)=>(
                  <div key={i} className='hover:bg-white/10 p-3 last:rounded-b-xl transition duration-150'>
                    <div className='font-bold text-lg'>#trending {i + 1}</div>
                    <div className='text-xs text-neutral-500'>35.8k</div>  
                  </div>
                ))}
            </div>
          </div>
          <div className='flex flex-col rounded-xl bg-neutral-900 p-3 my-3'>
            <h3 className='font-bold text-xl my-2 p-2'>Who to follow</h3>
            <div>
            {Array.from({length:5}).map((_, i)=>(
                  <div key={i} className='hover:bg-white/10 p-3 flex justify-between items-center last:rounded-b-xl transition duration-150'>
                    <div className='flex items-center space-x-2'>
                      <div className='w-10 h-10 bg-neutral-700 rounded-full flex-none'></div>
                      <div className='flex flex-col'>
                      <div className='font-bold text-white'>OtherUser</div>
                      <div className='text-gray-500 text-sm'>@otheruser321</div>  
                      </div>
                    </div>
                    <div className='w-full'>
                      <button className='rounded-full px-6 mx-5 py-2 bg-white text-neutral-950'>
                        Follow
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div></div>
        </section>
  )
}

export default RightComponent