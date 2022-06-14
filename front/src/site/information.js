import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

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

  const infoClick = () => {};
  const changeName = (e) => {
    console.log(e);
  };
  const changePrice = (e) => {
    console.log(e);
  };
  const userInfoShowing = () => {
    let result = [];
    for (let i = 0; i < number; i++) {
      result.push(
        <div>
          <UserName
            type="text"
            key={i}
            onChange={({ e }) => {
              let lst = [...name];
              lst[i] = e;
              setName(lst);
              console.log(lst);
            }}
          ></UserName>
          <NumberInput
            type="text"
            key={i}
            onChange={changePrice({ i })}
          ></NumberInput>
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
      {userInfoShowing()}
      <SubmitButton onClick={infoClick()}>Submit</SubmitButton>
    </>
  );
}

export default UserInfo;
