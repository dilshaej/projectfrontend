import React, { useContext } from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { tokenAuthContext } from '../contexts/TokenAuth'

function Header({insideDashboard}) {
  const {isAuthorised,setIsAuthorised} = useContext(tokenAuthContext)
  const navigate = useNavigate()
  const logout = ()=>{
    sessionStorage.clear()
    setIsAuthorised(false)
    navigate('/')
  }
  return (
    <div>
        <Navbar style={{zIndex:'1'}} className=" card shadow top-0 position-fixed w-100 bg-success">
        <Container>
          <Navbar.Brand >
          <Link style={{textDecoration:'none'}} className='fw-bolder text-light' to={'/'}><i className="fa-brands fa-docker"></i> Project Fair</Link>  
           
          </Navbar.Brand>
          {insideDashboard &&
          <div className='ms-auto'>
            <button onClick={logout} className='btn btn-link text-light'> Logout <i className='fa-solid fa-arrow-right'></i></button>
          </div>
          }
        </Container>
      </Navbar>
    </div>
  )
}

export default Header