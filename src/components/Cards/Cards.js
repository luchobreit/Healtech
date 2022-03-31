import './Cards.scss'
import AOS from 'aos';
import Typewriter from 'typewriter-effect';


function Cards() {
    AOS.init();
  return (
<>
    <div className="cards-container">
        <h1 className="cards-container-title">
        <Typewriter
            options={{
                strings: ['¿Por que invertir en el monitereo?'],
                loop: true,
                pauseFor:6000,
                delay:60,
                autoStart:true,
            }}
        />
        </h1>

    </div>
        <div data-aos="flip-right" className="card-div">
            <img className="card-imgs" src="/img/Otros/Imagenes/Cards/prevents.png" alt="Heart" />
            <div className="card-text">
                <h1 className='card-titulo'>Mejora la calidad de vida</h1>
                <p className='card-p'>Mediante el control estricto de los parametros del aire se pueden mejorar muchos aspectos de la vida</p>
            </div>
            
        </div>
    <div className="cards-container">
        <div data-aos="flip-left" className="card-div">
            <div className="card-text">
                <h1 className='card-titulo'>Mejora el rendimiento</h1>
                <p className='card-p'>Esta demostrado que una buena calidad aire aumenta el rendimiento de trabajo, estudio y deportivo</p>
            </div>
            <img className="card-imgs" src="/img/Otros/Imagenes/Cards/stats.png" alt="Heart" />
            
        </div>
    </div>
    <div className="cards-container">
        <div data-aos="flip-right" className="card-div">
            <img className="card-imgs" src="/img/Otros/Imagenes/Cards/rocket.png" alt="Heart" />
            <div className="card-text">
                <h1 className='card-titulo'>Y muchos beneficios más </h1>
                <p className='card-p'>Entre otros beneficios mejora el sueño, ayuda a la digestion, previene infecciones, ayuda a mantener un buen estado de animo y entre otros</p>
            </div>
            
        </div>
    </div>
        
</>
  )
}

export default Cards