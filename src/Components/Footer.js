// Footer component for footer section
// import {arshad} from './Components/x'
const Footer = () => {
    const year = new Date().getFullYear();
    return (
      <div className="footer">
        Created By

        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/arshad010/" target="_blank">
            Arshad iqbal
        </a>
        <i className="fa-solid fa-copyright"></i>
        {year}
        <strong>
          Food<span>Fire</span>
        </strong>
      </div>
    );
  };
  
  export default Footer;