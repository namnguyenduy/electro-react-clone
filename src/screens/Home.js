import React from "react";
import {
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
} from "reactstrap";
// import my component
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

export default function Home() {
  // State for Active index
  const [activeIndex, setActiveIndex] = React.useState(0);

  // State for Animation
  const [animating, setAnimating] = React.useState(false);

  // Sample items for Carousel
  const items = [
    {
      caption: "Sample Caption One",
      src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122739/2-300x115.png",
      altText: "Slide One",
    },
    {
      caption: "Sample Caption Two",
      src: "https://media.geeksforgeeks.org/wp-content/uploads/20210425122716/1-300x115.png",
      altText: "Slide Two",
    },
  ];

  // Items array length
  const itemLength = items.length - 1;

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
  const carouselItemData = items.map((item) => {
    return (
      <CarouselItem
        key={item.src}
        onExited={() => setAnimating(false)}
        onExiting={() => setAnimating(true)}
      >
        <img src={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });
  return (
    <div className="wrapper">
      <div>
        {/* header */}
        <Header />
      </div>
      {/*  carouse */}
      <div className="mainContent" style={{background: 'tomato', height: '100vh'}}>
        <div className="homeMainContent">
          {/* home slideshow */}
          <div className="homeSlideShow"></div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
