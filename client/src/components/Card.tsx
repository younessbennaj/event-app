import React, { FunctionComponent, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div<{ theme: DefaultTheme }>`
  background: #ffffff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 16px;
  border: 1px solid darkgrey;
`;

const Card: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

Card.propTypes = { children: PropTypes.node.isRequired };

export default Card;
