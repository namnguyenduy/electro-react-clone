import { IoIosArrowRoundForward } from "react-icons/io";
export const languageFlag = [
  {
    id: 1,
    name: "English",
    flag: require("../src/assets/images/flags/uk.png").default,
  },
];
export const CarouselInfo = [
  {
    img: `${require("./assets/images/carousel/slider1.webp")}`,
  },
  {
    img: `${require("./assets/images/carousel/slider2.webp")}`,
  },
  {
    img: `${require("./assets/images/carousel/slider3.webp")}`,
  },
];

export const homeCategories = [
  {
    title: "Bulgari",
    productVendor: "Bulgari",
    productName: "Faxtex Product Sample",
    img: `${require("./assets/images/homeProduct/product1.webp")}`,
    priceSale: "$15.00",
    priceCompare: "$25.00",
    addCartIcon: <IoIosArrowRoundForward/>,
    addCartTitle: 'Select options',
  },
  {
    title: "Christian Dior",
    productVendor: "Christian Dior",
    productName: "Finity Product Sample",
    img: `${require("./assets/images/homeProduct/product2.webp")}`,
    priceSale: "$117.00",
    priceCompare: "$156.00",
    addCartIcon: <IoIosArrowRoundForward/>,
    addCartTitle: 'Select options'
  },
];
