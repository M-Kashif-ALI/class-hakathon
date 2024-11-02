"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useState } from 'react'


const Checkout = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleClick = (index:number) => {
    setActiveIndex(index);
  };

  const steps = [
    { step: 'Step 1', address: 'Address' },
    { step: 'Step 2', address: 'Shiping' },
    { step: 'Step 3', address: 'Payment' },
  ];

  return (
    <div className='px-[120px]'>
      <div className='flex justify-between my-[72px]'>

        {steps.map((item, index) => (
          <div
            key={index}
            className={`flex gap-[4px] items-center cursor-pointer duration-300 ${activeIndex === index ? 'text-black' : 'text-[#B2B2B2] hover:text-black'
              }`}
            onClick={() => handleClick(index)}
          >
            <Image src={'/product/Location.png'} alt='' height={24} width={24} />
            <div className='font-medium'>
              <p className='text-sm'>{item.step}</p>
              <p className='text-[19px]'>{item.address}</p>
            </div>
          </div>
        ))}

      </div>

      {activeIndex === 0 &&
        <div className='pt-[60px]'>
          <h4 className='text-[20px] font-semibold'>Select Address</h4>
          <div className='bg-[#F6F6F6] h-[144px] w-full my-4 p-[24px] flex items-center justify-between'>

            <div>
              <input type="radio" name="option" id="option1" className='mr-3' />
              <label htmlFor="option1" className='text-[18px]'>2118 Thornridge <span className='text-white bg-black ml-3 p-[2px_6px_2px_6px] rounded text-xs font-medium'>Home</span></label>
              <p className='ml-6 my-2'>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
              <p className='ml-6'>(209) 555-0104</p>
            </div>
            <Image src={'/product/Actions.png'} alt='' height={72} width={50} />
          </div>

          <div className='bg-[#F6F6F6] h-[144px] w-full my-4 p-[24px] flex items-center justify-between'>

            <div>
              <input type="radio" name="option" id="option2" className='mr-3' />
              <label htmlFor="option2" className='text-[18px]'>Head office<span className='text-white bg-black ml-3 p-[2px_6px_2px_6px] rounded text-xs font-medium'>office</span></label>
              <p className='ml-6 my-2'>2715 Ash Dr. San Jose, South Dakota 83475</p>
              <p className='ml-6'>(704) 555-0127</p>
            </div>
            <Image src={'/product/Actions.png'} alt='' height={72} width={50} />
          </div>

          <div className='mt-[48px] flex  items-center cursor-pointer'>
            <hr className='w-[50%]' />
            <p className='bg-black rounded-full text-white font-medium text-center h-6 w-6'>+</p>
            <hr className='w-[50%]' />
          </div>
          <p className='text-center text-sm'>Add new address</p>

          <div className='flex gap-5 justify-end mt-6 mb-10'>
            <Link href={'/shoppingCart'}>
              <button className='border-[1.5px] rounded py-3 px-14 border-black '>Back</button>
            </Link>

            <button className='border-[1.5px] rounded text-white bg-black py-3 px-14 '>Next</button>
          </div>
        </div>}

      {activeIndex === 1 &&
        <div className='pt-[60px]'>
          <h4 className='text-[20px] font-semibold'>Shipment method</h4>

          <label htmlFor="option3">
            <div className='border my-5 p-5 rounded flex justify-between'>
              <div>
                <input type="radio" id='option3' name='optioon' />
                <label htmlFor="option3" className='ml-5 font-medium'>Free</label>
                <label htmlFor="option3" className='ml-5'>Regular shipment</label>
              </div>
              <p>1 Dec, 2024</p>
            </div>
          </label>

          <label htmlFor="option4">
            <div className='border my-5 p-5 rounded flex justify-between'>
              <div>
                <input type="radio" id='option4' name='optioon' />
                <label htmlFor="option4" className='ml-5 font-medium'>$8.5</label>
                <label htmlFor="option4" className='ml-5'>Get your delivery as soon as possible</label>
              </div>
              <p>17 Nov, 2024</p>
            </div>
          </label>

          <label htmlFor="option5">
            <div className='border my-5 p-5 rounded flex justify-between'>
              <div>
                <input type="radio" id='option5' name='optioon' />
                <label htmlFor="option5" className='ml-5 font-medium'>Schedule</label>
                <label htmlFor="option5" className='ml-5'>Pick a date when you want to get your delivery</label>
              </div>
              <Image src={'/product/date.png'} alt='' height={24} width={110} />
            </div>
          </label>

          <div className='flex justify-end mt-40 mb-10 gap-5'>

            <Link href={'/shoppingCart'}>
              <button className='border-[1.5px] rounded py-3 px-14 border-black '>Back</button>
            </Link>

            <button className='border-[1.5px] rounded text-white bg-black py-3 px-14 '>Next</button>
          </div>
        </div>
      }


      {activeIndex === 2 &&
        <div className='py-[50px] gap-20 flex'>
          <div className='py-[32px] px-[24px] w-[40%]'>
            <h3 className='text-[20px] font-medium mb-[24px]'>Summary</h3>

            <div>

              <div className='bg-[#F6F6F6] my-2 h-[70px] flex items-center rounded'>
                <Image src={'/mainBody/Iphone 14 pro 1.png'} alt='' height={40} width={40} />
                <div className='flex justify-between w-full px-3'>
                  <p className='font-medium'>Apple iPhone 14 pro Max 128Gb</p>
                  <p className='font-bold'>$1399</p>
                </div>
              </div>

              <div className='bg-[#F6F6F6] my-2 h-[70px] flex items-center rounded'>
                <Image src={'/mainBody/headphone.png'} alt='' height={40} width={40} />
                <div className='flex justify-between w-full px-3'>
                  <p className='font-medium'>Air Pods Max silver</p>
                  <p className='font-bold'>$549</p>
                </div>
              </div>

              <div className='bg-[#F6F6F6] my-2 h-[70px] flex items-center rounded mb-[24px]'>
                <Image src={'/mainBody/watch 1.png'} alt='' height={40} width={40} />
                <div className='flex justify-between w-full px-3'>
                  <p className='font-medium'>Apple Watch Series 9 GPS 41mm</p>
                  <p className='font-bold'>$399</p>
                </div>
              </div>

              <div className='my-5'>
                <p className='text-sm font-medium'>Address</p>
                <p className='my-2'>1131 Dusty Townline, Jacksonville, TX 40322</p>
              </div>

              <div className='mb-[24px]'>
                <p className='text-sm font-medium'>Shipment method</p>
                <p className='my-2'>Free</p>
              </div>

              <div className='flex justify-between font-medium my-3'>
                <p>Subtotal</p>
                <p>$2347</p>
              </div>

              <div className='my-4'>

                <div className='flex justify-between text-[#545454]'>
                  <p>Estimated Tax</p>
                  <p className='text-black font-medium'>$50</p>
                </div>

                <div className='flex justify-between text-[#545454]'>
                  <p>Estimated shipping & Handling</p>
                  <p className='text-black font-medium'>$29</p>
                </div>
              </div>

              <div className='flex justify-between font-medium'>
                <p>Total</p>
                <p>$2426</p>
              </div>

            </div>
          </div>

          <div className='w-[60%]'>
            <h3 className='font-bold text-[20px]'>Payment</h3>

            <ul className='flex w-full justify-around text-sm font-medium mt-4 mb-10'>
              <li className='hover:underline cursor-pointer hover:underline-offset-4'>Credir card</li>
              <li className='hover:underline cursor-pointer hover:underline-offset-4'>PayPal</li>
              <li className='hover:underline cursor-pointer hover:underline-offset-4'>PayPal Credit</li>
            </ul>

            <Image src={'/product/image 65.png'} alt='' height={190} width={337} className='mb-10' />

            <div>

              <div>
                <input type="text" placeholder='Cardholder Name' className='border p-3 w-full rounded' />

                <input type="text" placeholder='Card number' className='border p-3 w-full mt-4 rounded' />
              </div>

              <div className='my-4 flex gap-3'>
                <input type="text" placeholder='Exp.Date' className='border p-3 w-full rounded' />

                <input type="text" placeholder='CVV' className='border p-3 w-full rounded' />
              </div>

              <input type="checkbox" name="check" id="no1" />
              <label htmlFor="no1" className='ml-3'>Same as billing address</label>

            </div>

            <div className='mt-[48px]'>
              <Link href={'/shoppingCart'}>
                <button className='border-[1.5px] rounded h-[64px] w-[240px] mr-3 font-semibold border-black'>back</button>
              </Link>

              <button className='border h-[64px] w-[240px] bg-black text-white'>Next</button>
            </div>


          </div>
        </div>
      }

    </div>
  )
}

export default Checkout