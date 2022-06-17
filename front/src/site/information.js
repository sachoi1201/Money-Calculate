import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

const UserName = styled.input``;
const NumberInput = styled.input``;

const SubmitButton = styled.button`
  background-color: lightblue;
  border: 30px;
  color: black;
  padding: 15px 32px;
  text-align: center;
  display: block;
  font-size: 30px;
`;

function UserInfo() {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const [price, setPrice] = useState(["", "", "", "", "", "", "", "", "", ""]);
  const infoClick = () => {
    axios
      .post(
        "http://localhost:8080/getInfo",
        {
          name,
          price,
        },
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then(window.location.replace("/result"));
  };

  const userInfoShowing = () => {
    let result = [];
    for (let i = 0; i < number; i++) {
      result.push(
        <div key={i} className={i}>
          <div
            style={{
              boxSizing: "border-box",
              width: "50%",
              float: "left",
              padding: "10px",
            }}
          >
            <p>Name</p>
            <input
              type="text"
              onChange={function (e) {
                let parentNode = Number(
                  e.target.parentNode.parentNode.className
                );
                let temp = [...name];
                temp[parentNode] = e.target.value;
                setName(temp);
              }}
            ></input>
          </div>
          <div
            style={{
              boxSizing: "border-box",
              width: "50%",
              float: "left",
              padding: "10px",
            }}
          >
            <p>Price</p>
            <input
              type="text"
              onChange={function (e) {
                let parentNode = Number(
                  e.target.parentNode.parentNode.className
                );
                let temp = [...price];
                temp[parentNode] = e.target.value;
                setPrice(temp);
              }}
            ></input>
          </div>
          <div style={{ clear: "both" }}></div>
        </div>
      );
    }
    return result;
  };
  useEffect(() => {
    axios.get("http://localhost:8080/getUser").then((res) => {
      setNumber(res.data.userNumber);
    });
  }, []);
  return (
    <>
      <div
        style={{
          backgroundColor: "black",
          padding: "30px",
          width: "80%",
          margin: "auto",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: "30px",
            width: "80%",
            maxWidth: "600px",
            margin: "auto",
          }}
        >
          <form>
            <h3>User Information</h3>
            {userInfoShowing()}
          </form>
          <div>
            <SubmitButton
              type="submit"
              style={{ display: "block", marginLeft: "auto" }}
              onClick={infoClick}
            >
              SUBMIT
            </SubmitButton>
          </div>
        </div>
      </div>
      <h1>{name}</h1>
      <h1>{price}</h1>
    </>
  );
}

export default UserInfo;
