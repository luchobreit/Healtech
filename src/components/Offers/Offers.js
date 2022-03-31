import Typewriter from "typewriter-effect"
import  AOS  from "aos"
import './Offers.scss'


function Offers() {
  AOS.init();

  return (
    <>
      <h1 className="step-container-title">
          <Typewriter 
              options={{
                  strings: ['¿Que ofrecemos?'],
                  loop: true,
                  pauseFor:4000,
                  delay:60,
                  autoStart:true,
              }}
          />
      </h1>
      <div data-aos="fade-up"
        data-aos-duration="2000"
        className="container container-offer">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <div className="card  bg-danger">
              <img src="/img/Otros/Imagenes/Ofertas/observar.png" alt="lupa" className="card-img-top bg-danger" />
              <div className="card-body bg-danger">
                <h5 className="card-title ">Diagnostico</h5>
                <p className="card-text">Observamos el entorno y junto con los clientes decidimos cual sera el plan a seguir</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 ">
          <div className="card bg-warning">
              <img src="/img/Otros/Imagenes/Ofertas/control.png" alt="atari" className="card-img-top offer-img bg-warning" />
              <div className="card-body bg-warning">
                <h5 className="card-title offer-2">Control</h5>
                <p className="card-text">Una vez tomada la iniciativa decidimos controlar y monitorear lo acordado con los clientes</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4 ">
          <div className="card bg-success">
              <img src="/img/Otros/Imagenes/Ofertas/idea.png" alt="lupa" className="card-img-top  bg-success" />
              <div className="card-body bg-success">
                <h5 className="card-title ">Desarrollo</h5>
                <p className="card-text">Con el monitoreo y el diagnosticoen mano procedemos a realizar un plan de accion a largo plazo </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
    </>
  )
}

export default Offers