import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
  return (
    <main className='px-[120px] py-[112px]'>
      <section className='flex'>
        <div>
          <h2 className='text-2xl font-semibold'>shopping Cart</h2>

          <div className='w-[520px]'>
            <div className='py-2 my-5 flex'>
              <Image src={'/mainBody/Iphone 14 pro 1.png'} alt='' height={90} width={90} />
              <div className='font-medium pl-3'>
                <p>Apple IPhone 14 Pro Max</p>
                <p>128Gb deep purple</p>
                <p className='text-sm py-4'>#25139526913984</p>
              </div>
              <div className='flex items-center justify-between w-[200px] font-semibold gap-2'>
                <span className='cursor-pointer text-xl'>-</span> <span className='border px-4'>1</span> <span className='cursor-pointer text-xl'>+</span>
                <p className='px-4'>$1399</p>
                <p className='cursor-pointer'>X</p>
              </div>
            </div>

            <hr className='bg-slate-400 p-[0.4px]' />

            <div className='py-2 my-5 flex'>
              <Image src={'/mainBody/headphone.png'} alt='' height={90} width={90} />
              <div className='font-medium pl-3'>
                <p>AirPods Max silver</p>
                <p className='text-sm py-4'>#53459358345</p>
              </div>
              <div className='flex items-center justify-between w-[250px] font-semibold gap-2'>
                <span className='cursor-pointer text-xl'>-</span> <span className='border px-4'>1</span> <span className='cursor-pointer text-xl'>+</span>
                <p className='px-4'>$549</p>
                <p className='cursor-pointer'>X</p>
              </div>
            </div>

            <hr className='bg-slate-500 p-[0.4px]' />

            <div className='py-2 my-5 flex'>
              <Image src={'/mainBody/watch 1.png'} alt='' height={90} width={90} />
              <div className='font-medium pl-3'>
                <p>Apple Watch Series 9</p>
                <p>GPS 41mm Starlight Aluminium </p>
                <p className='text-sm py-4'>#25139526913984</p>
              </div>
              <div className='flex items-center justify-between w-[195px] font-semibold gap-2'>
                <span className='cursor-pointer text-xl'>-</span> <span className='border px-4'>1</span> <span className='cursor-pointer text-xl'>+</span>
                <p className='px-4'>$399</p>
                <p className='cursor-pointer'>X</p>
              </div>
            </div>

          </div>
        </div>

        <div className='w-[536px]'>
          <div className='py-[56px] px-[64px]'>
            <h4 className='text-[20px] font-bold mb-[40px]'>Order Summary</h4>
            <p className='text-sm font-medium text-[#545454] mb-2'>Discount code/Promo code</p>
            <div className='p-[16px_0px_16px_16px] mb-5 border'>
              <input type="text" placeholder='code' className='focus:outline-none focus:ring-0 border-0 text-sm font-medium text-[#545454]'/>
            </div>
            <p className='text-sm font-medium text-[#545454] my-3'>your bonus card number</p>
            <div className='p-[16px_0px_16px_16px] mb-5 border'>
              <input type="text" placeholder='Enter Card Number' className='w-[270px] focus:outline-none focus:ring-0 border-0 text-sm font-medium text-[#545454]'/>
              <button className='border-black border-[1.5px] w-[76px] h-[32px] rounded text-xs font-medium'>Apply</button>
            </div>

            <div className='flex justify-between font-medium my-3'>
            <p>Subtotal</p>
            <p>$2347</p>
            </div>

            <div className='flex justify-between text-[#545454] my-3'>
              <div>
                <p>Estimated Tax</p>
                <p>Estimated shipping & Handling</p>
              </div>
              <div className='text-black font-medium'>
                <p>$50</p>
                <p>$29</p>
              </div>
            </div>

            <div className='flex justify-between font-medium my-3'>
            <p>Total</p>
            <p>$2426</p>
            </div>

            <Link href={'/checkout'}><button className='w-full flex justify-center p-[20px] border-[1.5px] border-black hover:bg-black hover:text-white duration-300'>Checkout</button></Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Cart