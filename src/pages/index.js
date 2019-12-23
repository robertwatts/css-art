import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Squares to circles</h1>
    <Grid>
      {[...Array(100)].map((e, i) => (
        <Cell className="cell" key={i}></Cell>
      ))}
    </Grid>
  </Layout>
)

function circlifyCell(i, j) {
  const child = i * 10 + j + 1;
  const borderRadius = (i + j) * 2.8;
  return `
    &:nth-child(${child}) {
      &:before {
        border-radius: ${borderRadius}%;
      }
    }
  `;
}

function squaresToCircles(cellCount) {
  let str = '';
  for (let i=0; i<cellCount; i++) {
    for (let j=0; j<cellCount; j++) {
      str += circlifyCell(i, j);
    }
  }
  return str;
 }

const Grid = styled.div`        
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(10, 1fr);
  width: 90vh;
  height: 90vh;
  margin: 0 auto;
  margin-top: 5vh;
  background: white;
`
const Cell = styled.div`
  position: relative;
  overflow: visible;
  &:before {
    content: "";
    display: block;
    position: absolute;
    background: black;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 60%;
    height: 60%;
  }
  ${squaresToCircles(10)}
`
