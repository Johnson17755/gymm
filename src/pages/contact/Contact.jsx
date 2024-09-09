import Header from '../../Components/Header';
import HeaderImage from '../../images/header_bg_2.jpg';
import { MdEmail } from 'react-icons/md';
import { BsMessenger } from 'react-icons/bs';
import { IoLogoWhatsapp } from 'react-icons/io';
import "./contact.css";

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt esse quo, voluptate iure praesentium ut non veritatis numquam eos voluptatum?
    </Header>

    <section>
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:support@otuoghajohnson.com" target='_blank' rel='noreferrer noopener'><MdEmail/></a>
          <a href="http://n.me/faceurl" target='_blank' rel='noreferrer noopener'><BsMessenger/></a>
          <a href="https://wa.me/+2347060828640" target='_blank' rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact