"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:p-[16px_130px_16px_130px] w-full md:h-[88px] h-[44px] flex items-center md:justify-evenly md:gap-0 gap-[200px] px-4">
      <div className="w-[65.4px] h-[22.87px]">
        <Image src={'/head/logo.png'} alt="logo" width={65.4} height={22.87} />
      </div>

      <div className="relative">
        <div className="md:hidden" onClick={toggleMenu}>
          <RxHamburgerMenu className="text-2xl cursor-pointer" />
        </div>
      </div>

      {isOpen && (
        <ul className="flex flex-col md:hidden absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4">
          <Link href="/"><li className="text-lg hover:text-gray-700">Home</li></Link>
          <Link href="/"><li className="text-lg hover:text-gray-700">Blog</li></Link>
          <Link href="/"><li className="text-lg hover:text-gray-700">About</li></Link>
          <Link href="/"><li className="text-lg hover:text-gray-700">Contact</li></Link>
        </ul>
      )}

      <div className="md:flex pl-10 hidden">
        <div className=" flex bg-[#F5F5F5] h-[56px] p-[16px] w-[372px]">
          <Image src={'/search.png'} alt="" width={24} height={24} className="h-[24px] w-[24px]" />

          <input type="text" placeholder="Search" className="mx-4 px-2 w-[360px] bg-[#F5F5F5] text-[#F5F5F5] font-semibold text-[14px]" />
        </div>
      </div>
      <div className="md:flex hidden">
        <ul className="md:flex hidden justify-evenly items-center h-[32px] w-[369px] ">
          <li className="hover:text-[#aeaeae] cursor-pointer">Home</li>
          <li className="hover:text-[#aeaeae] cursor-pointer">About</li>
          <li className="hover:text-[#aeaeae] cursor-pointer">Contact US</li>
          <li className="hover:text-[#aeaeae] cursor-pointer">Blog</li>
        </ul>
      </div>

      <div className="md:flex w-[144px] justify-around hidden">
        <div className="h-8 w-8 flex items-center" >
          <Image src={'/head/heart.png'} alt="" height={17.83} width={20} />
        </div>
        <div className="h-8 w-8 flex items-center" >
          <Link href={'/shoppingCart'}>
            <Image src={'/head/Cart1.png'} alt="" height={22} width={24.89} />
          </Link>
        </div>
        <div className="h-8 w-8 flex items-center" >
          <Image src={'/head/profile.png'} alt="" height={22} width={17} />
        </div>
      </div>
    </div>
  )
}

export default Header