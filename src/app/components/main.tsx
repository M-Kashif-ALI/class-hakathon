
"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from 'react';

const Main = () => {

  type ItemType = 'New Arrival' | 'Beatseller' | 'Featured products';

  const [activeItem, setActiveItem] = useState<ItemType | null>(null);

  const handleClick = (item: ItemType) => {
    setActiveItem(item); // Set active item on click
  };

  return (

    <div className="overflow-x-clip">

      <div className="bg-[#211C24] min-h-[632px] md:px-28 px-[30px] text-white md:flex-row flex flex-col">
        <div className="flex flex-col md:items-between justify-center md:h-[600px] h-[400px]">
          <div className="mr-14">
            <p className="md:text-[30px] text-[25px] ml-14 md:text-start font-semibold text-[#8f8f90]">
              Pro.Beyound
            </p>
            <h1 className="w-[100vw] md:w-[40vw]">
              {" "}
              <span className="md:pr-5 md:text-[96px] text-[60px] font-thin md:font-extralight">
                
                IPhone 14
              </span>{" "}
              <span className="md:text-[96px] text-[60px] block ml-20 font-semibold">Pro</span>{" "}
            </h1>
            <p className="text-[#8f8f90] w-[90vw] md:w-[40vw]">
              Created to change everything for the <span className="ml-16 md:ml-0">better. For everyone</span>
            </p>
          </div>
          <button className="h-[56px] my-4 w-[191px] border ml-10 md:ml-0">Shop Now</button>
        </div>
        <div className="">
          <Image src={"/Iphone Image.png"} alt=" " height={632} width={406} />
        </div>
      </div>
      <div className="md:flex">

        <div className="md:flex">
          <div className="md:w-[720px] w-[400px]">
            <div className="md:flex ml-16 md:ml-0 items-center py-10 md:py-0 md:pr-[48px]">
              <Image
                src={"/mainBody/PlayStation.png"}
                alt=""
                height={343}
                width={360}
                className="md:h-[343px] md:w-[360px] h-[200px] w-[200px]"
              />
              <div className="md:w-[338px] w-[200px] h-fit">
                <h1 className="text-[32px] font-semibold">Playstation 5</h1>
                <p className="text-[14px] leading-6 text-[#909090]">
                  Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O
                  will redefine your PlayStation experience.
                </p>
              </div>
            </div>

            <div className="md:flex">
              <div className="flex items-center w-[360px] h-[272px] bg-[#EDEDED]">
                <Image
                  src={"/mainBody/pods.png"}
                  alt=""
                  height={272}
                  width={104}
                />
                <div className="flex flex-col px-7 mx-w-[360px] mx-auto basis-[60%]">
                  <h1 className="text-[29px] leading-10">
                    Apple <br /> AirPods <br />{" "}
                    <span className="font-semibold">Max</span>
                  </h1>
                  <p className="text-[14px] leading-[24px] text-[#909090]">
                    Computational audio. Listen, it s powerful
                  </p>
                </div>
              </div>

              <div className="flex items-center w-[360px] h-[272px] bg-[#353535]">
                <Image
                  src={"/mainBody/image 36.png"}
                  alt=""
                  height={272}
                  width={104}
                />
                <div className="flex flex-col px-7 mx-w-[360px] mx-auto basis-[60%]">
                  <h1 className="text-[29px] leading-10 text-white">
                    Apple <br /> Vision <span className="font-semibold">Pro</span>
                  </h1>
                  <p className="text-[14px] leading-[24px] text-[#909090]">
                    An immersive way to <br /> experience <br /> entertainment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="md:flex flex flex-col-reverse md:flex-row items-center p-[20px] md:p-0 bg-[#EDEDED]">
          <div className="md:flex md:flex-col md:justify-center md:pl-[56px] pl-[26px]">
            <h1 className="md:text-[64px] text-[34px] font-medium md:font-thin leading-none inline">Macbook</h1>
            <h2 className="md:text-[64px] text-[34px]  font-light md:font-medium leading-none inline">Air</h2>
            <p className="text-[14px] text-[#909090] ">The new 15‑inch MacBook Air makes room for more <br /> of what you love with a spacious Liquid Retina <br /> display.</p>
            <button className="h-[56px] ml-12 md:ml-0 my-4 w-[191px] border-black border-[1.5px] rounded">Shop Now</button>
          </div>
          <div>
            <Image src={'/mainBody/MacBook Pro 14.png'} alt="" height={429} width={659} className="md:h-[429.21px] md:w-[659.25] h-[200px] w-[300px]" />
          </div>
        </div>
      </div>

      <div className="w-full h-[352px] py-[80px] md:px-40 px-5" >
        <div className="flex justify-between">
          <h3 className="text-[24px] font-medium pb-[32px]">Browse by category</h3>
          <div className="flex">
            <Image src={'/mainbody/Arrow.png'} alt="" height={32} width={32} className="h-8 w-8 cursor-pointer" />
            <Image src={'/mainbody/Arrow2.png'} alt="" height={32} width={32} className="h-8 w-8 cursor-pointer" />
          </div>
        </div>
        <div className="md:w-[1120px] flex flex-wrap md:flex md:gap-[32px] gap-[5px]">

          <Link href={'/product'}>
            <div className="bg-[#EDEDED] rounded h-32 w-32 flex flex-col items-center justify-center cursor-pointer">
              <Image src={'/mainBody/Phones.png'} alt="" height={48} width={48} className="h-12 w-12" />
              <p className="font-medium">Phones</p>
            </div>
          </Link>

          <Link href={'/product'}>
            <div className="bg-[#EDEDED] rounded h-32 w-32 flex flex-col items-center justify-center cursor-pointer">
              <Image src={'/mainBody/Cameras.png'} alt="" height={48} width={48} className="h-12 w-12" />
              <p className="font-medium">Cameras</p>
            </div>
          </Link>

          <Link href={'/product'}>
            <div className="bg-[#EDEDED] rounded h-32 w-32 flex flex-col items-center justify-center cursor-pointer">
              <Image src={'/mainBody/Headphones.png'} alt="" height={48} width={48} className="h-12 w-12" />
              <p className="font-medium">Phones</p>
            </div>
          </Link>

          <Link href={'/product'}>
            <div className="bg-[#EDEDED] rounded h-32 w-32 flex flex-col items-center justify-center cursor-pointer">
              <Image src={'/mainBody/Phones.png'} alt="" height={48} width={48} className="h-12 w-12" />
              <p className="font-medium">HeadPhones</p>
            </div>
          </Link>

          <Link href={'/product'}>
            <div className="bg-[#EDEDED] rounded h-32 w-32 flex flex-col items-center justify-center cursor-pointer">
              <Image src={'/mainBody/Computers.png'} alt="" height={48} width={48} className="h-12 w-12" />
              <p className="font-medium">Computers</p>
            </div>
          </Link>

          <Link href={'/product'}>
            <div className="bg-[#EDEDED] rounded h-32 w-32 flex flex-col items-center justify-center cursor-pointer">
              <Image src={'/mainBody/Gaming.png'} alt="" height={48} width={48} className="h-12 w-12" />
              <p className="font-medium">Gaming</p>
            </div>
          </Link>

        </div>
      </div>

      <div className="h-[1056px] w-full py-14 md:px-28 px-5 mt-56 md:mt-0">
        <ul className="flex gap-10 md:gap-0 space-x-4 text-sm md:text-xl md:font-medium font-semibold mb-8">
          <li
            className={`cursor-pointer text-[#8B8B8B] underline-offset-4 ${activeItem === 'New Arrival' ? 'underline text-black' : 'hover:underline hover:text-black'
              }`}
            onClick={() => handleClick('New Arrival')}
          >
            New Arrival
          </li>

          <li
            className={`cursor-pointer text-[#8B8B8B] underline-offset-4 ${activeItem === 'Beatseller' ? 'underline text-black' : 'hover:underline hover:text-black'
              }`}
            onClick={() => handleClick('Beatseller')}
          >
            Beatseller
          </li>

          <li
            className={`cursor-pointer text-[#8B8B8B] underline-offset-4 ${activeItem === 'Featured products' ? 'underline text-black' : 'hover:underline hover:text-black'
              }`}
            onClick={() => handleClick('Featured products')}
          >
            Featured products
          </li>
        </ul>

        <div className="flex w-full min-h-[100vh] md:h-[880px] gap-3 flex-wrap mb-[56px]">
          <div className="h-[432px] ml-3 md:ml-0 md:w-[24%] bg-[#F6F6F6] pt-[25px] text-center">
            <div className="ml-[190px] cursor-pointer">
              <Image src={'/mainBody/Like.png'} alt="" height={32} width={32} className="h-7 w-7 mb-4" />
            </div>
            <div className="flex items-center justify-center">
              <Image src={'/mainBody/Iphone 14 pro 1.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex px-6 py-4">
              <p className="font-medium text-[15px]">Apple iPhone 14 Pro Max 128GB<span className="flex items-center justify-center"> Deep Purple</span>  </p>
            </div>
            <p className="text-[24px] font-semibold text-center">$900</p>
           <Link href={'/product/products'}> <button className="text-white border bg-black py-[13px] rounded px-[50px]  mt-3">Buy now</button> </Link>
          </div>

          <div className="h-[432px] ml-3 md:ml-0 md:w-[24%] w-[100%] bg-[#F6F6F6] pt-[25px] text-center">
            <div className="md:ml-[190px] ml-[230px] cursor-pointer">
              <Image src={'/mainBody/Like.png'} alt="" height={32} width={32} className="h-7 w-7 mb-4" />
            </div>
            <div className="flex items-center justify-center">
              <Image src={'/mainBody/Camera 1.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex px-6 py-4">
              <p className="font-medium text-[15px] ml-6 md:ml-0">Blackmagic pocket cinema<span className="flex items-center justify-center"> Camera 6k</span>  </p>
            </div>
            <p className="text-[24px] font-semibold text-center">$2535</p>
            <Link href={'/product/products'}> <button className="text-white border bg-black py-[13px] rounded px-[50px]  mt-3">Buy now</button> </Link>
          </div>

          <div className="h-[432px] ml-3 md:ml-0 md:w-[24%] w-[100%] bg-[#F6F6F6] pt-[25px] text-center">
            <div className="ml-[190px] cursor-pointer">
              <Image src={'/mainBody/Like.png'} alt="" height={32} width={32} className="h-7 w-7 mb-4" />
            </div>
            <div className="flex items-center justify-center">
              <Image src={'/mainBody/watch 1.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex px-6 py-4">
              <p className="font-medium text-[15px]">Apple Watch Series 9 GPS  <span className="flex items-center justify-center"> 41mm Starlight Aluminium</span>  </p>
            </div>
            <p className="text-[24px] font-semibold text-center">$399</p>
            <Link href={'/product/products'}> <button className="text-white border bg-black py-[13px] rounded px-[50px]  mt-3">Buy now</button> </Link>
          </div>

          <div className="h-[432px] ml-3 md:ml-0 md:w-[24%] w-[100%] bg-[#F6F6F6] pt-[25px] text-center">
            <div className="ml-[190px] cursor-pointer">
              <Image src={'/mainBody/Like.png'} alt="" height={32} width={32} className="h-7 w-7 mb-4" />
            </div>
            <div className="flex items-center justify-center">
              <Image src={'/mainBody/headphone.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex px-6 py-4">
              <p className="font-medium text-[15px] ml-7">AirPods Max Silver <br />
                <span className="flex items-center justify-center">Starlight Aluminium</span> </p>
            </div>
            <p className="text-[24px] font-semibold text-center">$549</p>
            <Link href={'/product/products'}> <button className="text-white border bg-black py-[13px] rounded px-[50px]  mt-3">Buy now</button> </Link>
          </div>

          <div className="h-[432px] ml-3 md:ml-0 md:w-[24%] w-[100%] bg-[#F6F6F6] pt-[25px] text-center">
            <div className="ml-[190px] cursor-pointer">
              <Image src={'/mainBody/Like.png'} alt="" height={32} width={32} className="h-7 w-7 mb-4" />
            </div>
            <div className="flex items-center justify-center">
              <Image src={'/mainBody/watch 2.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex px-6 py-4">
              <p className="font-medium text-[15px] mx-auto">Samsung Galaxy Watch6 <span className="flex items-center justify-center"> Classic 47mm Black</span>  </p>
            </div>
            <p className="text-[24px] font-semibold text-center">$369</p>
            <Link href={'/product/products'}> <button className="text-white border bg-black py-[13px] rounded px-[50px]  mt-3">Buy now</button> </Link>
          </div>

          <div className="h-[432px] ml-3 md:ml-0 md:w-[24%] w-[100%] bg-[#F6F6F6] pt-[25px] text-center">
            <div className="ml-[190px] cursor-pointer">
              <Image src={'/mainBody/Like.png'} alt="" height={32} width={32} className="h-7 w-7 mb-4" />
            </div>
            <div className="flex items-center justify-center">
              <Image src={'/mainBody/Zfold.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex px-6 py-4">
              <p className="font-medium text-[15px]">Galaxy Z Fold5 Unlocked | <span className="flex items-center justify-center"> 256GB | Phantom Black</span>  </p>
            </div>
            <p className="text-[24px] font-semibold text-center">$1799</p>
            <Link href={'/product/products'}> <button className="text-white border bg-black py-[13px] rounded px-[50px]  mt-3">Buy now</button> </Link>
          </div>

          <div className="h-[432px] ml-3 md:ml-0 md:w-[24%] w-[100%] bg-[#F6F6F6] pt-[25px] text-center">
            <div className="ml-[190px] cursor-pointer">
              <Image src={'/mainBody/Like.png'} alt="" height={32} width={32} className="h-7 w-7 mb-4" />
            </div>
            <div className="flex items-center justify-center">
              <Image src={'/mainBody/buds.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex px-6 py-4">
              <p className="font-medium text-[15px] mx-auto">Galaxy Buds FE
                <span className="flex items-center justify-center"> Graphite</span>  </p>
            </div>
            <p className="text-[24px] font-semibold text-center">$99.99</p>
            <Link href={'/product/products'}> <button className="text-white border bg-black py-[13px] rounded px-[50px]  mt-3">Buy now</button> </Link>
          </div>

          <div className="h-[432px] ml-3 md:ml-0 md:w-[24%] w-[100%] bg-[#F6F6F6] pt-[25px] text-center">
            <div className="ml-[190px] cursor-pointer">
              <Image src={'/mainBody/Like.png'} alt="" height={32} width={32} className="h-7 w-7 mb-4" />
            </div>
            <div className="flex items-center justify-center">
              <Image src={'/mainBody/ipad.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex px-6 py-4">
              <p className="font-medium text-[15px]">Apple iPad 9 10,2  64GB Wi-Fi <span className="flex items-center justify-center"> Silver (MK2L3) 2021</span>  </p>
            </div>
            <p className="text-[24px] font-semibold text-center">$398</p>
            <Link href={'/product/products'}> <button className="text-white border bg-black py-[13px] rounded px-[50px]  mt-3">Buy now</button> </Link>
          </div>
        </div>
      </div>

      <div className="md:w-full md:h-[640px] mt-[600vh] md:mt-0 md:flex">
        <div className="">
          <div className="">
            <Image src={'/mainBody/Group 1.png'} alt="" width={300} height={300} />
          </div>
          <div className="w-fit h-fit flex flex-col items-center justify-center">
            <h4 className="text-[33px] font-light">Popular products</h4>
            <p className="text-[#909090] text-[14px] py-4 px-7">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="border-[1.5px] px-[46px] py-[15px] rounded border-black">Shop now</button>
          </div>
        </div>

        <div className="bg-[#F9F9F9]">
          <div className="h-[376px] flex">
            <Image src={'/mainBody/image 64.png'} alt="" width={300} height={300} />
          </div>
          <div className="w-fit h-fit flex flex-col items-center justify-center">
            <h4 className="text-[33px] font-light">Ipad pro</h4>
            <p className="text-[#909090] text-[14px] py-4 px-7">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="border-[1.5px] px-[46px]  py-[15px] rounded border-black">Shop now</button>
          </div>
        </div>


        <div className="bg-[#EAEAEA]">
          <div className="h-[376px] flex">
            <Image src={'/mainBody/image 41.png'} alt="" width={300} height={300} />
          </div>
          <div className="w-fit h-fit flex flex-col items-center justify-center">
            <h4 className="text-[33px] font-light">Samsung Galaxy </h4>
            <p className="text-[#909090] text-[14px] py-4 px-7">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="border-[1.5px] px-[46px] py-[15px] rounded border-black">Shop now</button>
          </div>
        </div>


        <div className="bg-[#2C2C2C] text-white">
          <div className="h-[376px] flex pl-8">
            <Image src={'/mainBody/MacBook 1.png'} alt="" width={300} height={300} />
          </div>
          <div className="w-fit h-fit flex flex-col items-center justify-center">
            <h4 className="text-[33px] font-light">Popular products</h4>
            <p className="text-[#909090] text-[14px] py-4 px-7">iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.</p>
            <button className="border-[1.5px] px-[46px] py-[15px] rounded my-5 md:my-0 border-white">Shop now</button>
          </div>
        </div>


      </div>

      <div className="h-[656px] w-full py-12 md:px-28 px-5 mb-[280vh] md:mb-0">
        <h3 className="text-[24px] font-medium mb-8">Discounts upto 50%</h3>

        <div className="h-fit w-full md:flex gap-[16px]">
          <div className="bg-[#F6F6F6] h-[432px] rounded-lg md:w-[432px] md:basis-[25%] py-3 ">
            <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
            <div className="flex items-center justify-center pt-3">
              <Image src={'/mainBody/goldPhone.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 512GB </p>
              <p className="pb-4 px-3 text-[16px] font-medium">Gold (MQ233)</p>
              <p className="font-semibold text-2xl">$1437</p>
              <button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button>
            </div>
          </div>
          <div className="bg-[#F6F6F6] h-[432px] rounded-lg md:w-[432px] md:basis-[25%] py-3 ">
            <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
            <div className="flex items-center justify-center pt-3">
              <Image src={'/mainBody/headphone.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="pt-4 px-3 text-[16px] font-medium">AirPods Max Silver</p>
              <p className="pb-4 px-3 text-[16px] font-medium">Starlight Aluminium</p>

              <p className="font-semibold text-2xl">$549</p>
              <button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button>
            </div>
          </div>
          <div className="bg-[#F6F6F6] h-[432px] rounded-lg md:w-[432px] basis-[25%] py-3 ">
            <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
            <div className="flex items-center justify-center pt-3">
              <Image src={'/mainBody/watch 1.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="pt-4 px-3 text-[16px] font-medium">Apple Watch Series 9 GPS  </p>
              <p className="pb-4 px-3 text-[16px] font-medium">41mm Starlight Aluminium</p>
              <p className="font-semibold text-2xl">$399</p>
              <button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button>
            </div>
          </div>
          <div className="bg-[#F6F6F6] h-[432px] rounded-lg md:w-[432px] basis-[25%] py-3 ">
            <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
            <div className="flex items-center justify-center pt-3">
              <Image src={'/mainBody/TB.png'} alt="" height={160} width={160} />
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 1TB Gold </p>
              <p className="pb-4 px-3 text-[16px] font-medium">(MQ2V3)</p>
              <p className="font-semibold text-2xl">$1499</p>
              <button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Image src={'/mainBody/Banner 2.png'} alt="" height={1256} width={1257}  className="md:h-[1256] md:w-[1257] h-[50vh] w-[100vw]"/>
      </div>

    </div>
  );
};

export default Main;
