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
    console.log(e.i);
  };
  const changePrice = (e) => {
    console.log(e);
  };
  const userInfoShowing = () => {
    let result = [];
    for (let i = 0; i < number; i++) {
      result.push(
        // <div>
        //   <UserName
        //     type="text"
        //     key={i}
        //     onChange={({ e }) => {
        //       let lst = [...name];
        //       lst[i] = e;
        //       setName(lst);
        //     }}
        //   ></UserName>
        //   <NumberInput
        //     type="text"
        //     key={i}
        //     onChange={changePrice({ i })}
        //   ></NumberInput>
        // </div>

        <div key={i}>
          <div
            style={{
              boxSizing: "border-box",
              width: "50%",
              float: "left",
              padding: "10px",
            }}
          >
            <p>Name</p>
            <input type="text" onChange={changeName({ i })}></input>
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
            <input type="text"></input>
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
    </>
  );
}

export default UserInfo;
