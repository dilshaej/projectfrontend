import React, { useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function ProjectCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
        <Card className='shadow  btn' style={{ width: '18rem' }}>
      <Card.Img height={'200px'} variant="top" onClick={handleShow} src="https://cdni.iconscout.com/illustration/premium/thumb/admin-panel-4439228-3728455.png" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
       
       
      </Card.Body>
    </Card>
   
    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="row">
                <div className="col-lg-6">
                    <img className='img-fluid' src="https://s3-ap-south-1.amazonaws.com/static.awfis.com/wp-content/uploads/2017/07/07184649/ProjectManagement.jpg" alt="" />
                </div>
                <div className="col-lg-6">
                  <h3>Project Title</h3>
                  <h6><span className='fw-bolder'>Languages Used :</span> HTML,CSS,JS</h6>
                  <p style={{textAlign:'justify'}}><span className='fw-bolder'>Overview:</span> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe maiores nulla quas quo assumenda possimus libero eum voluptatibus, est repellendus, iusto eos quod molestias expedita praesentium at, optio quae velit!</p>
                </div>
            </div>
            
            <div className="float-start mt-2">
            <a href={'https://github.com/'} target='_blank' className='btn btn-secondary' onClick={handleClose}>
            <i className='fa-brands fa-github'></i>
          </a>
          <a href={'https://project-fair-react-june23.vercel.app/projects'} target='_blank' className='btn btn-secondary ms-2'  onClick={handleClose}>
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