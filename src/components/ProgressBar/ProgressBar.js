/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';
const SIZES = {
  small: {
    "--height": "8px",
    "--padding": "0px",
    "--outerRadius": "4px",
  },
  medium: {
    "--height": "12px",
    "--padding": "0px",
    "--outerRadius": "4px",
  },
  large: {
    "--height": "16px",
    "--padding": "4px",
    "--outerRadius": "8px",
  }
}
const ProgressBar = ({ value, size }) => {
  const vars = SIZES[size]
  return <Wrapper style={vars}
            role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">
              <BarWrapper>
              <Bar value={value}/>
              </BarWrapper>
  </Wrapper>;
};

const Wrapper = styled.div`
 width: 100%;
 /* Hides corners when progress near full */
 overflow: hidden;
 box-sizing: content-box;
 padding: var(--padding);
 background: ${COLORS.gray50};
 height: var(--height);
 border-radius: var(--outerRadius);
 box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
 `

 const BarWrapper = styled.div`
 /* Hides corners when progress near full */
 overflow: hidden;
 border-radius: 4px;
 `

const Bar = styled.div`
  --innerRadius: 4px;
  box-sizing: border-box;
  background: linear-gradient(90deg, #fd1d1d 0% ,${COLORS.primary} 100%);
  width: ${p => p.value}%;
  height: var(--height);
  border-radius: var(--innerRadius) 0px 0px var(--innerRadius);
`

export default ProgressBar;
