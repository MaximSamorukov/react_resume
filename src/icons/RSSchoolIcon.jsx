import React from "react";
import styled from "styled-components";


const RSScoolIconDiv = styled.div`
   width: 48px;
   height: 48px;
   border-radius: 50%;
   background-color: ${({ color }) => color };
   display: flex;
   justify-content: center;
   align-items: center;
`
const  RSScoolIconSpan = styled.span`
   color: ${({ color }) => color === 'black' ? 'white' : 'black' };
   display: inline-block;
   font-size: 24px;
   font-weight: 800;
   line-height: 24px;
`

export const RSScoolIcon = ({ color }) => (
   <RSScoolIconDiv color={color}>
      <RSScoolIconSpan color={color}>
         RS
      </RSScoolIconSpan>
   </RSScoolIconDiv>
)