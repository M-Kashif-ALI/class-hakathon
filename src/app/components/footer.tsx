import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black text-white py-[100px] md:px-[130px] px-5 h-[200vh] md:h-[504px] w-full'>
      <div className='md:flex md:gap-[145px]'>
        <div className='min-h-36 md:basis-[33.3%]'>
          <Image src={'/footer/Logo Vector.png'} alt='' height={22} width={65} className='ml-[88px] md:ml-0'/>
          <p className='font-medium text-sm text-[#CFCFCF] mt-4'>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
        </div>
        <div className='md:flex md:gap-[60px]'>
          <div className='basis-[33.3%] text-center'>
            <h3 className='font-semibold'>Services</h3>

            <p className='text-[#CFCFCF] text-sm py-2'>Bonus program</p>
            <p className='text-[#CFCFCF] text-sm py-2 '>Gift cards</p>
            <p className='text-[#CFCFCF] text-sm py-2'>Credit and payment</p>
            <p className='text-[#CFCFCF] text-sm py-2 '>Service contracts</p>
            <p className='text-[#CFCFCF] text-sm py-2'>Non-cash account</p>
            <p className='text-[#CFCFCF] text-sm py-2'>Payment</p>

          </div>
          <div className='basis-[33.3%] w-[320px] mt-4 md:mt-0 text-center '>


            <h3 className='font-semibold'>Assistance to the buyer</h3>

            <p className='text-[#CFCFCF] text-sm py-2'>Find an order</p>
            <p className='text-[#CFCFCF] text-sm py-2'>Terms of delivery</p>
            <p className='text-[#CFCFCF] text-sm py-2'>Exchange and return of goods</p>
            <p className='text-[#CFCFCF] text-sm py-2'>Guarantee</p>
            <p className='text-[#CFCFCF] text-sm py-2'>Frequently asked questions</p>
            <p className='text-[#CFCFCF] text-sm py-2'>Terms of use of the site</p>
          </div>
        </div>
      </div>
      <div className='flex w-[173px] justify-between mt-10 md:mt-0'>
        <Image src={'/footer/Twitter.png'} alt='' height={16} width={16} className='cursor-pointer'/>
        <Image src={'/footer/Facebook.png'} alt='' height={16} width={16} className='cursor-pointer'/>
        <Image src={'/footer/tiktok.png'} alt='' height={16} width={16} className='cursor-pointer'/>
        <Image src={'/footer/Instagram.png'} alt='' height={16} width={16} className='cursor-pointer'/>
      </div>
    </div>
  )
}

export default Footer