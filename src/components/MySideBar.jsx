import { Col, Container, Nav } from "react-bootstrap";
import { Book, HouseFill, Search } from "react-bootstrap-icons";
import "./MySideBar.css";

const MySideBar = () => (

    <Container fluid style={{background: "black"}} >
        <Col>
            <Nav id="sideNav">
                <div>
                <Nav.Link href="#" className="mt-2" >
                    <img src="/Spotify_Logo_CMYK_White.png" 
                    style={{width: "10rem"}} 
                    alt="" />
                </Nav.Link>

              
                <Nav.Link href="#" style={{color: "white"}} >
                    <HouseFill size={25} style={{marginRight: "1rem"}} />
                    Home
                </Nav.Link>

                <Nav.Link style={{color: "white"}} href="#">
                    <Search size={25} style={{marginRight: "1rem"}} />
                    Search
                </Nav.Link>

                <Nav.Link style={{color: "white"}} href="#">
                    <Book size={25} style={{marginRight: "1rem"}} />
                    Your library
                </Nav.Link>
                </div>

               <div  >
                <Nav.Link
                    type="button"
                    href="#"                    
                    className="btn btn-light pt-1 "
                    style={{ width: "10rem", 
                    borderRadius: "1rem", height: "2.2rem"}}
                    >
                    SIGN UP
                </Nav.Link>
               
                <Nav.Link                   
                    type="button"
                    href="#"
                    className="btn btn-outline-light pt-1"
                    style={{ width: "10rem", 
                    borderRadius: "1rem", height: "2.2rem"}}
                    >
                LOGIN
                </Nav.Link>

                <Nav.Link style={{color: "white"}} className="cookies p-0">Cookie | Privacy</Nav.Link>
                <Nav.Link style={{color: "white"}} className="cookies p-0">Policy</Nav.Link>
                </div>
            </Nav>
            
        </Col>
    </Container>
           
)

export default MySideBar;