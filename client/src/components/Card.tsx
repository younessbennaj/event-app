import React, { FunctionComponent, ReactNode } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledCard = styled.div<any>`
  background: lightblue;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.03);
  border-radius: 12px;
  padding: 16px;
`;

const Card: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
  return <StyledCard>{children}</StyledCard>;
};

Card.propTypes = { children: PropTypes.node.isRequired };

export default Card;
