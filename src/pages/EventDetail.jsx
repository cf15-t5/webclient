import React from 'react'
import Image from 'react-bootstrap/Image';
import imagePoster from '../assets/exposter.png'
import iconLocation from '../assets/carbon_location.png'
import iconDate from '../assets/Vector.png'
import { Button } from 'react-bootstrap';


function EventDetail() {
  return (
    <section className='position-relative' style={{minHeight:'90vh'}}>
      <Image src={imagePoster} className='imageDetailBackground' fluid/>
      <div className='imagePoster'>
        <Image src={imagePoster} className='object-fit-contain' fluid/>
      </div>
      <div className='my-md-3 mx-md-5'>
        <div className='d-flex justify-content-between'>
          <div className='eventDetailTitle m-2'>
            <h2 className='fw-bold'>DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG</h2>
            <div className='eventDetailDate'> 
              <Image src={iconLocation}/>
              <span className='ms-2'>19 Agt 2023</span>
            </div>
            <div className='eventDetaillocation ms-1 mt-1'>
              <Image src={iconDate}/>
              <span className='ms-2'>Stadion Si Jalak Harupat, Kutawarigin, Bandung.</span>
            </div>
          </div>
          <div className='eventDetailBuy'>
            <h4 className='eventPrice ms-2 ms-md-0 my-auto'>IDR 20000</h4>
            <Button className='me-2 me-md-0'>Beli Sekarang</Button>
          </div>
        </div>
        
        <hr />
        <div className='eventDetailDescription'>
          <h4 className='fw-bold'>Deskripsi</h4>
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