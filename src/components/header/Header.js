import React from "react";
// import clsx from "clsx";
import { Link } from "react-router-dom";
import { Row, Col } from "antd";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import styles from "../header/Header.module.scss";
// import logoWebSite from "../../assets/images";
import Container from "../container/Container";
console.log(styles)
export default function Header() {
  return (
    <div className={styles.header}>
      <Container>
        {/* top bar */}
          <Row className={styles.topBar}>
            <Col span={12}>
              {/* header contact box */}
              <div className={styles.headerContactBox}>
                <Row>
                  {/* phone */}
                  <div className={styles.phone}>
                    <FaPhoneAlt />
                    <span>(+800) 123 456 7890</span>
                  </div>
                  {/* email */}
                  <div className={styles.email}>
                    <FaEnvelope />
                    <span>sample@email.com</span>
                  </div>
                </Row>
              </div>
            </Col>
            <Col span={12}>
              {/* top bar right */}
              <div className={styles.topBarRight}>
                <Row>
                  <Col span={6}>
                    {/* store location */}
                    <div className={styles.storeLocation}>
                      <Link to="/">
                        <FaMapMarkerAlt />
                        <span>Store Location</span>
                      </Link>
                    </div>
                  </Col>
                  <Col span={6}>
                    {/* order */}
                    <div className={styles.order}>
                      <Link to="/">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 101 64"
                        >
                          <title>electro-track-order-icon</title>
                          <path d="M0 0h66.304c0 3.904 0 7.744 0 11.648 9.216 0 18.368 0 27.584 0 2.112 5.824 4.224 11.712 6.528 17.536 0.512 1.344 0.768 2.816 0.896 4.288v3.968c-0.448 5.888-0.192 11.84-0.256 17.792-3.264 0.064-6.528 0-9.792 0-1.728 4.672-5.952 8.32-11.008 8.768h-2.048c-5.056-0.384-9.856-3.776-11.328-8.768-8.704 0-17.408 0-26.176 0-1.28 3.072-3.264 6.016-6.336 7.424-6.592 3.264-16.064 0-18.048-7.424-3.264 0-6.592 0-9.92 0 0-6.72 0-13.504 0-20.288 2.112 0 4.16 0 6.272 0 0 4.864 0 9.664 0 14.528 1.216 0 2.432 0 3.584-0.064 1.088-3.328 3.456-6.336 6.912-7.552 6.528-2.688 15.744 0.256 17.6 7.616 6.336 0 12.736 0 19.136 0 0.384-14.528 0.064-29.12 0.192-43.712-20.032 0-40.064 0-60.096 0v-5.76M66.496 49.472c1.024-1.216 1.408-2.816 2.432-4.032 1.664-2.176 4.16-3.712 6.784-4.288 6.272-1.664 13.824 1.92 15.552 8.32 1.152 0 2.368 0 3.52 0-0.832-6.72 1.664-13.76-0.832-20.224-1.6-3.968-3.072-7.936-4.672-11.84-7.616 0-15.296-0.064-22.912 0 0.064 10.688-0.256 21.376 0.128 32.064M26.88 46.72c-1.856 0.448-3.648 1.664-4.352 3.456-1.28 2.944 0.448 6.784 3.52 7.616 3.904 1.28 9.28-1.536 8.768-6.016-0.192-3.776-4.48-5.952-7.936-5.056M77.568 46.72c-1.92 0.384-3.712 1.6-4.48 3.456-1.216 2.624 0.064 6.144 2.816 7.296 3.776 1.792 9.536-0.64 9.536-5.248 0.064-3.904-4.352-6.464-7.872-5.504zM3.328 17.408c0-1.92-0.256-3.904 0.192-5.76 9.344 0.064 18.688 0 28.096 0 0 1.92 0 3.84 0 5.696-9.472 0.064-18.88 0.064-28.288 0.064zM6.528 23.296c6.272 0 12.544 0 18.816 0 0 1.92 0 3.84 0 5.76-6.272 0-12.608 0-18.88 0-0.064-1.92-0.128-3.84 0.064-5.76z"></path>
                        </svg>
                        <span>Track Your Order</span>
                      </Link>
                    </div>
                  </Col>
                  <Col span={6}>
                    {/* customer account */}
                    <div className={styles.customerAccount}>
                      {/* register */}
                      <Link to="/" title="Register">
                        <AiOutlineUser />
                        Register
                      </Link>
                      <span className="customerOr">or</span>
                      {/* login */}
                      <Link to="/" title="Sign in">
                        Sign in
                      </Link>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
       
        <Row></Row>
        {/* <img src={logoWebSite.logo} alt="logo" className={styles.logo} /> */}
      </Container>
    </div>
  );
}
