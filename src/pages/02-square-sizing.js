import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"

export default () => (
  <Layout number="2" title="Square sizing">
    <Grid>
      {[...Array(100)].map((e, i) => (
        <Cell className="cell" key={i}></Cell>
      ))}
    </Grid>
  </Layout>
)

function resizeSquare(x, y, countX, countY) {
  const child = x * 10 + y + 1;
  const middleX = countX / 2;
  const middleY = countY / 2;
  const distanceFromMidX = Math.abs(x - middleX);
  const distanceFromMidY = Math.abs(y - middleY);

  const size = ((distanceFromMidX + distanceFromMidY) * 7);

  return `
    &:nth-child(${child}) {
      &:before {
        width: ${size}%;
        height: ${size}%;
      }
    }
  `;
}

function resizeSquares(gridCountX, gridCountY) {
  let str = '';
  for (let x=0; x<gridCountX; x++) {
    for (let y=0; y<gridCountY; y++) {
      str += resizeSquare(x, y, gridCountX, gridCountY);
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
  ${resizeSquares(10,10)}
`
