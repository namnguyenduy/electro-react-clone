import React from "react";
import "../partner/Partner.scss";
import Slider from "react-slick";
import { Container } from "reactstrap";
import { partner } from "../../fakeData";
export default function Partner() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="partnerWrapper">
      <Container>
        <Slider {...settings}>
          {partner.map((e) => (
            <div className="partnerItem">
              <img src={e.img} alt="" />
            </div>
          ))}
        </Slider>
      </Container>
    </div>
  );
}
