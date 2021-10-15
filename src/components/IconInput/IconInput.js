import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';


const SIZES = {
  small: {
    "--border": "1px",
    "--fontSize": 14 / 16 + "rem",
    "--iconSize": "16px",
  },
  large: {
    "--border": "2px",
    "--fontSize": 18 / 16 + "rem",
    "--iconSize": "24px",
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  const vars = SIZES[size]
  return <Wrapper style={vars} width={width}>
        <IconWrapper>
          <Icon id={icon}/>
        </IconWrapper>
      <VisuallyHidden htmlFor={label}>
        {label}
      </VisuallyHidden>
      <NativeInput id={label} placeholder={placeholder} width={width}/>
  </Wrapper>;
};

const Wrapper = styled.div`
  position: relative;
  width: ${p => p.width+"px"};
  border-bottom: var(--border) solid ${COLORS.black};
`
const IconWrapper = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: var(--iconSize);
    height: var(--iconSize);
`
const NativeInput = styled.input`
  width: 100%;
  height: ${24 / 16}rem;
  border: none;
  display: inline-block;
  background: transparent;
  padding-left: 24px;
  outline-offset: 2px;
  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 200;
  }
`

export default IconInput;
