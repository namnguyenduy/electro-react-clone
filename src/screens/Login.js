import React, { useState } from "react";
import { Link } from "react-router-dom";
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
// import my components
import Header from "../components/header/Header";
import Partner from "../components/partner/Partner";
import Footer from "../components/footer/Footer";
import "../Account.scss";
import clsx from "clsx";

export default function Login() {
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
              <BreadcrumbItem active>Account</BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </div>
        {/* login form */}
        <div className="formWrapper">
          <Container>
            <div className="customerContainer">
              <h2>Login</h2>
              <p>Welcome back! Sign in to your account</p>
              <Form className="formContainer">
                <FormGroup>
                  <Label for="customerEmail">Email address *</Label>
                  <Input type="email" id="customerEmail" required autoFocus/>
                </FormGroup>
                <FormGroup>
                  <Label for="exampleEmail">Password *</Label>
                  <Input type="password" required />
                </FormGroup>
                <div className="controlWrapper">
                  <div className="action">
                    <Link to={"/"}>Return to store</Link>
                    <Link to={"/"}>Forgotten Password?</Link>
                  </div>
                  <Button
                    type="submit"
                    className={clsx("btnSample", "btnSampleSmall")}
                  >
                    Login
                  </Button>
                </div>
              </Form>
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
