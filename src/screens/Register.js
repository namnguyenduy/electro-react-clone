import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
// import icon
import {FaCheck} from 'react-icons/fa';
// import my components
import Header from "../components/header/Header";
import Partner from "../components/partner/Partner";
import Footer from "../components/footer/Footer";
import "../Account.scss";
import clsx from "clsx";
export default function Register() {
  return (
    <div className="wrapper">
      <div>
        <Header />
      </div>
      <div className="loginMain">
        {/* breadcrumb */}
        <div className="breadcrumbWrapper">
          <Container>
            <Breadcrumb className="breadcrumbHolder">
              <BreadcrumbItem>
                <Link to="/">Home</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>Create Account</BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        {/* login form */}
        <div className="formWrapper">
          <Container>
            <div className="customerContainer">
              <h2>Create new account</h2>
              <p>Create your own Account</p>
              <Form className="formContainer">
                <FormGroup>
                  <Label for="customerFistName">First Name</Label>
                  <Input type="text" id="customerFistName" required autoFocus />
                </FormGroup>
                <FormGroup>
                  <Label for="customerLastName">Last Name</Label>
                  <Input type="text" id="customerLastName" required />
                </FormGroup>
                <FormGroup>
                  <Label for="customerEmail">Email address *</Label>
                  <Input type="email" id="customerEmail" required />
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Password *</Label>
                  <Input type="password" required />
                </FormGroup>
                <div className="controlWrapper">
                  <Button
                    type="submit"
                    className={clsx("btnSample", "btnSampleSmall")}
                  >
                    Register
                  </Button>
                </div>
              </Form>
              <h5>Sign up today and you'll be able to :</h5>
              <ul className="benefitsList">
                  <li>
                      <FaCheck/>
                      Speed your way through the checkout
                  </li>
                  <li>
                      <FaCheck/>
                      Track your orders easily
                  </li>
                  <li>
                      <FaCheck/>
                      Keep a record of all your purchases
                  </li>
              </ul>
            </div>
          </Container>
        </div>
      </div>
      <div>
        <Partner />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
