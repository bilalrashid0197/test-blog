import Link from 'next/link';
import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'; // Search Bar Icon
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark'; // Blog Logo

type Props = {}

const Navbar = (props: Props) => {
  return (
<header className="mb-5">
  {/* TITLE AND SUBTITLE */}
  <div className="flex justify-between px-10 pt-10 pb-1">
    <div className="w-2/4">
      <h1 className="font-bold text-3xl md:text-4xl"><a href="/">The Digital Blog</a></h1>
      <p className="mt-3 text-sm">
        Discover fresh perspectives and join the conversation on our blog — where every post is a new adventure in thought and community.
      </p>
    </div>
    {/* SUBSCRIBE BUTTON */}
    <div className="flex justify-end">
      <button type="button" className="bg-black font-bold text-white rounded-lg px-5 md:px-8 py-2 md:py-3 duration-300 hover:scale-110">
        Subscribe
      </button>
    </div>
  </div>
  {/* HORIZONTAL RULE FOR DIVISION OFF SECTIONS */}
  <hr className="border-y-2 border-black mt-2 mx-10"/>
  <div className="flex justify-between px-10 pt-4 pb-1">
    {/* BUTTONS FOR NAVIGATION */}
    <div className="basis-7 flex justify-between items-center gap-10">
      <Link href="/" className="text-base underline hover:text-blue-400 hover:scale-110 duration-300">Home</Link>
      <Link href="/#trendingSection" className="text-base underline hover:text-blue-400 hover:scale-110 duration-300">Trending</Link>
      {/*<Link href="/" className="text-base underline hover:text-blue-400 hover:scale-110 duration-300">About</Link>*/}
    </div>
    {/* SEARCH BAR */}
    <div className="basis-full ml-6 flex w-full">
      <div className="verticalLineForHeader"></div> {/*Vertical Line*/}
      {/* SEARCH BAR */}
      <button>
        <MagnifyingGlassIcon className="ml-1 w-5 h-5" />
      </button> 
      <form className="ml-2 w-full">
          <input type="text" placeholder='Search . . .' className="w-full placeholder-black border border-t-0 border-l-0 border-r-0 border-gray-400 outline-none"></input>
      </form>
    </div>
  </div>
  {/* HORIZONTAL RULE FOR DIVISION OFF SECTIONS */}
  <hr className="border-1 border-black mt-2 mx-10"/>
</header>
  );
};

export default Navbar;