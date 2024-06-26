'use client'
import { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './Asserts/logo-white.png';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaBackward, FaCopy } from 'react-icons/fa'; 
import { FaCameraRetro } from "react-icons/fa";
import './Tool.css';
import Image from 'next/image';

function Loader(){
  return (
    <>
		<div className="socket">
			<div className="gel center-gel">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c1 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c2 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c3 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c4 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c5 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c6 r1">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			
			<div className="gel c7 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			
			<div className="gel c8 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c9 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c10 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c11 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c12 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c13 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c14 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c15 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c16 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c17 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c18 r2">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c19 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c20 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c21 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c22 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c23 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c24 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c25 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c26 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c28 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c29 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c30 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c31 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c32 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c33 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c34 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c35 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c36 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
			<div className="gel c37 r3">
				<div className="hex-brick h1"></div>
				<div className="hex-brick h2"></div>
				<div className="hex-brick h3"></div>
			</div>
		</div>
    </>
  );
}
export default function Home() {
  const [show, setShow] = useState(false);
  const[display,setDisplay] = useState(false);
  const textToCopy = "Woohoo, you are reading this text in a modal!";
  const [isCopied, setIsCopied] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () =>{
    setTimeout(()=>{setDisplay(true)},3000);
    setTimeout(()=>{setDisplay(false)},6000);
    setTimeout(()=>{setShow(true)},8000);
  };

  const handleCopy = () => {
    const tempElement = document.createElement('textarea');
    tempElement.value = textToCopy;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
};
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
            <center><Nav.Link href="Tool" className="m-2">Tools</Nav.Link></center>
            <center><Nav.Link href="https://github.com/Jebershon" className="m-2">About us</Nav.Link></center>
          </Nav>
          <Nav>
          <center><Nav.Link href="/" className="m-2"><FaBackward/></Nav.Link></center>
          </Nav>
          </Navbar.Collapse>
      </Navbar>
      {display?
      <Loader/>
      :
      <div className="container">
         <Container className="title">
         <center><h1>Image Text Reader</h1></center>
         </Container>
          <div className="align">
          <Container className="div1">
          <label className="custum-file-upload">
            <div className="icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24"><g stroke-width="0" id="SVGRepo_bgCarrier"></g><g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"> <path fill="" d="M10 1C9.73478 1 9.48043 1.10536 9.29289 1.29289L3.29289 7.29289C3.10536 7.48043 3 7.73478 3 8V20C3 21.6569 4.34315 23 6 23H7C7.55228 23 8 22.5523 8 22C8 21.4477 7.55228 21 7 21H6C5.44772 21 5 20.5523 5 20V9H10C10.5523 9 11 8.55228 11 8V3H18C18.5523 3 19 3.44772 19 4V9C19 9.55228 19.4477 10 20 10C20.5523 10 21 9.55228 21 9V4C21 2.34315 19.6569 1 18 1H10ZM9 7H6.41421L9 4.41421V7ZM14 15.5C14 14.1193 15.1193 13 16.5 13C17.8807 13 19 14.1193 19 15.5V16V17H20C21.1046 17 22 17.8954 22 19C22 20.1046 21.1046 21 20 21H13C11.8954 21 11 20.1046 11 19C11 17.8954 11.8954 17 13 17H14V16V15.5ZM16.5 11C14.142 11 12.2076 12.8136 12.0156 15.122C10.2825 15.5606 9 17.1305 9 19C9 21.2091 10.7909 23 13 23H20C22.2091 23 24 21.2091 24 19C24 17.1305 22.7175 15.5606 20.9844 15.122C20.7924 12.8136 18.858 11 16.5 11Z" clip-rule="evenodd" fill-rule="evenodd"></path> </g></svg>
            </div>
            <div className="text">
              <span>Click to upload image</span>
              </div>
              <input type="file" id="file"  onClick={handleShow}/>
          </label>
          </Container>
          </div>
      </div>
      }
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Copy Text</Modal.Title>
        </Modal.Header>
        <Modal.Body className="div2">
                {textToCopy}
                <button
                    onClick={handleCopy}
                    style={{
                        marginLeft: '10px',
                        border: 'none',
                        background: 'transparent',
                        cursor: 'pointer',
                    }}
                >
                    {/* Display different icon colors based on whether text has been copied */}
                    <FaCopy color={isCopied ? 'aquamarine' : 'white'} />
                </button>
            </Modal.Body>
      </Modal>
      </>
    );
  }