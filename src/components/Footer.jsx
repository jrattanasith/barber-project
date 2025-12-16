import { Link } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';


export default function Footer() {
  return (
   <div className="container"> 
   <footer className="footer py-3 my-4">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3"> 
      <li className="nav-item"><Link to="/" className="nav-link px-2 ">Home</Link></li> 
      <li className="nav-item"><Link to="/services" className="nav-link px-2 ">Services</Link></li> 
      <li className="nav-item"><Link to="/barbers" className="nav-link px-2 ">Barbers</Link></li> 
      <li className="nav-item"><Link to="/gallery" className="nav-link px-2 ">Gallery</Link></li> 
      <li className="nav-item"><Link to="/contact" className="nav-link px-2 ">Contact</Link></li> 
      </ul> 
      <p className="text-center">
        <a href="https://www.instagram.com/barberxandy/"
          target="_blank"
          rel="noopener noreferrer"
          style={{color: 'inherit'}}
        >
        <InstagramIcon fontSize="large"/>
        
        </a>
        
      </p> 
      </footer> 
      </div>
  );
}
