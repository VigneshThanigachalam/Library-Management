import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Container } from "./Container";
export const Layout = () => {
  return (
    <>
      <Header />
      <Container class1={"cart-wrapper home-wrapper-2"}>
        <div className="card my-5 p-4">
          <div className="row">
            <div className="col-12 col-lg-6">
              <img src="/images/mainPicture.jpg" alt="" className="img-fluid h-100" />
            </div>
            <div className="col-12 col-lg-6 d-grid">
              <Outlet />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
