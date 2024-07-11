import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import "./section.css";

function Sections() {
  return (
    <Carousel className="pushpa">
      <Carousel.Item>
        {/* <ExampleCarouselImage text="First slide" /> */}
        <div style={{height:"100vh",width:"100%"}}></div>
        <Carousel.Caption>
          <img src="https://www.jansatta.com/wp-content/uploads/2024/04/Pushpa-2-Teaser-Release-Allu-Arjun.jpg"></img>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <div style={{height:"100vh",width:"100%"}}></div>
        <Carousel.Caption>
         <img src="https://stat4.bollywoodhungama.in/wp-content/uploads/2024/06/Kalki-2898-AD.jpeg"></img>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <div style={{height:"100vh",width:"100%"}}></div>
        <Carousel.Caption>
          <img src="https://i.ytimg.com/vi/Rg4_lKdky-Q/maxresdefault.jpg"></img>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sections;