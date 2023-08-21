import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import LeftSidebar from '@/components/LeftSidebar'
import MainComponent from '@/components/MainComponent'
import RightComponent from '@/components/RightComponent'

const Home = async () => {  
  return (
    <div className = "w-full h-full flex justify-center items-center text-white relative bg-black text-white">
      <div className = "xl:max-w-[75vw] w-full h-full flex relative">
        <LeftSidebar/>
        <MainComponent/>
        <RightComponent/>
      </div>
    </div>
  );
};

export default Home
