import { IoIosArrowRoundForward } from "react-icons/io";
import {FaCartArrowDown} from "react-icons/fa";
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
  {
    title: "Dolce & Gabbanar",
    productVendor: "Dolce & Gabbana",
    productName: "Freecof Product Sample",
    img: `${require("./assets/images/homeProduct/product3.webp")}`,
    priceSale: "$135.00",
    priceCompare: "$273.00",
    addCartIcon: <IoIosArrowRoundForward/>,
    addCartTitle: 'Select options'
  },
  {
    title: "Donna Karan",
    productVendor: "Donna Karan",
    productName: "Freecof Product Sample",
    img: `${require("./assets/images/homeProduct/product4.webp")}`,
    priceSale: "$574.35",
    priceCompare: "$585.00",
    addCartIcon: <FaCartArrowDown/>,
    addCartTitle: 'Add to cart',
  },
  {
    title: "Armani",
    productVendor: "Armani",
    productName: "Freshkix Product Sample",
    img: `${require("./assets/images/homeProduct/product5.webp")}`,
    priceSale: "$156.00",
    priceCompare: "$195.00",
    addCartIcon: <FaCartArrowDown/>,
    addCartTitle: 'Add to cart'
  },
  {
    title: "Bulgari",
    productVendor: "Bulgari",
    productName: "Georgeous White Bag",
    img: `${require("./assets/images/homeProduct/product6.webp")}`,
    priceSale: "$$195.00",
    priceCompare: "$200.00",
    addCartIcon: <IoIosArrowRoundForward/>,
    addCartTitle: 'Add to cart'
  },
];
export const partner = [
  {
    img: `${require("./assets/images/partner/partner1.webp")}`,
  },
  {
    img: `${require("./assets/images/partner/partner2.webp")}`,
  },
  {
    img: `${require("./assets/images/partner/partner3.webp")}`,
  },
  {
    img: `${require("./assets/images/partner/partner4.webp")}`,
  },
  {
    img: `${require("./assets/images/partner/partner5.webp")}`,
  },
];
