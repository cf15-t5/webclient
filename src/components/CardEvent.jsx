import Card from 'react-bootstrap/Card';



function CardEvent({Img,EventTitle,Date,Location,Price,Status}) {
  return (
    <Card style={{ width: '18rem', height:'100%' }}>
      <Card.Img variant="top" className='object-fit-cover' style={{height:'25vh'}} src={Img} />
      <Card.Body className='d-flex flex-column '>
        <Card.Title><h6 className='fw-bold mb-0'>{EventTitle}</h6></Card.Title>
        <Card.Text className='eventCardDetail'>
          <p>{Date}</p>
          <p className='mb-3'>{Location}</p>
          <h5 className='eventPrice mt-auto mb-0'>IDR {Price}</h5>
          <p style={{color:"var(--green)"}}>{Status}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardEvent