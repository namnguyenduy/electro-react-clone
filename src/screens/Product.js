import React from "react";
import { Container, Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
// import icon

// import my component
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import "../Product.scss";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
export default function Product() {
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
                      </Menu>
                    </ProSidebar>
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
