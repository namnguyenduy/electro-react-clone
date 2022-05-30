import React, { useState } from "react";
import clsx from "clsx";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import icon
import { RiGridFill, RiLayoutGridFill, RiHeartLine } from "react-icons/ri";
import {
  MdViewList,
  MdOutlineRemoveRedEye,
  MdExpandMore,
} from "react-icons/md";
import { BsGrid1X2Fill } from "react-icons/bs";
// import my component
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../Product.scss";
import { products } from "../fakeData";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import Partner from "../components/partner/Partner";
export default function Product() {
  const options = [
    { value: "Name, A-Z", label: "Name, A-Z" },
    { value: "Name, Z-A", label: "Name, Z-A" },
    { value: "Featured", label: "Featured" },
    { value: "Price, Low To High", label: "Price, Low To High" },
    { value: "Price, High To Low", label: "Price, High To Low" },
    { value: "Best Selling", label: "Best Selling" },
  ];
  return (
    <div className="wrapper">
      {/* header */}
      <div>
        <Header />
      </div>
      <div className="productMainContent">
        {/* breadcrumb */}
        <div className="breadcrumbWrapper">
          <Container>
            <Breadcrumb className="breadcrumbHolder">
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Products</BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        {/* page catalog */}
        <div className="pageCatalog">
          <Container>
            <Row>
              {/* sideBar */}
              <Col lg="3">
                <div className="sideBar">
                  {/* sidebar menu */}
                  <div className="sbMenu">
                    <h5 className="sbTitle">Categories</h5>
                    <ProSidebar>
                      <Menu iconShape="square">
                        {/* accessories */}
                        <SubMenu title="Accessories">
                          {/* item1 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>Cameras</span>
                            </Link>
                          </MenuItem>
                          {/* item2 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>Software</span>
                            </Link>
                          </MenuItem>
                          {/* item3 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>Phones & PDAs</span>
                            </Link>
                          </MenuItem>
                          {/* item4 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>MP3 Players</span>
                            </Link>
                          </MenuItem>
                        </SubMenu>
                        {/* All in One */}
                        <SubMenu title="All in One">
                          {/* item1 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>Music</span>
                            </Link>
                          </MenuItem>
                          {/* item2 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>Photography</span>
                            </Link>
                          </MenuItem>
                        </SubMenu>
                        {/* Gadgets */}
                        <SubMenu title="Gadgets">
                          {/* item1 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>Watches</span>
                            </Link>
                          </MenuItem>
                          {/* item2 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>Eyewear</span>
                            </Link>
                          </MenuItem>
                        </SubMenu>
                        {/* Gaming */}
                        <SubMenu title="Gaming">
                          {/* item1 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>Mouse</span>
                            </Link>
                          </MenuItem>
                          {/* item2 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>Keyboard</span>
                            </Link>
                          </MenuItem>
                          {/* item3 */}
                          <MenuItem className="item">
                            <Link to={"/"}>
                              <span>Headphone</span>
                            </Link>
                          </MenuItem>
                        </SubMenu>
                      </Menu>
                    </ProSidebar>
                  </div>
                  {/* sideBar filter */}
                  <div className="sideBarFilter">
                    <div className="sbHeadingFilter">
                      <h5 className="sbTitle">Filter</h5>
                    </div>
                    {/* accordion */}
                    <div className="filterAccordion">
                      {/* color */}
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<MdExpandMore />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>Color</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul className="colorList">
                            <li
                              className={clsx("colorItem", "colorBlack")}
                            ></li>
                            <li className={clsx("colorItem", "colorBlue")}></li>
                            <li className={clsx("colorItem", "colorRed")}></li>
                            <li
                              className={clsx("colorItem", "colorWhite")}
                            ></li>
                            <li
                              className={clsx("colorItem", "colorYellow")}
                            ></li>
                          </ul>
                        </AccordionDetails>
                      </Accordion>
                      {/* size */}
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<MdExpandMore />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography>Size</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul className="sizeList">
                            <li className={clsx("sizeItem")}>S</li>
                            <li className={clsx("sizeItem")}>M</li>
                            <li className={clsx("sizeItem")}>XL</li>
                          </ul>
                        </AccordionDetails>
                      </Accordion>
                      {/* brand */}
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<MdExpandMore />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography>Brand</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul className="brandList">
                            <li className={clsx("brandItem")}>Elle</li>
                            <li className={clsx("brandItem")}>Bikis</li>
                            <li className={clsx("brandItem")}>Godo</li>
                            <li className={clsx("brandItem")}>Jeana</li>
                            <li className={clsx("brandItem")}>Ladora</li>
                            <li className={clsx("brandItem")}>Accesi</li>
                          </ul>
                        </AccordionDetails>
                      </Accordion>
                      {/* Price */}
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<MdExpandMore />}
                          aria-controls="panel2a-content"
                          id="panel2a-header"
                        >
                          <Typography>Price</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ul className="priceList">
                            <li className={clsx("priceItem")}>Under $100</li>
                            <li className={clsx("priceItem")}>$100-$300</li>
                            <li className={clsx("priceItem")}>Above $300</li>
                          </ul>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </div>
                </div>
              </Col>
              {/* catalog */}
              <Col lg="9">
                <div className="cataTitleWrapper">
                  <h2>Products</h2>
                </div>
                {/* tool bar */}
                <div className="cataToolBar">
                  <div className="groupToolBar">
                    {/* grid view */}
                    <div className="gridList">
                      {/* grid 4 */}
                      <span className={clsx("grid", "grid 4", "active")}>
                        <RiGridFill />
                      </span>
                      {/* grid 3 */}
                      <span className={clsx("grid", "grid 3")}>
                        <RiLayoutGridFill />
                      </span>
                      {/* grid 2 */}
                      <span className={clsx("grid", "grid 3")}>
                        <MdViewList />
                      </span>
                      {/* grid 1 */}
                      <span className={clsx("grid", "grid 3")}>
                        <BsGrid1X2Fill />
                      </span>
                    </div>
                    {/* sort by */}
                    <div className="sortBy">
                      <label>Sort by</label>
                      <Select
                        options={options}
                        defaultLabel={options[0].label}
                      />
                    </div>
                    {/* pagination-showing */}
                    <div className="paginationShowing">
                      <div class="showing">Showing 1 - 16 of 30 Items</div>
                    </div>
                  </div>
                </div>
                {/* category product */}
                <div className="cataProduct">
                  <Row>
                    {products.map((e) => (
                      <Col lg="4">
                        <div className="hProductWrapper">
                          {/* product head */}
                          <div className="hProductHead">
                            <div className="productGroupVendorName">
                              <div className="productVendor">
                                <Link to={"/"} title={e.title}>
                                  {e.productVendor}
                                </Link>
                              </div>
                              <h5 className="productName">
                                <Link to={"/"}>{e.productName}</Link>
                              </h5>
                            </div>
                            <div className="featureImg">
                              <Link to={"/"}>
                                <img src={e.img} alt="" />
                              </Link>
                            </div>
                          </div>
                          {/* product content */}
                          <div className="productContent">
                            {/* priceCartWrapper */}
                            <div className="priceCartWrapper">
                              <div className="productPrice">
                                <span className="priceSale">{e.priceSale}</span>
                                <span className="priceCompare">
                                  {e.priceCompare}
                                </span>
                              </div>
                              <div className="productAdd">
                                <Link to={"/"} title={e.addCartTitle}>
                                  {e.addCartIcon}
                                </Link>
                              </div>
                            </div>
                            {/* product button */}
                            <div className="productButton">
                              <div className="quickShop">
                                <MdOutlineRemoveRedEye />
                                <span>View</span>
                              </div>
                              <div className="productWishlist">
                                <RiHeartLine />
                                <span>Wishlist</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </div>
                {/* pagination */}
                <div className="paginationHolder">
                  <ul className="pagination">
                    <li className="active">
                      <Link to={'/'}>1</Link>
                    </li>
                    <li>
                      <Link to={'/'}>2</Link>
                    </li>
                  </ul>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      {/* partner */}
      <div>
        <Partner />
      </div>
      {/* footer */}
      <div>
        <Footer />
      </div>
    </div>
  );
}
