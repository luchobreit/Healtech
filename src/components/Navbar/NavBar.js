import "./NavBar.scss"
import { Link } from "react-router-dom"

function NavBar() {
  return (
<>
    
<nav  className="navbar navbar-expand-sm navbar-light bg-secondary">
  <div className="container-fluid link">
  <Link class="navbar-brand " to="/">
    <img src="/img/Otros/Logos/logo-w-nbg.png"  className='logo-nb'/>
    Salud y rendimiento
  </Link>
  
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <Link to="/hola"  className="nav-link" >Quienes somos</Link>
        <a href="#"  className="nav-link" >Que hacemos</a>
        <a href="#"  className="nav-link" >Contacto</a>
      </div>
    </div>
  </div>
</nav>

</>
  )
}

export default NavBar