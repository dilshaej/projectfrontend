import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insideDashboard}) {
  return (
    <div>
        <Navbar style={{zIndex:'1'}} className=" card shadow top-0 position-fixed w-100 bg-success">
        <Container>
          <Navbar.Brand >
          <Link style={{textDecoration:'none'}} className='fw-bolder text-light' to={'/'}><i className="fa-brands fa-docker"></i> Project Fair</Link>  
           
          </Navbar.Brand>
          {insideDashboard &&
          <div className='ms-auto'>
            <button className='btn btn-link text-light'> Logout <i className='fa-solid fa-arrow-right'></i></button>
          </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header