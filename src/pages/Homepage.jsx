import imageHome from '../assets/imgHomepage.png'
import Image from 'react-bootstrap/Image';
import { Form,Row,Col } from 'react-bootstrap';
import CardEvent from '../components/CardEvent';

import imageEvent1 from '../assets/exposter.png'
import imageEvent2 from '../assets/imgHomepage.png'
import imageEvent3 from '../assets/exposter2.png'
import imageEvent4 from '../assets/exposter3.jpeg'
import imageEvent5 from '../assets/exposter4.jpeg'
import { Link } from 'react-router-dom';

function Homepage(){
  const EventData = [
    {
      Img:imageEvent1,
      EventTitle:"DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date:"19 Agt 2023",
      Location:"Bandung",
      Price:"200.000",
      Status:"Tersedia Sekarang"
    },
    {
      Img:imageEvent2,
      EventTitle:"DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date:"19 Agt 2023",
      Location:"Bandung",
      Price:"200.000",
      Status:"Tersedia Sekarang"
    },
    {
      Img:imageEvent3,
      EventTitle:"DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date:"19 Agt 2023",
      Location:"Bandung",
      Price:"200.000",
      Status:"Tersedia Sekarang"
    },
    {
      Img:imageEvent4,
      EventTitle:"DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date:"19 Agt 2023",
      Location:"Bandung",
      Price:"200.000",
      Status:"Tersedia Sekarang"
    },
    {
      Img:imageEvent5,
      EventTitle:"DEWA 19 Feat Allstar ( Stadium Tour ) - BANDUNG",
      Date:"19 Agt 2023",
      Location:"Bandung",
      Price:"200.000",
      Status:"Tersedia Sekarang"
    }
  ]
  return(
    <section style={{height:'80vh'}}>
      <Image src={imageHome} className='h-50 w-100 object-fit-cover' style={{objectPosition:'50% 80%'}} fluid/>
      <div style={{width:'100vw'}}>
        <div className='bg-white rounded search'>
          <Form className='p-2 px-4'>
            <Row className='mb-3'>
              <Form.Group as={Col} md={3} controlId="formGridEvent">
                <Form.Label>Nama Event</Form.Label>
                <Form.Control type="text" width={100}/>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridKategori">
                <Form.Label>Kategori</Form.Label>
                <Form.Select defaultValue="null">
                  <option>Kategori</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
              <Form.Group as={Col} controlId="formGridTanggal">
                <Form.Label>Tanggal</Form.Label>
                <Form.Control type="date" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridLokasi">
                <Form.Label>Lokasi</Form.Label>
                <Form.Select defaultValue="Lokasi">
                  <option>Lokasi</option>
                  <option>...</option>
                </Form.Select>
              </Form.Group>
            </Row>
          </Form>
        </div>
      </div>
      <div className='eventList'> 
      {EventData.map((event)=>{
        return(
          <Link to={'/eventDetail'}>
            <CardEvent {...event}/>
          </Link>
        )
      })}
      </div>
    </section>  
  )
}
export default Homepage;