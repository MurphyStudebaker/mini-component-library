import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';
import VisuallyHidden from '../VisuallyHidden'

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
        <NativeSelect value={value} onChange={onChange}>  
          {children}
        </NativeSelect>
        <FancySelect>
          {displayedValue}
          <Icon id="chevron-down"/>
        </FancySelect>
    </Wrapper>
    
  );
};

const NativeSelect = styled.select`
  opacity: 0;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
`

const FancySelect = styled.div`
  color: ${COLORS.gray500};
  padding: 12px 16px;
  display: flex;
  align-items: center;
  gap: 24px;
  border: 2px solid transparent; 
  border-radius: 8px;

  ${NativeSelect}:hover + & {
    color: ${COLORS.black};
  }

  ${NativeSelect}:focus + & {
    border: 2px solid ${COLORS.primary};
  }
`

const Wrapper = styled.div`
 background: ${COLORS.gray50};
 width: fit-content;
 border-radius: 8px;
 position: relative;
`

export default Select;
