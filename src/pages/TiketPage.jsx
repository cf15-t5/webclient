import React, { useEffect } from 'react'
import Tiket from '../components/Tiket'
import axios from '../api/axios'

function TiketPage() {
  
  // useEffect(()=>{
  //   axios
  //   .get('/tickets/my')
  //   .then((res)=>{
  //     console.log(res.data)
  //   })
  //   .catch((err)=>{
  //     console.log(err.response)
  //   })
  // })


  const data = [
    {
      "created_at": "Thu, 24 Aug 2023 04:52:20 GMT",
            "event": {
                "address": "Sekeloa, Periuk, Kota tangerang, Banten",
                "category_id": 1,
                "date_of_event": "Thu, 31 Aug 2023 00:00:00 GMT",
                "description": "\r\nBersiaplah untuk pengalaman musik yang luar biasa dan tak terlupakan di konser \"AURORA: Harmoni Cahaya dan Suara\". Acara ini adalah perpaduan sempurna antara suara indah para musisi papan atas dan tampilan visual yang memukau, menghadirkan sebuah spektakel multi-sensori yang akan memukau dan menginspirasi Anda.\r\n\r\nPanggung yang megah dan canggih dihiasi dengan elemen-elemen yang bercahaya dan efek-efek khusus yang dirancang khusus untuk menghadirkan atmosfer magis. Cahaya lampu yang menari-nari seiring irama musik, proyeksi visual yang mengubah panggung menjadi dunia imajinasi, dan efek pyrotechnic yang menakjubkan akan membuat Anda merasa seolah-olah berada di dalam cerita yang hidup.\r\n\r\nPara bintang utama malam ini adalah deretan musisi ternama dari berbagai genre. Dari balada emosional hingga irama penuh energi, dari pop menggetarkan hingga rock menggelegar, setiap penampilan akan membawa suasana yang unik dan menghipnotis. Vokal yang kuat dan instrumen yang mahir akan mengisi udara dengan harmoni yang tak tertandingi.\r\n\r\nTidak hanya itu, \"AURORA: Harmoni Cahaya dan Suara\" juga memberikan ruang untuk kolaborasi luar biasa antara musisi, menggabungkan gaya yang berbeda untuk menciptakan momen musik yang menggugah perasaan. Para penonton akan merasa terhubung dengan setiap nada, lirik, dan melodi yang mengalun di malam yang penuh bintang ini.\r\n\r\nIni adalah lebih dari sekadar konser; ini adalah perjalanan melalui gelombang suara dan sinar yang mengangkat jiwa. Bergabunglah dengan kami untuk merayakan keajaiban musik dan keindahan visual dalam \"AURORA: Harmoni Cahaya dan Suara\" — sebuah konser musik yang akan membekas di hati dan ingatan Anda selamanya.",
                "event_id": 33,
                "number_of_ticket": 6,
                "poster_path": "public/storage/20230824045137-exposter.png",
                "price": 2000,
                "status": "APPROVED",
                "title": "DewaDewi2",
                "user_id": 3
            },
            "event_id": 33,
            "is_attended": false,
            "ticket_code": "3E9XOI",
            "ticket_id": 4,
            "user": {
                "balance": 24005.0,
                "created_at": null,
                "email": "eo@app.test.com",
                "name": "user1",
                "password": "$2b$12$Nd9AcQSTB88H6SbgEANsS.YjSdN5sOV9/ehjgzPTpwRknUJAj7//m",
                "role": "EVENT_ORGANIZER",
                "status": "ACTIVE",
                "updated_at": "Thu, 24 Aug 2023 08:57:10 GMT",
                "user_id": 3
            },
            "user_id": 3
        },
        {
            "created_at": "Thu, 24 Aug 2023 05:22:49 GMT",
            "event": {
                "address": "test, Minas, Kabupaten s i a k, Riau",
                "category_id": 1,
                "date_of_event": "Sat, 26 Aug 2023 00:00:00 GMT",
                "description": "sadsada",
                "event_id": 35,
                "number_of_ticket": 6,
                "poster_path": "public/storage/20230824051710-exposter3.jpeg",
                "price": 2000,
                "status": "APPROVED",
                "title": "Event Barong say23",
                "user_id": 3
            },
            "event_id": 35,
            "is_attended": false,
            "ticket_code": "5GXVTA",
            "ticket_id": 5,
            "user": {
                "balance": 24005.0,
                "created_at": null,
                "email": "eo@app.test.com",
                "name": "user1",
                "password": "$2b$12$Nd9AcQSTB88H6SbgEANsS.YjSdN5sOV9/ehjgzPTpwRknUJAj7//m",
                "role": "EVENT_ORGANIZER",
                "status": "ACTIVE",
                "updated_at": "Thu, 24 Aug 2023 08:57:10 GMT",
                "user_id": 3
            },
            "user_id": 3
        }
  ]

  return (
    <section className='py-3 px-5'>
      <h5 className='text-xl border-b-2 border-gray-300'>Upcoming Event</h5>
      <div className='lg:mx-48 my-10'>
        {data.map((item)=>{
          return(
            <Tiket {...item}/>
          )
        })}
      </div>
    </section>
  )
}

export default TiketPage