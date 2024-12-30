import "../styless/Footerstyles.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import XIcon from '@mui/icons-material/X';

function Footercomponents() {
  return (
    <>
     <footer className="footer" > 
        <ul className="menu">

          <li>
            <a href=""className="menu-icon"> <FacebookIcon /> </a>
          </li>
          <li >
            <a href=""className="menu-icon"> <WhatsAppIcon /> </a>
          </li>
          <li >
            <a href=""className="menu-icon"> <InstagramIcon className="nn"/> </a>
          </li>
          <li >
            <a href=""className="menu-icon"> <EmailIcon /> </a>
          </li>
          <li >
            <a href=""className="menu-icon"> <XIcon /> </a>
          </li>


        </ul>
          <p className="text"> @ShaqVeyter | Todos los derechos reservados </p>
     </footer>
       
    </>
  )
}

export default Footercomponents;