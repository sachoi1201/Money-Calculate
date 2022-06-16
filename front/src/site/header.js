import React from "react";
import { Navbar, Container } from "react-bootstrap";
import styled from "styled-components";

function Header() {
  return (
    <>
      <div style={{ width: "100%", height: "20%" }}>
        <Navbar bg="light" expand="lg" style={{ backgroundColor: "black" }}>
          <Container
            style={{
              backgroundColor: "lightblue",
              display: "flex",
              justifyContent: "center",
              borderRadius: "30px",
            }}
          >
            <Navbar.Brand
              href="/"
              style={{
                color: "black",
                fontSize: "30px",
                fontWeight: "bold",
              }}
            >
              Money Calculate
            </Navbar.Brand>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default Header;
