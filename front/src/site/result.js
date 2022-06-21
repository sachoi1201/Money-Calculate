import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Card from "react-bootstrap/Card";
function Result() {
  const [user, setUser] = useState([]);
  const [price, setPrice] = useState([]);
  const [userNumber, setUserNumber] = useState(0);
  const [userToUser, setUserToUser] = useState([
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
  ]);
  const userInfoShowing = () => {
    let result = [];
    for (let i = 0; i < userNumber; i++) {
      result.push(
        <Card key={i} className={i} border="primary" style={{ width: "18rem" }}>
          <Card.Header>{user[i]}</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>{userToUser[i]}</Card.Text>
          </Card.Body>
        </Card>
      );
    }
    return result;
  };
  useEffect(() => {
    axios.get("http://localhost:8080/getResult").then((res) => {
      setUser(res.data.user);
      setPrice(res.data.userPrice);
      setUserNumber(res.data.userNumber);
      setUserToUser(res.data.userToUser);
    });
  }, []);
  return (
    <>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {userInfoShowing()}
      </div>
    </>
  );
}

export default Result;
