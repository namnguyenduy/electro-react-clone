import React from "react";
import clsx from "clsx";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
// import icon
import { RiGridFill, RiLayoutGridFill } from "react-icons/ri";
import { MdViewList } from "react-icons/md";
import { BsGrid1X2Fill } from "react-icons/bs";
// import my component
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../Product.scss";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
export default function Product() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
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
              <BreadcrumbItem active>Library</BreadcrumbItem>
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
                      <Select
                        options={options}
                        defaultValue={options[0].value}
                      />
                    </div>
                    {/* pagination-showing */}
                    <div className="paginationShowing">
                      <div class="showing">Showing 1 - 16 of 30 Items</div>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
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
