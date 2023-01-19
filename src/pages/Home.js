import "../styles/home-style.css";
import pic from "../assets/pic1.png";

const Home = () => {
  return (
    <div className="home-body">
      {/* intro section */}

      <section className="intro container-fluid">
        <div className="row">
          <div className="intro-left col-lg-6">
            <h1>Bringing Design</h1>
            <br />
            <h2>to life</h2>
          </div>

          <div className="intro-right col-lg-6">
            <p>
              Our canvas is broad and we look forward to fill it with many of
              your success stories!! Our focus is on web and mobile design and
              our passion is to design unique, strategic and elegant interfaces!
              Let us transform your story into a visual treat and make your
              brand a force to reckon with!
            </p>
          </div>
        </div>
      </section>

      {/* second section */}

      <section className="second-container container-fluid">
        <img src={pic} alt="the pics" />
      </section>

      {/* third section */}

      <section className="third-section container-fluid">
        <div className="about">
          <h1>About us</h1>
          <p>
            With an aim to excel in the IT and Digital Solutions, we are a
            Bangalore Based IT and Services Company that focuses on delivering
            state-of-the-art customized digital products and web and mobile
            design solutions to our clients. Digitalization is the key mantra in
            enhancing and efficiency running a business in today’s scenario and
            that our USP. We have an excellent team of highly competent and
            empowered professionals who choose quality over quantity and treat
            each project as the most important one yet! We love what we do and
            that reflects in the services we provide!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
