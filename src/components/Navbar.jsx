import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function NavigationBar(){
  const userRole = {
    User : "User",
    EO : "EO",
    Admin : "Admin"
  }
  const userLogin = "Apriana"
  const getRole = userRole.Admin
  return (
    <Navbar collapseOnSelect expand="md" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" className='fw-bold'>SeTiket</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className='ms-auto'>
            {getRole === userRole.EO ?
            <>
              <Nav.Link href="/myEvent">Event Saya</Nav.Link>
              <Nav.Link href="/createEvent">Buat Event</Nav.Link>
            </>:null}
            {getRole === userRole.Admin?
            <>
              <Nav.Link href="/data">Data</Nav.Link>
              <Nav.Link href="/request">Permintaan</Nav.Link>
            </>:null}
            <Nav.Link href="/ticket">Tiket</Nav.Link>
            <Nav.Link href="/historyTransaction">Riwayat Transaksi</Nav.Link>
            {!userLogin ? 
            <Nav className='d-flex flex-row ms-auto'>
              <Nav.Link href="/login">Masuk</Nav.Link>
              <Nav.Link href="/register" className='ms-2 bg-primary px-3 text-white rounded'>Daftar</Nav.Link>
            </Nav>
            :<Nav.Link href="/profile">Halo, {userLogin}</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar;