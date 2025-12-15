import { Link } from "react-router-dom";


export default function Footer() {
  return (
   <div className="container"> 
   <footer className="py-3 my-4"> 
    <ul className="nav justify-content-center border-bottom pb-3 mb-3"> 
      <li className="nav-item"><Link to="/" className="nav-link px-2 text-body-secondary">Home</Link></li> 
      <li className="nav-item"><Link to="/services" className="nav-link px-2 text-body-secondary">Services</Link></li> 
      <li className="nav-item"><Link to="/barbers" className="nav-link px-2 text-body-secondary">Barbers</Link></li> 
      <li className="nav-item"><Link to="/gallery" className="nav-link px-2 text-body-secondary">Gallery</Link></li> 
      <li className="nav-item"><Link to="/contact" className="nav-link px-2 text-body-secondary">Contact</Link></li> 
      </ul> 
      <p className="text-center text-body-secondary">Andy Li</p> 
      </footer> 
      </div>
  );
}
