import React from "react";
import styled from "styled-components";
import Header from "../Common/Header";
import Sidebar2 from "../Common/Sidebar2";
import Footer from "../Common/Footer";
import Send from "./Send";


const Div = styled.div`
  display: flex;
  padding: 0 15%;
  @media(max-width:1024px){

    padding: 0 7%;
  }
  @media(max-width:767px){

padding: 0%;
}
`;

function SendComponent() {
  return (
    <div>
      <Header />
      <Div>
        <Sidebar2 />
        <Send/>
      </Div>
      <Footer/>
    </div>
  );
}

export default SendComponent;
