import Typewriter from 'typewriter-effect';
import "./Steps.scss"

function Steps() {
  return (
    <div className='steps-container'>
      <h1 className="step-container-title">
        <Typewriter
            options={{
                strings: ['¿Como nos manejamos?'],
                loop: true,
                pauseFor:4000,
                delay:60,
                autoStart:true,
            }}
        />
      </h1>
      <div className="step step-2">  
              <img className="step-gif" src="/img/Otros/Imagenes/Steps/trip.gif" alt="Heart" />
              <div className="step-text">
                  <h1 className='step-titulo'>Reconocimiento</h1>
                  <p className='step-p'>Para empezar el proceso nos dirigimos al lugar donde se dara lugar a la instalacion y diseñamos un plan para llevar a cabo</p>
              </div>
      </div>

      <div className="step step-1">  
              <img className="step-gif" src="/img/Otros/Imagenes/Steps/worker.gif" alt="Heart" />
              <div className="step-text">
                  <h1 className='step-titulo'>Instalacion</h1>
                  <p className='step-p'> Luego de haber realizado en plan nos ponemos manos a la obra e instalamos los sensores</p>
              </div>
      </div>

      <div className="step step-1">  
              <img className="step-gif" src="/img/Otros/Imagenes/Steps/pc.gif" alt="Heart" />
              <div className="step-text">
                  <h1 className='step-titulo'>Adaptacion del Software</h1>
                  <p className='step-p'> Finalmente adaptamos el software y lo instalamos en los dispositivos</p>
              </div>
      </div>

    </div>
  )
}

export default Steps