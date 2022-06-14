import React, { useState } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { ButtonGroup, Button, DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  margin: 0 auto;
`;

const SubmitButton = styled.button`
  background-color: lightblue;
  border: 30px;
  color: black;
  padding: 15px 32px;
  text-align: center;
  display: block;
  font-size: 30px;
`;

function Main() {
  const [number, setNumber] = useState(0);

  const SubmitConfigure = (e) => {
    setNumber(e.target.textContent);
  };

  const NumberClick = () => {
    if (number === 0) {
      alert("사용자가 몇 명인지 입력하세요!");
      return;
    }
    axios
      .post(
        "http://localhost:8080/user",
        {
          number,
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then(window.location.replace("/info"));
  };
  const Number = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <>
      <div
        style={{ width: "100%", height: "80%", backgroundColor: "lightblue" }}
      >
        <h2>사용자는 몇 명입니까?</h2>
        <Container>
          <ButtonGroup>
            <DropdownButton
              as={ButtonGroup}
              title="사용자"
              id="bg-nested-dropdown"
            >
              {Number.map(function (a) {
                return (
                  <Dropdown.Item onClick={SubmitConfigure} key={a}>
                    {a}
                  </Dropdown.Item>
                );
              })}
            </DropdownButton>
          </ButtonGroup>

          <SubmitButton onClick={NumberClick}>
            {/* <Link style={{ textDecoration: "none" }} to="/info">
              Submit
            </Link> */}
            Submit
          </SubmitButton>
          <h2>{number}</h2>
        </Container>
      </div>
    </>
  );
}

export default Main;
