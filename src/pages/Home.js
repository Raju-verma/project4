import Section from "../componant/Header";
import "./Home.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sections from "./section";
import Gallery from "../componant/footer";
import Button from "../componant/button";

function Homes(){
    return(
        <>
        <Section/>

       <h1>Unlimited movies, TV shows and more</h1>
       <h2>Watch anywhere. Cancel anytime.</h2>
       <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
       <Container >
      <Row>
        <Col className="button"><input type="text"></input></Col>
        <Col><button>Get Started</button></Col>
      </Row>
    </Container>
    <br></br>
    <Sections/>
    <br></br>
    <Gallery/>
    <Button/>
       </>
       
    );
}
export default Homes;