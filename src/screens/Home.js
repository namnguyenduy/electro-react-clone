import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  Container,
  Row,
  Col,
  Progress,
} from "reactstrap";
import CountdownTimer from "react-component-countdown-timer";
// import my component
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../Home.scss";

export default function Home() {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel
  const CarouselInfo = [
    {
      caption: "Sample Caption One",
      src: require("../assets/images/carousel/slider1.webp").default,
      altText: "Slide One",
    },
    {
      caption: "Sample Caption Two",
      src: require("../assets/images/carousel/slider2.webp").default,
      altText: "Slide Two",
    },
    {
      caption: "Sample Caption Three",
      src: require("../assets/images/carousel/slider3.webp").default,
      altText: "Slide Two",
    },
  ];
  // Items array length
  const itemLength = CarouselInfo.length - 1;

  // Previous button for Carousel
  const previousButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  // Next button for Carousel
  const nextButton = () => {
    if (animating) return;
    const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  // Carousel Item Data
  const carouselItemData = CarouselInfo.map((item) => {
    return (
      <CarouselItem
        key={CarouselInfo.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img src={CarouselInfo.src} alt={CarouselInfo.altText} />
      </CarouselItem>
    );
  });

  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
      {/*  carouse */}
      <div
        className="mainContent"
        // style={{ background: "tomato", height: "100vh" }}
      >
        <div className="homeMainContent">
          {/* home slideshow */}
          <div className="homeSlideShow">
            <Container fluid>
              <Carousel
                previous={previousButton}
                next={nextButton}
                activeIndex={activeIndex}
                className="slideShowWrapper"
              >
                <CarouselIndicators
                  items={CarouselInfo}
                  activeIndex={activeIndex}
                  onClickHandler={(newIndex) => {
                    if (animating) return;
                    setActiveIndex(newIndex);
                  }}
                />
                {carouselItemData}
                <CarouselControl
                  directionText="Prev"
                  direction="prev"
                  onClickHandler={previousButton}
                />
                <CarouselControl
                  directionText="Next"
                  direction="next"
                  onClickHandler={nextButton}
                />
              </Carousel>
            </Container>
          </div>
          {/* section separator */}
          <div className="sectionSeparator"></div>
        </div>
        {/* home banner */}
        <div className="homeBanner">
          <Container>
            <Row>
              {/* item 1 */}
              <Col lg="3">
                <div className="bannerItem">
                  <Link to={"/"}>
                    <img
                      src={require("../assets/images/homeBanner/banner1.webp")}
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
              {/* item 2 */}
              <Col lg="3">
                <div className="bannerItem">
                  <Link to={"/"}>
                    <img
                      src={require("../assets/images/homeBanner/banner2.webp")}
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
              {/* item 3 */}
              <Col lg="3">
                <div className="bannerItem">
                  <Link to={"/"}>
                    <img
                      src={require("../assets/images/homeBanner/banner3.webp")}
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
              {/* item 4 */}
              <Col lg="3">
                <div className="bannerItem">
                  <Link to={"/"}>
                    <img
                      src={require("../assets/images/homeBanner/banner4.webp")}
                      alt=""
                    />
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        {/* tab panel */}
        <div className="tabPanel">
          <Container>
            <div className="tabContentWrapper">
              {/* nav tabs */}
              <div className="navTabWrapper">
                <ul className="navTabs">
                  {/*  Featured */}
                  <li className="navItem">
                    <a href="/" className={clsx("navLink", "active")}>
                      Featured
                    </a>
                  </li>
                  {/*On Sale */}
                  <li className="navItem">
                    <a href="/" className="navLink">
                      On Sale
                    </a>
                  </li>
                  {/* Top Rated */}
                  <li className="navItem">
                    <a href="/" className="navLink">
                      Top Rated
                    </a>
                  </li>
                </ul>
              </div>
              {/* tab content */}
              <div className="tabContent">
                <div className="tabsSpecialProduct">
                  <div className="productWrapper">
                    {/* product head */}
                    <div className="productHead">
                      <span className="specialOfferText">
                        Special
                        <br /> Offer
                      </span>
                      <Link to={"/"}>
                        <img
                          src={require("../assets/images/specialProduct.webp")}
                          alt=""
                        />
                      </Link>
                      <span className="specialProductLabel">
                        <span class="text">Save</span>
                        <span class="percent">30%</span>
                      </span>
                    </div>
                    {/* product content */}
                    <div className="productContent">
                      <h5 className="productName">
                        <Link to={"/"}>Black Fashion Zapda</Link>
                      </h5>
                      <div className="productPrice">
                        <span className="priceSale">$455.00</span>
                        <span className="priceCompare">$649.00</span>
                      </div>
                      <div className="dealProgress">
                        <div className="dealStock">
                          <span className="stockSold">
                            Already Sold: <strong>6</strong>
                          </span>
                          <span className="stockAvailable">
                            Available: <strong>39</strong>
                          </span>
                        </div>
                        <Progress value={13} />
                      </div>
                      <div className="countDownWrapper">
                        <span class="offerText">Hurry Up! Offer ends in</span>
                        <div style={{ textAlign: "center" }}>
                          <CountdownTimer count={5432} showTitle hideDay />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
