import Head from 'next/head'
import Script from 'next/script'
import Image from 'next/image'
import { Chau_Philomene_One, Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Layout from '@/components/layout'
import heroImg from '../Hero-Image.png'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';
import {BiCodeAlt} from "react-icons/bi"
import {AiFillCode} from "react-icons/ai"
import {IoMdSettings} from "react-icons/io"
import proj1 from "../projects/ecom.png"
import proj2 from "../projects/Blog.png"
import proj3 from "../projects/Car-rental.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react'
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [nInput, setNInput] = useState('');
  const [eInput, setEInput] = useState('');
  const [mInput, setMInput] = useState('');
  const api = 'https://abde-ba-messages.glitch.me/';
  
 
  const handleMessage = async () => {
    try{
    if(nInput === "" || eInput === "" || mInput === ""){
      return alert("Please fill all of the fields.")
    } if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(eInput)){
      return alert("Invalid Email.")
    }
     await axios.post(`${api}/api/message?fullname=${nInput}&email=${eInput}&message=${mInput}`, )
    
     localStorage.setItem('msg-direction', '987654321')
     location.replace('/message')
    } catch(err){
      console.log(err);
    }
    
  }
  return (
    <>
      <Head>
        <title>Abdelhakim Baraka</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav.ico" />
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
        

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
          integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
          crossorigin="anonymous"
        />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
        
          
      </Head>

      <Script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></Script>
        <Script src="https://code.jquery.com/jquery-3.6.3.min.js"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></Script>
        <Script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></Script>

        <Script
          src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
          crossorigin></Script>

        <Script
          src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
          crossorigin></Script>


      <Layout>
      <div>
        <div className='hero-section'>
        <Container>
        <Row>
        <Col md={4} sm={7}>
        <div className='hero-text-section'>
        
            <h1 className='w3-animate-opacity'>
              My name is <span>Abdelhakim Baraka</span>,
              <Carousel  controls={false}>
                <Carousel.Item>
                    <h2 className='w3-animate-opacity'>I am a <span>Web Developer</span></h2>
                </Carousel.Item>
                <Carousel.Item>
                <h2 className='w3-animate-opacity'>I am a <span>Web Designer</span></h2>
                </Carousel.Item>
              </Carousel>
            </h1>
        
        </div>
        </Col>
        <Col>
        
        <div className='hero-image-section' >
        <Image 
          src={heroImg}
          className='w3-animate-opacity'
        />
        </div>
        </Col>
        </Row>
        </Container>
        </div>
        
        <div className='about-section' id='about'>
          <Container>
          <AnimationOnScroll animateIn="animate__zoomIn" animateOnce={true}>
          <h1 >About Me</h1>
          <h3>I am Abdelhakim Baraka from Morocco, and I am a full-stack developer with more than 5 years of experience in the field of web development.
I am passionate about building web apps and how the internet works, as  I like to learn new technologies and skills.
          </h3>
          </AnimationOnScroll>
          </Container>
        </div>
        
        <span id='services'></span>
        <div className='skills' >
          
          <Container>
          <h1>My Services</h1>
          <Row>
            <Col md={4}>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true}>
            <div>
            <BiCodeAlt />
            <h3>FrontEnd Developer</h3>
            <p>For Frontend development, I am familiar with HTML, CSS, Javascript, jQuery, Reactjs, Nextjs, Gatsbyjs, Bootstrap, and Material UI.</p>
            </div>
            </AnimationOnScroll>
            </Col>
            <Col>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={500}>
            <div>
            <AiFillCode />
            <h3>BackEnd Developer</h3>
            <p>For Backend development, I am familiar with Nodejs, Expressjs, MongoDB, StrapiCMS, PrismicCMS, and PayloadCMS.</p>
            </div>
            </AnimationOnScroll>
            </Col>
            <Col>
            <AnimationOnScroll animateIn="animate__fadeInLeft" animateOnce={true} delay={1000}>
            <div>
            <IoMdSettings />
            <h3>DevOps</h3>
            <p>For DevOps, I am familiar with Linux, the configuration of the application, and the deployment of the application in platforms such as Github, Netlify, Gatsby Cloud, and AWS.</p>
            </div>
            </AnimationOnScroll>
            </Col>
          </Row>
          </Container>
        </div>
        <span id='projects'></span>
        <div className='projects' >
          <Container>
          <h1>My Projects</h1>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div className="project1">
          <Image 
            src={proj1}
          />
          <h3>Ecommerce Project</h3>
          <a href='https://abde-ecom.vercel.app/'>See The Project</a>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div className="project1">
          <Image 
            src={proj2}
            className="tab-img"
          />
          <h3>Blog Project</h3>
          <a href='https://abdeblog.gatsbyjs.io/'>See The Project</a>
          </div>
          </AnimationOnScroll>
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div className="project1">
          <Image 
            src={proj3}
            className="lap-img"
          />
          <h3>Cars Project</h3>
          <a href='http://carrentalma.online/'>See The Project</a>
          </div>
          </AnimationOnScroll>
          </Container>
        </div>
        <div className='contact' id='contact'>
          <Container>
          <h1>Contact Me</h1>
          
          <div className='contact-form'>
          <Container>
          <Form>
          <Row>
            <Col>
              <Form.Control type="text" placeholder="Enter your name" onChange={(e) => setNInput(e.target.value)} />
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEInput(e.target.value)} />
              
              <Form.Group>
                <Form.Control as="textarea" type='text' placeholder='Message' onChange={(e) => setMInput(e.target.value)} />
              </Form.Group>
              <Form.Group>
            <Button variant="primary" onClick={handleMessage}>
              Submit
            </Button>
            </Form.Group>
            </Col>
              </Row>
          </Form>
          </Container>

          
          </div>
          </Container>
        </div>
      </div>
      
      </Layout>
    </>
   
  )
}
