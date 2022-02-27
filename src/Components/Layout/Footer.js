import { useNavigate } from "react-router-dom";
import strings from "../../localization";
import './footer.scss'

const Footer = () => {

  const navigate = useNavigate();

  const handleNavigateHomee = () => {
    navigate('/');
  }
  const handleNavigateServices = () => {
    navigate('/services');
  }
  const handleNavigateProjects = () => {
    navigate('/projects');
  }
  const handleNavigateContact = () => {
    navigate('/contact');
  }
  const handleNavigateAboutUs = () => {
    navigate('/about-us')
  }
  
  return <footer id='main-footer'>
    <div className='footer-contained'>
      <div className='footer-wraper'>
        <div className='footer-item'>
          <h3>{strings.pages.contact.pageTitle}</h3>
          <div className='footer-content'>
            <p>
              <a>
                {strings.footer.askUs}
              </a>
              <a href='mailto:gipsplaatrenovatie@gmail.com'>
                {strings.footer.email}
              </a>
            </p>
          </div>
        </div>
        <div className='footer-item'>
          <h3>{strings.footer.website}</h3>
          <div className='footer-content'>
            <p>
              <a>
                {strings.footer.aboutUs}
              </a>
            </p>
          </div>
        </div>
        <div className='footer-item'>
          <h3>{strings.footer.menu}</h3>
          <div className='footer-content'>
            <p>
              <a onClick={() => handleNavigateHomee()}>
                {strings.navigation.home}
              </a>
              <a onClick={() => handleNavigateServices()}>
                {strings.navigation.services}
              </a>
              <a onClick={() => handleNavigateProjects()}> 
                {strings.navigation.project}
              </a>
              <a onClick={() => handleNavigateAboutUs()}>
                {strings.navigation.referecnes}
              </a>
              <a onClick={() => handleNavigateContact()}>
                {strings.navigation.contact}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;