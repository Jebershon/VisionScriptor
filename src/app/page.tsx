'use client'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaBackward, FaCopy, FaFacebook, FaInstagram, FaPhone } from 'react-icons/fa'; 
import { FaCameraRetro } from "react-icons/fa";
import { Container,Row,Col,Card } from 'react-bootstrap';
import './pg.css';
import Image from 'next/image';
import a from './Asserts/3d-isometric-monitoring-contactless-delivery-by-robot.gif';
import { FaTwitter } from 'react-icons/fa6';
export default function App() {
  return (
    <>
    <Navbar collapseOnSelect  expand="lg" bg="dark" data-bs-theme="dark" style={{padding:"20px",fontSize:"20px",fontFamily:"monospace",width:'100%'}}>
          <Navbar.Brand>
          <FaCameraRetro />
          </Navbar.Brand>
          <Navbar.Brand href="/">
            VisionScriptor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <center><Nav.Link href="/" className="m-2">Home</Nav.Link></center>
            <center><Nav.Link href="Login" className="m-2">Tools</Nav.Link></center>
            <center><Nav.Link href="https://github.com/Jebershon" className="m-2">About us</Nav.Link></center>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      <Container>
        <Row>
          <Col lg={4}>
             <Card className='bg m-3'>
              <Image src={a} 
              width={200}
              height={200}
              alt="Picture of the author"
              style={{alignSelf:"center"}}
              />
              <Card.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga at, quae pariatur nihil non quisquam possimus perspiciatis illum nobis itaque rem facilis iure temporibus recusandae expedita, delectus quos. Omnis, ipsum!
               </Card.Body>
             </Card>
          </Col>
          <Col lg={4}>
             <Card className='bg m-3'>
             <Image src={a}
             width={200}
             height={200}
             alt="Picture of the author"
             style={{alignSelf:"center"}}
             />
             <Card.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga at, quae pariatur nihil non quisquam possimus perspiciatis illum nobis itaque rem facilis iure temporibus recusandae expedita, delectus quos. Omnis, ipsum!
               </Card.Body>
             </Card>
          </Col>
          <Col lg={4}>
             <Card className='bg m-3'>
             <Image src={a}
             width={200}
             height={200}
             alt="Picture of the author"
             style={{alignSelf:"center"}}
             />
             <Card.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga at, quae pariatur nihil non quisquam possimus perspiciatis illum nobis itaque rem facilis iure temporibus recusandae expedita, delectus quos. Omnis, ipsum!
               </Card.Body>
             </Card>
          </Col>
        </Row>
        <Row>
        <Card className='bg m-3'>
             <Image src={a}
             width={200}
             height={200}
             alt="Picture of the author"
             style={{alignSelf:"center"}}
             />
             <Card.Body>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga at, quae pariatur nihil non quisquam possimus perspiciatis illum nobis itaque rem facilis iure temporibus recusandae expedita, delectus quos. Omnis, ipsum!
               </Card.Body>
             </Card>
        </Row>
      </Container>
      <footer>
        <Card className='foot'>
           <div style={{marginTop:"10px",fontWeight:"500",fontVariant:"small-caps"}}>Contact us</div>
           <hr/>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat enim minima cupiditate est nobis quis quibusdam vero cum deleniti quia autem, obcaecati sint fugit velit quas, esse assumenda blanditiis.
           Accusantium, voluptates quam reiciendis repudiandae dicta voluptatum excepturi delectus in explicabo repellendus deleniti praesentium molestias accusamus aliquam. Beatae harum, libero perferendis porro atque hic, voluptatem voluptas corrupti animi blanditiis pariatur.
           Culpa fugit quas officia obcaecati quam maiores reiciendis totam dicta cumque repudiandae possimus dolore, sequi minima doloribus libero a ipsa optio quae. Exercitationem est autem ratione excepturi, magnam at veniam.
        <div className='icons'>
        <FaInstagram/>
        <FaFacebook/>
        <FaPhone/>
        <FaTwitter/>
        </div>
        </Card>
      </footer>
      </>
  );
}
