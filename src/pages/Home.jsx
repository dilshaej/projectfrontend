import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LandingImg from '../assets/admin2.png'
import ProjectCard from '../components/ProjectCard'
import { Card } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getHomeProjectsAPI } from '../services/allAPI'
function Home() {
  const [homeProjects,setHomeProjects] = useState([])
  const navigate = useNavigate()
  const [loginStatus,setloginStatus]= useState(false)
  console.log(homeProjects);
useEffect(()=>{
  getHomeProjects()
  if(sessionStorage.getItem("token")){
    setloginStatus(true)
  }else{
    setloginStatus(false)
  }
},[])

const handleProjects = ()=>{
if(loginStatus){
  navigate('/projects')
}else{
 toast.warning("Please login to get full accsess to iour projects!!!") 
}
}

const getHomeProjects = async ()=>{
  try {
    const result = await getHomeProjectsAPI()
    console.log(result);
    if(result.status==200){
      setHomeProjects(result.data)
    }
  } catch (err) {
    console.log(err);
  }
}

  return (
    <>
    <div className='w-100 d-flex justify-content-center align-items-center rounded shadow bg-success' style={{height:'100vh'}}>
<div className='container'>
    <div className="row align-items-center">
        <div className="col-lg-6">
         <h1 style={{fontSize:'70px'}}><i className="fa-brands fa-docker"></i> Project Fair</h1>
         <p style={{textAlign:'justify'}}>One Stop Destination for all Software Development Projects. Where User can add and manage their projects. As well as access all projects available in our website... What are you waiting for!!!

</p>
        { loginStatus ?
         <Link to={'/dashboard'}  className='btn btn-warning'>Manage Your Projects <i class="fa-solid fa-arrow-right"></i></Link>
         :
         <Link to={'/login'}  className='btn btn-warning'>Start to Explore <i class="fa-solid fa-arrow-right"></i></Link>
         
         }
        </div>
        <div className="col-lg-6">
    <img style={{height:'500px'}} src={LandingImg} alt="" />
        </div>
    </div>
</div>
    </div>
    {/* projects */}
    <div className="mt-5 text-center">
        <h1 className='text-center mb-5'>Explore Our Projects</h1>
        <marquee>
          <div className="d-flex">
           {
           homeProjects?.length>0 &&
           homeProjects?.map(project=>(
            <div key={project} className="me-5">
            <ProjectCard displayData={project}/>
        </div>
           )) 
          
            }
          </div>
        </marquee>
        <button onClick={handleProjects} className='btn btn-link mt-3'>Click here to view More Projects...</button>
    </div>
    {/* testimony */}
    <div className="d-flex justify-content-center align-items-center mb-5 mt-5 flex-column">
        <h1>Our Client Testimonials</h1>
        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
        <Card style={{ width: '18rem' }}>
     
      <Card.Body>
        <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
        <Card.Img width={'60px'} height={'60px'} className='rounded-circle img-fluid' variant="top" src="https://cdn.pixabay.com/photo/2020/07/14/13/07/icon-5404125_1280.png" />
        <span>Max Miller</span>
        </Card.Title>
        <Card.Text>
            <div className="d-flex justify-content-center">
            <i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star text-warning"></i>
           <i class="fa-solid fa-star-half-stroke text-warning"></i>
           <i className="fa-solid fa-star "></i>

            </div>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum laboriosam officiis quia tenetur et perferendis beatae soluta deserunt error!.</p>
        </Card.Text>
       
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
     
     <Card.Body>
       <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
       <Card.Img width={'60px'} height={'60px'} className='rounded-circle img-fluid' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXSTblEVkkdJh15jlAbC3FpvuzCKb1o-pQQA&usqp=CAU" />
       <span>Lara Crompt</span>
       </Card.Title>
       <Card.Text>
           <div className="d-flex justify-content-center">
           <i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star "></i>

           </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum laboriosam officiis quia tenetur et perferendis beatae soluta deserunt error!.</p>
       </Card.Text>
      
     </Card.Body>
   </Card>
   <Card style={{ width: '18rem' }}>
     
     <Card.Body>
       <Card.Title className='d-flex justify-content-center align-items-center flex-column'>
       <Card.Img width={'10px'} height={'10px'} className='rounded-circle img-fluid' variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHfd3PPulVSp4ZbuBFNkePoUR_fLJQe474Ag&usqp=CAU" />
       <span>Luke Daniel</span>
       </Card.Title>
       <Card.Text>
           <div className="d-flex justify-content-center">
           <i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star text-warning"></i>
           <i className="fa-solid fa-star "></i>
           <i className="fa-solid fa-star "></i>


           </div>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit voluptatum laboriosam officiis quia tenetur et perferendis beatae soluta deserunt error!.</p>
       </Card.Text>
      
     </Card.Body>
   </Card>
        </div>
        
    </div>
    <ToastContainer position='top-center' theme='colored' autoClose={3000} />
    </>
  )
}

export default Home