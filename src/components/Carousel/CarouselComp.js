import "./CarouselComp.scss"
import Carousel from 'react-bootstrap/Carousel'

function CarouselComp() {
  return (
<>
<Carousel fade >
  <Carousel.Item className="CarouselComp" >
    <img
      className="h-100 w-100 " 
      src="/img/Otros/Imagenes/Carousel/hospital.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className="carousel-text-h3">Hospitales</h3>
      <p className="carousel-text-p" >Previene infecciones intrahospitalarias</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="CarouselComp" >
    <img
      className="h-100 w-100"
      src="/img/Otros/Imagenes/Carousel/office.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h1 className="carousel-text-h3">Oficinas</h1>
      <p className="carousel-text-p">Mejora el rendimiento laboral</p>
    </Carousel.Caption>
    
  </Carousel.Item>
  <Carousel.Item className="CarouselComp" >
    <img
      className="h-100 w-100"
      src="/img/Otros/Imagenes/Carousel/home.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h1 className="carousel-text-h3">Hogar</h1>
      <p className="carousel-text-p">Manten una vida mas sana</p>
    </Carousel.Caption>
    
  </Carousel.Item>
</Carousel>
</>
  )
}

export default CarouselComp