import React from 'react'
import logo from '../../assets/footerlogo.png'
import percent from '../../assets/percent.png'
import card from '../../assets/payment.png'
import { MdFacebook, MdSearch } from 'react-icons/md'
import { FaInstagram, FaTiktok, FaWhatsapp, FaYoutube } from 'react-icons/fa'
const Footer = () => {
  return (
    <>
      <div className='bg-black '>
        <div className='px-[48px] py-[72px] '>
          {/* footer top section */}
          <div className='grid grid-cols-2'>
            <div>
              <img src={logo} alt="" />
              <div className='pt-[32px]'>
                <h1 className='text-[40px] text-white  font-bold'>Postaráme sa o vás</h1>
                <p className='text-[16px] max-w-[400px] text-white font-normal pt-[16px] '>Odomknite nekonečné možnosti s naším prémiovým výberom Apple produktov.</p>
              </div>
            </div>
            <div>
              <div className="bg-[#6A4EF5] px-[32px] py-[30px]">
                <div className='flex justify-between items-center'>
                  <h1 className='text-white text-[30px] font-bold'>Získaj 10% zľavu</h1>
                  <img src={percent} alt="" className='object-cover w-[60px] h-[60px]' />
                </div>
                <div className='pt-[16px]'>
                  <p className='text-white text-[15px] font-normal opacity-[60%]'>Ušetrite 10% na ďalšom nákupe produktov Apple, ak sa ešte dnes pripojíte k našej komunite odberateľov noviniek!</p>
                </div>
                <div className='flex items-center gap-5 pt-[40px]'>
                  <div className='w-full bg-white h-[48px] flex justify-center items-center px-3'>
                    <input type="text" className='w-full h-full focus:outline-none px-3' placeholder='Vaša e-mailová adresa' />
                    <MdSearch size={20} />
                  </div>
                  <div className='bg-black h-[48px] px-5 flex justify-center items-center'>
                    <p className='text-white '>Odoslať</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer lists */}
          <div className='grid grid-cols-2 pt-[56px]'>
            <div>
              <div className=''>
                <h1 className='text-white text-[14px] font-semibold'>Kontaktné údaje</h1>
                <ul className='pt-[32px]'>
                  <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>+421 919 215  491</li>
                  <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Rastislavova 68, Košice</li>
                </ul>
              </div>
              <div className='pt-20'>
                <h1 className='text-white text-[14px] font-semibold'>Sledujte nás</h1>
                <div className='pt-[32px] flex items-center gap-4'>
                  <MdFacebook className='text-white' />
                  <FaInstagram className='text-white' />
                  <FaYoutube className='text-white' />
                  <FaWhatsapp className='text-white' />
                  <FaTiktok className='text-white' />
                </div>
              </div>
            </div>
            <div>
              <div className='flex justify-between '>
                <div>
                  <h1 className='text-white text-[14px] font-semibold'>Customer service</h1>
                  <ul className='pt-[32px]'>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Kontaktujte nás</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>FAQs</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Vrátenie zásielky</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Doručenie</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Sledovanie zásielky</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Platby a cenotvorba</li>
                  </ul>
                </div>
                <div>
                  <h1 className='text-white text-[14px] font-semibold'>Iné</h1>
                  <ul className='pt-[32px]'>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Iné iné a niečo iné</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Iné iné a niečo iné</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Iné iné iné</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Iné iné a iné</li>

                  </ul>
                </div>
                <div>
                  <h1 className='text-white text-[14px] font-semibold'>Mobilecare</h1>
                  <ul className='pt-[32px]'>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>O nás</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Blog</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Kariéra</li>

                  </ul>
                </div>
                <div>
                  <h1 className='text-white text-[14px] font-semibold'>Členstvo, zľavy a akcie</h1>
                  <ul className='pt-[32px]'>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Odporuč nás a dostaň zľavu 10%</li>
                    <li className='text-[#999999] text-[14px] pb-[16px] font-normal'>Vernostný program</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Footer slider */}
          <div className='flex justify-between items-center pt-[64px] gap-3'>
            <div className='flex justify-start items-start  '>
              <p className='hover:text-white transition-all duration-300 text-[#191919] cursor-pointer text-[32px] font-bold'>Slovensko</p>
            </div>
            <div className='flex justify-center items-center  '>
              <p className='hover:text-white transition-all duration-300 text-[#191919] cursor-pointer text-[32px] font-bold'>Česká republika</p>
            </div>
            <div className='flex justify-center items-center  '>
              <p className='hover:text-white transition-all duration-300 text-[#191919] cursor-pointer text-[32px] font-bold'>România</p>
            </div>
            <div className='flex justify-end items-end '>
              <p className='hover:text-white transition-all duration-300 text-[#191919] cursor-pointer text-[32px] font-bold'>Polska</p>
            </div>
          </div>
          {/* bank card */}
          <div className='flex justify-end items-end pt-[64px]'>
            <img src={card} alt="" className='object-cover' />
          </div>
          {/* Footer Bottom links  */}
          <div className=''>
            <ul className='flex items-center gap-3'>
              <li className='text-white opacity-[0.5] text-[12px] font-normal'>Podmienky používania</li>
              <li className='text-white opacity-[0.5] text-[12px] font-normal'>GDPR</li>
              <li className='text-white opacity-[0.5] text-[12px] font-normal'>Ochrana osobných údajov</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer