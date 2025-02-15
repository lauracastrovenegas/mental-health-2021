import React from "react";
import styled from "styled-components";

import Letter from "../components/Letter";
import Nav from "../components/Nav";
import AdsSection from "./AdsSection";
import WritingSection from "./WritingSection";
import VisualSection from "./VisualSection";
import Credits from "./Credits";

import WritingData from "../utils/WritingData";
import VisualData from "../utils/VisualData";

import { device } from "../device";

const Columns = styled.div`
  display: flex;
`;
const NavColumn = styled.div`
  width: 25%;

  @media ${device.mobile} {
    width:0;
  }
`;

const ArticleColumn = styled.div`
  width: 75%;
  padding-right: 5%;

  @media ${device.mobile} {
    width:100%;
    padding-right:0%;
  }
`;
const Title = styled.div`
  text-align: center;
  padding: 2%;
  font-size: 5rem;
  text-transform: uppercase;
  background-image: linear-gradient(
    89.88deg,
    #000748 35.17%,
    #204352 66.32%,
    #12909e 91.06%
  );

  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;

  font-family: Bitter;
  font-style: normal;
  font-weight: bold;

  text-shadow: 5px 5px 4px rgba(27, 192, 211, 0.5);
`;

const Sections = () => {
  console.log(WritingData["Photo"]);
  return (
    <>
      <Columns>
        <NavColumn>
          <Nav />
        </NavColumn>
        <ArticleColumn>
          <Letter />
          <Title>Writing</Title>
          {Object.keys(WritingData).map((key, index) => (
            <WritingSection
              title={key}
              articles={WritingData[key]}
              linePosition={index % 2 === 0 ? "after" : "before"}
            />
          ))}
          <Title>Visuals</Title>
          {Object.keys(VisualData).map((key, index) => (
            <VisualSection
              title={key}
              articles={VisualData[key]}
              linePosition={index % 2 === 0 ? "after" : "before"}
            />
          ))}
          <AdsSection />
        </ArticleColumn>
      </Columns>
      <Credits />
    </>
  );
};

export default Sections;
