import React from 'react'
import {BiHomeCircle} from 'react-icons/bi'
import {BsBell, BsBookmarks, BsEnvelope, BsThreeDots} from 'react-icons/bs'
import {HiOutlineHashtag} from 'react-icons/hi'
import {HiEnvelope} from 'react-icons/hi2'
import {AiOutlineUser} from 'react-icons/ai'
import {IoLogoTwitter} from 'react-icons/io'
import Link from 'next/link'

const NAVIGATION_ITEMS = [
    {
      title: 'Twitter',
      icon:IoLogoTwitter
    },
    {
      title:'Home',
      icon:BiHomeCircle
    },
    {
      title:'Explore',
      icon:HiOutlineHashtag
    },
    {
      title:'Notifications',
      icon:BsBell
    },
    {
      title:'Messages',
      icon:BsEnvelope
    },
    {
      title:'Bookmarks',
      icon:BsBookmarks
    },
    {
      title:'Profile',
      icon:AiOutlineUser
    }
  
]

const LeftSidebar = () => {
  return (
    <section className="sticky top-0 w-[23%] lg:flex flex-col items-stretch h-screen px-6 hidden">
    <div className='flex flex-col items-stretch h-full space-y-4 mt-4'>{
      NAVIGATION_ITEMS.map((item)=>(
        <Link className = 'hover:bg-white/20 text-xl flex items-center justify-start w-fit space-x-5 rounded-3xl px-2 py-2 transition duration-150' href={`/$(item.title.toLowerCase()}`} key={item.title}>
          <div>
            <item.icon/>
          </div>
          {item.title !== "Twitter" && <div>{item.title}</div>}
        </Link>
      ))}
      <button className = "w-2xl max-w-[200px] m-2 rounded-full bg-twitterColor p-2 text-xl text-center hover:bg-opacity-80 transition duration-150">
        Tweet
      </button>
    </div>
    <button className = "flex items-center space-x-1 rounded-full bg-transparent p-1 text-center hover:bg-white/20 transition duration-150 w-full justify-between">
        <div className='flex items-center space-x-2'>
        <div className='rounded-full bg-slate-400 w-10 h-10'></div>
        <div className='text-left text-sm'>
          <div className='font-semibold'>MayankPallai</div>
          <div className=''>@kadduuuu</div>
        </div>
        </div>
        <div>
          <BsThreeDots/>
        </div>
      </button>
   </section>
  )
}

export default LeftSidebar