import "./Home.css";
import prideImg from "./../../images/1.png";
import ingredientsImg from "./../../images/2.png";
import Data from "../../Data";
import { Carousel } from "react-bootstrap";
import male from "./../../images/2.jpg";
import female from "./../../images/1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDribbble, faFacebookF, faLinkedinIn, faSquareInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";

const Home = () => {
  const blogItem = Data.map((item) => {
    return (
      <>
        <div className="col-md-4">
          <img src={item.img} />
          <h4>{item.title}</h4>
          <p>Time: {item.time} Minutes | Serves: 1</p>
          <h5>{item.price}</h5>
          <button>Order Now</button>
        </div>
      </>
    );
  });
  return (
    <>
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h2>1287+</h2>
              <h6>Savings</h6>
            </div>
            <div className="col-md-3">
              <h2>5786+</h2>
              <h6>Photo</h6>
            </div>
            <div className="col-md-3">
              <h2>1440+</h2>
              <h6>Rockets</h6>
            </div>
            <div className="col-md-3">
              <h2>7110+</h2>
              <h6>Globes</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="pride">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={prideImg} title="Pride Img" />
            </div>
            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>
                <a>Learn More</a>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="ingredients">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <button>
                <a>Learn More</a>
              </button>
            </div>
            <div className="col-md-6">
              <img src={ingredientsImg} title="Img Ingredients" />
            </div>
          </div>
        </div>
      </section>
      <section className="stomach">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>
                When a man's stomach is full it makes no difference whether he
                is rich or poor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <a href="#">Watch Our Story</a>
            </div>
          </div>
        </div>
      </section>
      <section className="explore">
        <div className="container">
          <div className="row">
            <h2>Explore Our Foods</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et
              purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat
              tellus. Far far away, behind the word mountains, far from the
              countries Vokalia and Consonantia, there live the blind texts.
              Separated they live in Bookmarksgrove.
            </p>
            {blogItem}
          </div>
        </div>
      </section>
      <section className="slider">
        <h2>Testimonials</h2>
        <div className="container">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img src={female} alt="First slide" />
              <Carousel.Caption>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
                <h5>First slide label</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={male} alt="Second slide" />
              <Carousel.Caption>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                <h5>Second slide label</h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img src={female} alt="Third slide" />
              <Carousel.Caption>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
                <h5>Third slide label</h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
      <section className="question">
        <h2>Frequently Asked Questions</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Is Foodera Bread really baked fresh each day?</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Do you bake breads containing animal fats or products?</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Can I order your products online?</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language.
              </p>
            </div>
            <div className="col-md-6">
              <h3>When are you opening a shop near me?</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="overlay">
        <section className="passion">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h2>Baked fresh daily by bakers with passion.</h2>
              </div>
              <div className="col-md-6">
                <button>Learn More</button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <section className="contact">
        <div className="container">
          <h2>Hurry up! Subscribe our newsletter and get 25% Off</h2>
          <p>Limited time offer for this month. No credit card required.</p>
        </div>
        <input type="email" placeholder="Email Address Here"></input>
        <button>Subscribe</button>
      </section>
      <section className="footer">
        <div className="container">
          <div className="article">
            <span>Register</span>
            <span>Forum</span>
            <span>Affiliate</span>
            <span>FAQ</span>
          </div>
          <div className="icons">
            <span>
              <FontAwesomeIcon icon={faFacebookF} />
            </span>
            <span>
              <FontAwesomeIcon icon={faTwitter} />
            </span>
            <span>
              <FontAwesomeIcon icon={faYoutube} />
            </span>
            <span>
              <FontAwesomeIcon icon={faDribbble} />
            </span>
            <span>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </span>
            <span>
              <FontAwesomeIcon icon={faSquareInstagram} />
            </span>
          </div>
          <p>&copy; 2021. Foodera. All rights reserved.</p>
        </div>
      </section>
    </>
  );
};

export default Home;
