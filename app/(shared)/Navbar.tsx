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
      <h1 className="font-bold text-3xl md:text-4xl">The Digital Blog</h1>
      <p className="mt-3 text-sm">
    Blog dedicated towards AI generation and job automation
  </p>
    </div>
    {/* SUBSCRIBE BUTTON */}
    <div className="flex justify-end">
      <button type="button" className="bg-black font-bold text-white rounded-lg px-5 md:px-8 py-2 md:py-3 duration-300 hover:scale-105">
        Subscribe
      </button>
    </div>
  </div>
  {/* HORIZONTAL RULE FOR DIVISION OFF SECTIONS */}
  <hr className="border-y-2 border-black mt-2 mx-10"/>
  <div className="flex justify-between px-10 pt-4 pb-1">
    {/* BUTTONS FOR NAVIGATION */}
    <div className="basis-1/4 flex justify-between items-center gap-10">
      <Link href="/">Home</Link>
      <Link href="/">Trending</Link>
      <Link href="/">About</Link>
    </div>
    {/* SEARCH BAR */}
    <div className="basis-full ml-10">
      <div className="verticalLineForHeader"></div>
    </div>
  </div>
  {/* HORIZONTAL RULE FOR DIVISION OFF SECTIONS */}
  <hr className="border-1 border-black mt-2 mx-10"/>
</header>
  );
};

export default Navbar;