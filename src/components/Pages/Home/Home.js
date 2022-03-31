import Cards from "../../Cards/Cards"
import CarouselComp from "../../Carousel/CarouselComp"
import Steps from "../../HIW/Steps"
import Offers from "../../Offers/Offers"
import "./Home.scss"
function Home() {
  return (
<div className="home-container">
    <CarouselComp/>
    <Offers/>
    <Cards/>
    <Steps/>
</div>    
  )
}

export default Home