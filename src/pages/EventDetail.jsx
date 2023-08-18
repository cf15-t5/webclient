import React from 'react'
import imagePoster from '../assets/exposter.png'
import iconLocation from '../assets/carbon_location.png'
import iconDate from '../assets/Vector.png'


function EventDetail() {
  return (
    <section className='relative' style={{minHeight:'90vh'}}>
      <img src={imagePoster} className='w-full  h-72 object-cover object-center brightness-50' alt='backgroundPoster'/>
      <div className='h-72 w-full absolute top-0 flex object-center justify-center'>
        <img src={imagePoster} className='object-contain h-full' alt='poster'/>
      </div>
      <div className=' md:my-3 md:mx-20'>
        <div className='flex justify-between border-b-2 border-gray-400'>
          <div className='mx-7 mt-10 md:m-3'>
            <h2 className='font-bold text-3xl'>DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG</h2>
            <div className='my-3'> 
              <img className='inline' src={iconLocation} alt='iconLoc'/>
              <span className='ms-2'>19 Agt 2023</span><br/>
              <img className='ms-1 inline' src={iconDate} alt='iconDate'/>
              <span className='ms-2'>Stadion Si Jalak Harupat, Kutawarigin, Bandung.</span>
            </div>
          </div>
          <div className='eventDetailBuy bg-white fixed flex justify-between px-3 bottom-0 w-full md:bg-transparent md:relative md:inline md:w-fit'>
            <h4 className='text-red-400 font-bold ms-2 md:ms-0 my-auto text-2xl mb-2'>IDR 20000</h4>
            <button className='bg-primary-500 text-white rounded-xl p-2 px-4 me-2 md:me-0 text-sm'>Beli Sekarang</button>
          </div>
        </div>
        <div className='mx-7 mt-5 md:m-3 mb-32 md:mb-3'>
          <h4 className='font-bold text-lg mb-3'>Deskripsi</h4>
          <p>
            BALADEWA & BALADEWI, Inilah yang ditunggu-tunggu! DEWA 19 kembali melakukan stadium tour di kota-kota besar Indonesia dengan membawa berbagai bintang tamu untuk ikut meramaikan acara konser dari band legendaris Indonesia.
            Konser akan dimeriahkan oleh Ari Lasso, Virzha, Ello, dan Tyo Nugros! Selain itu, turut mengundang ALL STARS PHIL X - Guitarist Bon Jovi, DEREK SHERINIAN - Keyboardist Dream Theater, Sons of Apollo, JEFF SCOTT SOTO - Vokalis Journey, Sons of Apollo, serta DINO JELUSICK - Vokalis Trans Siberian Orchestra, Whitesnake! Konser akan berlangsung di Stadion Si Jalak Harupat, Bandung!
          </p>
        </div>
      </div>
    </section>

  )
}

export default EventDetail