import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { SERVER_URL } from '../services/serverUrl';

function ProjectCard({displayData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
        <Card className='shadow  btn' onClick={handleShow} style={{ width: '25rem' }}>
      <Card.Img height={'200px'} variant="top"  src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} />
      <Card.Body>
        <Card.Title>{displayData?.title}</Card.Title>
       
       
      </Card.Body>
    </Card>
   
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                    <img className='img-fluid' src={`${SERVER_URL}/uploads/${displayData?.projectImage}`} alt={displayData?.title}/>
                </div>
                <div className="col-lg-6">
                  <h3>{displayData?.title}</h3>
                  <h6><span className='fw-bolder'>Languages Used :</span>{displayData?.language}</h6>
                  <p style={{textAlign:'justify'}}><span className='fw-bolder'>Overview:</span>{displayData?.overview}</p>
                </div>
            </div>
            
            <div className="float-start mt-2">
            <a href={displayData?.github} target='_blank' className='btn btn-secondary' >
            <i className='fa-brands fa-github'></i>
          </a>
          <a href={displayData?.website} target='_blank' className='btn btn-secondary ms-2' >
           <i className='fa-solid fa-link'></i>
          </a>
            </div>
        </Modal.Body>
        <Modal.Footer className='me-auto'>
          
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default ProjectCard