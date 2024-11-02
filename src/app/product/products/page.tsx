"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image'
import React from 'react'




const ProductDetails = () => {

  const [monthName, setMonthName] = useState<string | null>(null);

  useEffect(() => {
    const monthNames: string[] = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    const currentMonthIndex: number = new Date().getMonth(); // 0 for January, 1 for February, etc.
    setMonthName(monthNames[currentMonthIndex]);
  }, []);

  return (
    <div className='px-[100px]'>
      <div className='py-[40px] font-medium'>
        <pre className='text-[#A4A4A4]'> Home  {'>'}  catatlog  {'>'}  SmartPhones  {'>'}  Apple  {'>'} <span className='text-black'>IPhone 14 Pro Max</span></pre>
      </div>

      <div className='flex'>
        <div className=' py-[100px] flex'>
          <div>
            <Image src={'/product/Images.png'} alt='' height={516} width={536} />
          </div>
        </div>

        <div className='ml-[48px] h-[672px]'>
          <h1 className='text-[34px] font-bold mt-[20px]'>Apple IPhone 14 Pro Max</h1>
          <div className='flex gap-[20px] mt-[15px]'>
            <p className='text-[30px] font-medium'>$1399</p> <p className='line-through text-[30px] font-medium text-[#A4A4A4]'>$1499</p>
          </div>
          <div className='flex mt-[15px]'>
            <p className='text-[18px] mr-[30px] font-medium'>Select color:</p>
            <Image src={'/product/colors.png'} alt='' height={32} width={300} className='cursor-pointer' />
          </div>

          <div className='flex gap-[10px] mt-[15px]'>
            <p className='px-[24px] py-[15px] text-[14px] text-[#D5D5D5] rounded hover:border-black hover:text-black cursor-pointer border-[1.5px] border-[#A4A4A4]'>128GB</p>
            <p className='px-[24px] py-[15px] text-[14px] text-[#D5D5D5] rounded hover:border-black hover:text-black cursor-pointer border-[1.5px] border-[#A4A4A4]'>256GB</p>
            <p className='px-[24px] py-[15px] text-[14px] text-[#D5D5D5] rounded hover:border-black hover:text-black cursor-pointer border-[1.5px] border-[#A4A4A4]'>512GB</p>
            <p className='px-[35px] py-[15px] text-[14px] text-[#D5D5D5] rounded hover:border-black hover:text-black cursor-pointer border-[1.5px] border-[#A4A4A4]'>1TB</p>
          </div>

          <div className='h-[672px] w-[532px]'>

            <div className='mt-[15px] flex flex-wrap gap-[10px]'>
              <div className='h-fit w-[157px] bg-[#F4F4F4] rounded p-[10px] flex items-center justify-center gap-1'>
                <Image src={'/product/Screensize.png'} alt='' height={24} width={24} />
                <div>
                  <p className='text-sm text-[#A7A7A7]'> Screen size </p>
                  <p className='text-sm'>6.7{`"`}</p>
                </div>
              </div>

              <div className='h-fit w-[157px] bg-[#F4F4F4] rounded p-[10px] flex items-center justify-center gap-1'>
                <Image src={'/product/Screensize.png'} alt='' height={24} width={24} />
                <div>
                  <p className='text-sm text-[#A7A7A7]'> Screen size </p>
                  <p className='text-sm'>6.7{`"`}</p>
                </div>
              </div>

              <div className='h-fit w-[157px] bg-[#F4F4F4] rounded p-[10px] flex items-center justify-center gap-1'>
                <Image src={'/product/Screensize.png'} alt='' height={24} width={24} />
                <div>
                  <p className='text-sm text-[#A7A7A7]'> Screen size </p>
                  <p className='text-sm'>6.7{`"`}</p>
                </div>
              </div>

              <div className='h-fit w-[157px] bg-[#F4F4F4] rounded p-[10px] flex items-center justify-center gap-1'>
                <Image src={'/product/Screensize.png'} alt='' height={24} width={24} />
                <div>
                  <p className='text-sm text-[#A7A7A7]'> Screen size </p>
                  <p className='text-sm'>6.7{`"`}</p>
                </div>
              </div>

              <div className='h-fit w-[157px] bg-[#F4F4F4] rounded p-[10px] flex items-center justify-center gap-1'>
                <Image src={'/product/Screensize.png'} alt='' height={24} width={24} />
                <div>
                  <p className='text-sm text-[#A7A7A7]'> Screen size </p>
                  <p className='text-sm'>6.7{`"`}</p>
                </div>
              </div>

              <div className='h-fit w-[157px] bg-[#F4F4F4] rounded p-[10px] flex items-center justify-center gap-1'>
                <Image src={'/product/Screensize.png'} alt='' height={24} width={24} />
                <div>
                  <p className='text-sm text-[#A7A7A7]'> Screen size </p>
                  <p className='text-sm'>6.7{`"`}</p>
                </div>
              </div>
            </div>
            <p className='text-sm text-[#A7A7A7] mt-[5px]'>Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day. Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras more...</p>

            <div className='flex mt-[15px] gap-[20px]'>
              <button className='h-[56px] w-full border rounded border-black font-medium hover:text-white hover:bg-black duration-500'>Add to wishlist</button>
              <button className='h-[56px] w-full rounded border bg-black text-white font-medium hover:text-black hover:bg-white duration-500 hover:border-black'>Add to cart</button>
            </div>

            <div className='flex mt-[15px] gap-4'>

              <div>
                <Image src={'/product/delivery.png'} alt='' width={56} height={56} />
              </div>
              <div>
                <p className='mt-1 mx-2 text-sm text-[#A7A7A7]'>Free delivery</p>
                <p className='mx-2'>1-2 days</p>
              </div>

              <div>
                <Image src={'/product/delivery.png'} alt='' width={56} height={56} />
              </div>
              <div>
                <p className='mt-1 mx-2 text-sm text-[#A7A7A7]'>In stock</p>
                <p className='mx-2'>today</p>
              </div>

              <div>
                <Image src={'/product/delivery.png'} alt='' width={56} height={56} />
              </div>
              <div>
                <p className='mt-1 mx-2 text-sm text-[#A7A7A7]'>Free delivery</p>
                <p className='mx-2'>1-2 days</p>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div className='py-[80px]'>
        <div className='py-[48px] px-[40px]'>
          <h2 className='text-[24px] font-medium'>Details</h2>
          <p className='py-[20px] text-sm text-[#9D9D9D]'>Just as a book is judged by its cover, the first thing you notice when you pick up a modern smartphone is the display. Nothing surprising, because advanced technologies allow you to practically level the display frames and cutouts for the front camera and speaker, leaving no room for bold design solutions. And how good that in such realities Apple everything is fine with displays. Both critics and mass consumers always praise the quality of the picture provided by the products of the Californian brand. And last year{`'`}s 6.7-inch Retina panels, which had ProMotion, caused real admiration for many.</p>
        </div>
        <div className='flex justify-center'>
          <button className='h-[56px] w-[20%] flex justify-around items-center border rounded border-black font-medium hover:text-white hover:bg-black duration-500'>Add to wishlist <Image src={'/product/Arrow Down.png'} alt=' ' height={24} width={24} /> </button>
        </div>
      </div>

      <div className='py-[10px]'>
        <div className='py-[8px] px-[40px]'>
          <p className='text-2xl font-medium'>Reviews</p>
          <div className='my-4'>
            <Image src={'/product/Overall rating.png'} alt='' width={1000} height={192} />
          </div>
          <hr />
          <div className='my-4'>
            <input
              type="text"
              placeholder="Leave a Comment"
              className="rounded-lg w-full py-2 focus:outline-none text-sm"
            />
          </div>
        </div>
      </div>

      <div>
        <div className='px-9 flex gap-5'>
          <div>
            <Image src={'/product/ronaldo.jfif'} alt='' width={56} height={56} className='rounded-full' />
          </div>
          <div className='w-full'>
            <div className='flex justify-between'>
              <p className='font-medium'>Critiano Ronaldo</p>
              <div className='flex gap-1 text-sm text-[#9D9D9D]'>
                <p>{new Date().getDate()}</p>
                <p>{monthName}</p>
                <p>{new Date().getFullYear()}</p>
              </div>
            </div>
            <div className='my-2'>
              <Image src={'/product/Stars.png'} alt='' height={32} width={100} />
            </div>

            <p className='text-[15px] font-medium text-[#7e7e7e]'>
              I was a bit nervous to be buying a secondhand phone from Amazon, but I couldn’t be happier with my purchase!! I have a pre-paid data plan so I was worried that this phone wouldn’t connect with my data plan, since the new phones don’t have the physical Sim tray anymore, but couldn’t have been easier! I bought an Unlocked black iPhone 14 Pro Max in excellent condition and everything is PERFECT. It was super easy to set up and the phone works and looks great. It truly was in excellent condition. Highly recommend!!!🖤
            </p>
          </div>
        </div>

        <div className='px-9 flex gap-5 my-16'>
          <div>
            <Image src={'/product/mr beast.jfif'} alt='' width={56} height={56} className='rounded-full' />
          </div>
          <div className='w-full'>
            <div className='flex justify-between'>
              <p className='font-medium'>MR.Beast</p>
              <div className='flex gap-1 text-sm text-[#9D9D9D]'>
                <p>{new Date().getDate()}</p>
                <p>{monthName}</p>
                <p>{new Date().getFullYear()}</p>
              </div>
            </div>
            <div className='my-2'>
              <Image src={'/product/Stars.png'} alt='' height={32} width={100} />
            </div>

            <p className='text-[15px] font-medium text-[#7e7e7e]'>
              This phone has 1T storage and is durable. Plus all the new iPhones have a C port! Apple is phasing out the current ones! (All about the Benjamin’s) So if you want a phone that’s going to last grab an iPhone 14 pro max and get several cords and plugs.
            </p>
          </div>
        </div>

        <div className='px-9 flex gap-5 my-16'>
          <div>
            <Image src={'/product/messi.jfif'} alt='' width={56} height={56} className='rounded-full' />
          </div>
          <div className='w-full'>
            <div className='flex justify-between'>
              <p className='font-medium'>Lionel Messi</p>
              <div className='flex gap-1 text-sm text-[#9D9D9D]'>
                <p>{new Date().getDate()}</p>
                <p>{monthName}</p>
                <p>{new Date().getFullYear()}</p>
              </div>
            </div>
            <div className='my-2'>
              <Image src={'/product/Stars.png'} alt='' height={32} width={100} />
            </div>

            <p className='text-[15px] font-medium text-[#7e7e7e]'>
              I might be the only one to say this but the camera is a little funky. Hoping it will change with a software update: otherwise, love this phone! Came in great condition
            </p>

            <Image src={'/product/Two.png'} alt='' height={88} width={245} className='mt-4' />
          </div>
        </div>

        
          <div className='flex justify-center mb-6'>
            <button className='h-[56px] w-[20%] flex justify-around items-center border rounded border-black font-medium hover:text-white hover:bg-black duration-500'>Add to wishlist <Image src={'/product/Arrow Down.png'} alt=' ' height={24} width={24} /> </button>
          </div>
      </div>

    </div>
  )
}

export default ProductDetails