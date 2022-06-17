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
  const [name, setName] = useState([
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0",
  ]);
  const [price, setPrice] = useState(["", "", "", "", "", "", "", "", "", ""]);
  let q = 0;
  const infoClick = () => {};
  // const changeName = (e) => {
  //   console.log(e.i);
  // };
  function changeName(e) {
    console.log(e.target.parentNode.parentNode.className);
    console.log(e.target.value);
  }
  const changePrice = () => {
    setName(["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]);
    console.log(name);
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
      console.log(number);
      setNumber(res.data.userNumber);
      console.log(res.data.userNumber);
      console.log(number);
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
            <div>
              <SubmitButton
                type="submit"
                style={{ display: "block", marginLeft: "auto" }}
                onClick={infoClick()}
              >
                SUBMIT
              </SubmitButton>
            </div>
          </form>
        </div>
      </div>
      <h1>{name}</h1>
    </>
  );
}

export default UserInfo;
