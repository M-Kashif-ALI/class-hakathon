import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = () => {
  return (
    <div className="mx-[125px]">
      <div className="py-10">
        <pre className="font-medium text-[#A4A4A4]">
          Home {">"} Catalog {">"}{" "}
          <span className="text-black font-medium">Smartphones</span>
        </pre>
      </div>

      <div className="flex h-[40px]">

        <div className="pr-[50px]">
          <div className="h-[760px] w-[226px]">
            <div className="flex items-center justify-between py-2">
              <h3 className="text-[18px] font-medium">Brands</h3>
              <p>^</p>
            </div>
            <hr className="my-3" />
            <div className="">
              <div className=" flex bg-[#F5F5F5] h-[40px] p-[8px] w-[226px] mb-3">
                <Image
                  src={"/search.png"}
                  alt=""
                  width={24}
                  height={24}
                  className="h-[24px] w-[24px]"
                />

                <input
                  type="text"
                  placeholder="Search"
                  className="mx-1 text-[black] px-2 w-[170px] bg-[#F5F5F5] font-semibold text-[14px] "
                />
              </div>

              <ul className="mb-6">
                <li className="text-[15px] font-medium">
                  <input type="checkbox" className="mr-2" />
                  Apple{" "}
                  <span className="text-[12px] text-[#929292] font-light">
                    110
                  </span>{" "}
                </li>
                <li className="text-[15px] font-medium">
                  <input type="checkbox" className="mr-2" />
                  Samsung{" "}
                  <span className="text-[12px] text-[#929292] font-light">
                    125
                  </span>{" "}
                </li>
                <li className="text-[15px] font-medium">
                  <input type="checkbox" className="mr-2" />
                  Xiaomi
                  <span className="text-[12px] text-[#929292] font-light">
                    68
                  </span>
                </li>
                <li className="text-[15px] font-medium">
                  <input type="checkbox" className="mr-2" />
                  Poco
                  <span className="text-[12px] text-[#929292] font-light">
                    44
                  </span>
                </li>
                <li className="text-[15px] font-medium">
                  <input type="checkbox" className="mr-2" />
                  OPPO
                  <span className="text-[12px] text-[#929292] font-light">
                    36
                  </span>
                </li>
                <li className="text-[15px] font-medium">
                  <input type="checkbox" className="mr-2" />
                  Honor{" "}
                  <span className="text-[12px] text-[#929292] font-light">
                    10
                  </span>{" "}
                </li>
                <li className="text-[15px] font-medium">
                  <input type="checkbox" className="mr-2" />
                  Motorola{" "}
                  <span className="text-[12px] text-[#929292] font-light">
                    34
                  </span>{" "}
                </li>
                <li className="text-[15px] font-medium">
                  <input type="checkbox" className="mr-2" />
                  Nokia{" "}
                  <span className="text-[12px] text-[#929292] font-light">
                    22
                  </span>{" "}
                </li>
                <li className="text-[15px] font-medium">
                  <input type="checkbox" className="mr-2" />
                  Realme{" "}
                  <span className="text-[12px] text-[#929292] font-light">
                    35
                  </span>{" "}
                </li>
              </ul>

              <div className="flex justify-between">
                <h2 className="text-[18px] font-medium">Battery capacity</h2>
                <p className="cursor-pointer">▼</p>
              </div>
              <hr className="my-3" />
              <br />

              <div className="flex justify-between">
                <h2 className="text-[18px] font-medium">Built-in-memory</h2>
                <p className="cursor-pointer">▼</p>
              </div>
              <hr className="my-3" />
              <br />

              <div className="flex justify-between">
                <h2 className="text-[18px] font-medium">Screen type</h2>
                <p className="cursor-pointer">▼</p>
              </div>
              <hr className="my-3" />
              <br />

              <div className="flex justify-between">
                <h2 className="text-[18px] font-medium">Screen diagonal</h2>
                <p className="cursor-pointer">▼</p>
              </div>
              <hr className="my-3" />
              <br />

              <div className="flex justify-between">
                <h2 className="text-[18px] font-medium">Protection class</h2>
                <p className="cursor-pointer">▼</p>
              </div>
              <hr className="my-3" />
              <br />

            </div>
          </div>
        </div>

        <div className="flex justify-between w-full h-[30px]">
          <h3 className="font-medium text-[#6C6C6C]">Selected products: <span className="text-black">85</span></h3>

          <div className="flex justify-between border-[1.5px] gap-28 px-3">
            <div>By rating</div>
            <p>▼</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
      <div className="flex w-[831px] ml-[278px] gap-[10px] mb-[10px]">
        <div className="bg-[#F6F6F6] h-[432px] rounded-lg w-[236px] basis-[33%] ">
          <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
          <div className="flex items-center justify-center pt-3">
            <Image src={'/mainBody/goldPhone.png'} alt="" height={160} width={160} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 512GB </p>
            <p className="pb-4 px-3 text-[16px] font-medium">Gold (MQ233)</p>
            <p className="font-semibold text-2xl">$1437</p>
            <Link href={'product/products'}><button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button></Link>
          </div>
        </div>
        <div className="bg-[#F6F6F6] h-[432px] rounded-lg w-[236px] basis-[33%] ">
          <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
          <div className="flex items-center justify-center pt-3">
            <Image src={'/mainBody/goldPhone.png'} alt="" height={160} width={160} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 512GB </p>
            <p className="pb-4 px-3 text-[16px] font-medium">Gold (MQ233)</p>
            <p className="font-semibold text-2xl">$1437</p>
            <Link href={'product/products'}><button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button></Link>
          </div>
        </div>
        <div className="bg-[#F6F6F6] h-[432px] rounded-lg w-[236px] basis-[33%] ">
          <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
          <div className="flex items-center justify-center pt-3">
            <Image src={'/mainBody/goldPhone.png'} alt="" height={160} width={160} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 512GB </p>
            <p className="pb-4 px-3 text-[16px] font-medium">Gold (MQ233)</p>
            <p className="font-semibold text-2xl">$1437</p>
            <Link href={'product/products'}><button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button></Link>
          </div>
        </div>
        </div>

        <div className="flex w-[831px] ml-[278px] gap-[10px] mb-[10px]">
        <div className="bg-[#F6F6F6] h-[432px] rounded-lg w-[236px] basis-[33%] ">
          <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
          <div className="flex items-center justify-center pt-3">
            <Image src={'/mainBody/goldPhone.png'} alt="" height={160} width={160} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 512GB </p>
            <p className="pb-4 px-3 text-[16px] font-medium">Gold (MQ233)</p>
            <p className="font-semibold text-2xl">$1437</p>
            <Link href={'product/products'}><button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button></Link>
          </div>
        </div>
        <div className="bg-[#F6F6F6] h-[432px] rounded-lg w-[236px] basis-[33%] ">
          <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
          <div className="flex items-center justify-center pt-3">
            <Image src={'/mainBody/goldPhone.png'} alt="" height={160} width={160} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 512GB </p>
            <p className="pb-4 px-3 text-[16px] font-medium">Gold (MQ233)</p>
            <p className="font-semibold text-2xl">$1437</p>
            <Link href={'product/products'}><button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button></Link>
          </div>
        </div>
        <div className="bg-[#F6F6F6] h-[432px] rounded-lg w-[236px] basis-[33%] ">
          <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
          <div className="flex items-center justify-center pt-3">
            <Image src={'/mainBody/goldPhone.png'} alt="" height={160} width={160} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 512GB </p>
            <p className="pb-4 px-3 text-[16px] font-medium">Gold (MQ233)</p>
            <p className="font-semibold text-2xl">$1437</p>
            <Link href={'product/products'}><button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button></Link>
          </div>
        </div>
        </div>

        <div className="flex w-[831px] ml-[278px] gap-[10px] mb-[10px]">
        <div className="bg-[#F6F6F6] h-[432px] rounded-lg w-[236px] basis-[33%] ">
          <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
          <div className="flex items-center justify-center pt-3">
            <Image src={'/mainBody/goldPhone.png'} alt="" height={160} width={160} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 512GB </p>
            <p className="pb-4 px-3 text-[16px] font-medium">Gold (MQ233)</p>
            <p className="font-semibold text-2xl">$1437</p>
            <Link href={'product/products'}><button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button></Link>
          </div>
        </div>
        <div className="bg-[#F6F6F6] h-[432px] rounded-lg w-[236px] basis-[33%] ">
          <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
          <div className="flex items-center justify-center pt-3">
            <Image src={'/mainBody/goldPhone.png'} alt="" height={160} width={160} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 512GB </p>
            <p className="pb-4 px-3 text-[16px] font-medium">Gold (MQ233)</p>
            <p className="font-semibold text-2xl">$1437</p>
            <Link href={'product/products'}><button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button></Link>
          </div>
        </div>
        <div className="bg-[#F6F6F6] h-[432px] rounded-lg w-[236px] basis-[33%] ">
          <div className="flex items-center justify-end px-1"><Image src={'/mainBody/Like.png'} alt="" height={32} width={32} /></div>
          <div className="flex items-center justify-center pt-3">
            <Image src={'/mainBody/goldPhone.png'} alt="" height={160} width={160} />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="pt-4 px-3 text-[16px] font-medium">Apple iPhone 14 Pro 512GB </p>
            <p className="pb-4 px-3 text-[16px] font-medium">Gold (MQ233)</p>
            <p className="font-semibold text-2xl">$1437</p>
            <Link href={'product/products'}><button className="border-black border px-8 py-3 rounded text-white bg-black mt-5">buy Now</button></Link>
          </div>
      </div>
      </div>
      <div className="mx-w-full mx-auto my-7 cursor-pointer">
        <Image src={'/product/pagination.png'} alt=" " height={32} width={273}/>
      </div>
      
      </div>


    </div>
  );
};

export default Product;
