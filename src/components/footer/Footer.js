import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
// import icon
import {
  FaRegPaperPlane,
  FaFacebookF,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
// import your component
import styles from "../footer/Footer.module.scss";
import logoWebSite from "../../assets/images/Logo";
import supportIcon from "../../assets/images/SupportIcon";
export default function Footer() {
  return (
    <div className={styles.footer}>
      {/* widget newsletter */}
      <div className={styles.widgetNewsletter}>
        <Container>
          <div className={styles.newsletterContainer}>
            <div className={styles.newsletterTitle}>
              <FaRegPaperPlane className={styles.paperPlane} />
              <span>Sign up to Newsletter</span>
            </div>
            <p>
              ...and receive <span>$20 coupon for first shopping.</span>
            </p>
            <Form id={styles.subscribeForm}>
              <Input
                type="email"
                placeholder="Enter your email address"
                required
                id={styles.emailInput}
              />
              <Button type="submit" id={styles.emailSubmit}>
                Subscribe
              </Button>
            </Form>
          </div>
        </Container>
      </div>
      {/* footer widget */}
      <div className={styles.footerWidget}>
        <Container className={styles.footerInner}>
          <Row>
            <Col lg="4">
              <div className={styles.footerBlock}>
                {/* footer logo */}
                <div className={styles.logoFooter}>
                  <Link to={"/"} title="Electro">
                    <img src={logoWebSite.logo} alt="logo" />
                  </Link>
                </div>
                {/* support box 1 */}
                <div className={styles.supportBox1}>
                  <img src={supportIcon.icon} alt="support" />
                  <div class={styles.text}>
                    <span>Got questions? Call us 24/7!</span>
                    <span>(800) 8001-8588, (0600) 874 548</span>
                  </div>
                </div>
                {/* support box 2 */}
                <div className={styles.supportBox2}>
                  <div class={styles.text}>
                    <span>Contact info</span>
                    <span>
                      17 Princess Road, London, Greater London NW1 8JR, UK
                    </span>
                  </div>
                </div>
                {/* widget social */}
                <div className={styles.widgetSocial}>
                  <ul className={styles.widgetSocialIcon}>
                    {/* facebook */}
                    <li>
                      <a
                        href="https://www.facebook.com/shopify/"
                        title="Facebook"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaFacebookF />
                      </a>
                    </li>
                    {/* twitter */}
                    <li>
                      <a
                        href="https://twitter.com/shopify/"
                        title="Twitter"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaTwitter />
                      </a>
                    </li>
                    {/* instagram */}
                    <li>
                      <a
                        href="https://www.instagram.com/shopify/"
                        title="Instagram"
                        target="_blank"
                        rel="noopener"
                      >
                        <BsInstagram />
                      </a>
                    </li>
                    {/* pinterest */}
                    <li>
                      <a
                        href="https://www.pinterest.com/shopify/"
                        title="Pinterest"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaPinterest />
                      </a>
                    </li>
                    {/* youtube */}
                    <li>
                      <a
                        href="https://www.youtube.com/shopify"
                        title="Youtube"
                        target="_blank"
                        rel="noopener"
                      >
                        <FaYoutube />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
            {/* find the last */}
            <Col lg="2">
              {/* footer menu */}
              <div className={styles.footerMenu}>
                <h6>Find In Fast</h6>
                {/* footer list */}
                <ul className={styles.fList}>
                  {/* item 1 */}
                  <li>
                    <Link to={"/"}>
                      <span>Accessories </span>
                    </Link>
                  </li>
                  {/* item 2 */}
                  <li>
                    <Link to={"/"}>
                      <span>Gaming </span>
                    </Link>
                  </li>
                  {/* item 3 */}
                  <li>
                    <Link to={"/"}>
                      <span>Laptops & Computer </span>
                    </Link>
                  </li>
                  {/* item 4 */}
                  <li>
                    <Link to={"/"}>
                      <span>Mac Computers </span>
                    </Link>
                  </li>
                  {/* item 5 */}
                  <li>
                    <Link to={"./"}>
                      <span>PC Computers </span>
                    </Link>
                  </li>
                  {/* item 6 */}
                  <li>
                    <Link to={"./"}>
                      <span>Ultrabooks </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            {/* information */}
            <Col lg="2">
              {/* footer menu */}
              <div className={styles.footerMenu}>
                <h6>Information</h6>
                {/* footer list */}
                <ul className={styles.fList}>
                  {/* item 1 */}
                  <li>
                    <Link to={"/"}>
                      <span>About Us </span>
                    </Link>
                  </li>
                  {/* item 2 */}
                  <li>
                    <Link to={"/"}>
                      <span>Contact Us </span>
                    </Link>
                  </li>
                  {/* item 3 */}
                  <li>
                    <Link to={"/"}>
                      <span>All Collections </span>
                    </Link>
                  </li>
                  {/* item 4 */}
                  <li>
                    <Link to={"/"}>
                      <span>Privacy policy </span>
                    </Link>
                  </li>
                  {/* item 5 */}
                  <li>
                    <Link to={"/"}>
                      <span>Terms & Conditions </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            {/* information */}
            <Col lg="2">
              {/* footer menu */}
              <div className={styles.footerMenu}>
                <h6>Information</h6>
                {/* footer list */}
                <ul className={styles.fList}>
                  {/* item 1 */}
                  <li>
                    <Link to={"/"}>
                      <span>Wishlist </span>
                    </Link>
                  </li>
                  {/* item 2 */}
                  <li>
                    <Link to={"/"}>
                      <span>Shipping & Return </span>
                    </Link>
                  </li>
                  {/* item 3 */}
                  <li>
                    <Link to={"/"}>
                      <span>FAQs </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
            {/* in the Spotlight */}
            <Col lg="2">
              {/* footer menu */}
              <div className={styles.footerMenu}>
                <h6>In the Spotlight</h6>
                {/* footer list */}
                <ul className={styles.fList}>
                  {/* item 1 */}
                  <li>
                    <Link to={"/"}>
                      <span>Electronics </span>
                    </Link>
                  </li>
                  {/* item 2 */}
                  <li>
                    <Link to={"/"}>
                      <span>Toys </span>
                    </Link>
                  </li>
                  {/* item 3 */}
                  <li>
                    <Link to={"/"}>
                      <span>Video Games </span>
                    </Link>
                  </li>
                  {/* item 4 */}
                  <li>
                    <Link to={"/"}>
                      <span>Video Games </span>
                    </Link>
                  </li>
                  {/* item 5 */}
                  <li>
                    <Link to={"/"}>
                      <span>Clothing </span>
                    </Link>
                  </li>
                  {/* item 6 */}
                  <li>
                    <Link to={"/"}>
                      <span>Sports & Outdoors </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
