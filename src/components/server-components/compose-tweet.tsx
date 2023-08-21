import { Database } from '@/lib/supabase.types'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { randomUUID } from 'crypto'
import { cookies } from 'next/headers'
import React from 'react'

const composeTweet = () => {

  async function submitTweet(formData : FormData) {
    'use server'
    const tweet = formData.get("tweet")

    if(!tweet) return
    
    const supabase = createServerComponentClient<Database>({ cookies })
    
    const {data:userData, error:userError} = await supabase.auth.getUser()

    if(userError) return

    await supabase.from("tweets").insert({
        profile_id: userData.user.id,
        text: tweet.toString(),
        id: randomUUID()
    })
  }
  
  return (a
    <form action={async(data=>{
        await
    })} className='flex flex-col w-full h-full'>
    <input type="text" className='w-full h-full text-lg placeholder:text-lg placeholder:text-gray-400 bg-transparent border-b-[0.5px] border-gray-400 p-3 outline-none border-none' placeholder= "What's Happening?"/>
<div className='w-full justify-between items-center flex'>
    <div></div>
    <div className='w-full max-w-[100px]'>
    <button className = "rounded-full bg-twitterColor px-4 py-1 w-full text-lg text-center hover:bg-opacity-80 transition duration-150 font-semibold">
        Tweet
    </button>
    </div>
</div>
</form>
  )
}

export default composeTweet
