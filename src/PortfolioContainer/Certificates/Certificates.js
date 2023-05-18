import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Certificates.css";
import html from "../../img/Certificates/html.png";
import css from "../../img/Certificates/css.png";
import java from "../../img/Certificates/java.png";
import symfony from "../../img/Certificates/symfony.png";
import shape from "../../img/Certificates/shape-bg.png";
import wordpress from "../../img/Certificates/wordpress.png";

export default function certificates(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Certificates"}
        subHeading={"The certificates I got"}
      />
      <section className="certificates-section" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="certificates-carousel"
              {...options}
            >
              <div className="col-lg-12">
                <div className="certi-item">
                  <div className="certi-img">
                    <img src={html} alt=""/>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="certi-item">
                  <div className="certi-img">
                    <img src={css} alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="certi-item">
                  <div className="certi-img">
                    <img src={java} alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="certi-item">
                  <div className="certi-img">
                    <img src={symfony} alt=""/>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="certi-item">
                  <div className="certi-img">
                    <img src={wordpress} alt=""/>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="image not responding" />
      </div>
    </div>
  );
}
