import React, { useState } from 'react'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


function Authentication({insideRegister}) {
  const [userInputs,setUserInputs] = useState({
    username : "", email: "", password:""

  })
  console.log(userInputs);
  const handleRegister = (e)=>{
   e.preventDefault()
   if(userInputs.username && userInputs.email && userInputs.password){
    // api call

   }else{
    toast.info("Please fill the form completely!!!")

   }
  }
  return (
    <div style={{width:'100%',height:'100vh'}} className='d-flex justify-content-center align-items-center'>
        <div className="container w-75">
            <Link to={'/'} style={{textDecoration:'none'}} className='fw-bolder'>Back to Home <i class="fa-solid fa-arrow-right"></i></Link>
            <div className="card shadow p-5">
                <div className="row">
                    <div className="col-lg-6">
                      <img height={'400px'} src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" />
                    </div>
                    <div className="col-lg-6">
                       <h1 className='fw-bolder mt-2'>
                       <i className="fa-brands fa-docker"></i>Project Fair
                       </h1>
                       <h5 className='fw-bolder mt-2'>
                        Sign {insideRegister? 'up':'in'} to your Account
                       </h5>
                   { insideRegister?
                   
                   <Form>
                    
                           <FloatingLabel
            controlId="floatingInput"
            label="Email address"
            className="mb-3"
          >
            <Form.Control  value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})} type="email" placeholder="name@example.com" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control  value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})} type="password" placeholder="Password" />
          </FloatingLabel>
                    </Form>
                    :
                    <Form>
                         <FloatingLabel
            controlId="floatingInput"
            label="Username"
            className="mb-3"
          >
            <Form.Control value={userInputs.username} onChange={e=>setUserInputs({...userInputs,username:e.target.value})} type="text" placeholder="Username" />
          </FloatingLabel>
                    <FloatingLabel
     controlId="floatingInput"
     label="Email address"
     className="mb-3"
   >
     <Form.Control  value={userInputs.email} onChange={e=>setUserInputs({...userInputs,email:e.target.value})} type="email" placeholder="name@example.com" />
   </FloatingLabel>
   <FloatingLabel controlId="floatingPassword" label="Password">
     <Form.Control  value={userInputs.password} onChange={e=>setUserInputs({...userInputs,password:e.target.value})}type="password" placeholder="Password" />
   </FloatingLabel>
             </Form>
                    }
      {
        insideRegister?
        <div className="mt-3">
            <button className='btn btn-primary'>Login</button>
        <p>Already have an Account? Click here to <Link className='text-info' to={'/login'}>Login</Link></p>
        </div>
        :
        <div className="mt-3">
            <button onClick={handleRegister} className='btn btn-primary'>Register</button>
        <p>New User? Click here to<Link className='text-info' to={'/register'}>Register</Link></p>
        </div>
      }
                    </div>
                </div>
            </div>

        </div>
        <ToastContainer position='top-center' theme='colored' autoClose={3000}  />
        </div>
  )
}

export default Authentication