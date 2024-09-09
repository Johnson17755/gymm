import Header from "../../Components/Header";
import HeaderImage from '../../images/header_bg_1.jpg';
import StoryImage from '../../images/about1.jpg';
import VisionImage from '../../images/about2.jpg';
import MissionImage from '../../images/about3.jpg';
import "./about.css";


const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate culpa ut dolorem! Suscipit, laboriosam deserunt?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="story"/>
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident dolores facere illo nulla a delectus aspernatur exercitationem, unde mollitia voluptate aut eligendi. Recusandae, aspernatur praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ab, aut, perspiciatis voluptates corporis quidem magnam, qui sit a at atque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint quas praesentium odio inventore ducimus!
          </p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident dolores facere illo nulla a delectus aspernatur exercitationem, unde mollitia voluptate aut eligendi. Recusandae, aspernatur praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ab, aut, perspiciatis voluptates corporis quidem magnam, qui sit a at atque?
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Vision"/>
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="mission"/>
        </div>
        <div className="about__section-content">
          <h1>Our  Mission</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident dolores facere illo nulla a delectus aspernatur exercitationem, unde mollitia voluptate aut eligendi. Recusandae, aspernatur praesentium.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem ab, aut, perspiciatis voluptates corporis quidem magnam, qui sit a at atque?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut sint quas praesentium odio inventore ducimus!
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About