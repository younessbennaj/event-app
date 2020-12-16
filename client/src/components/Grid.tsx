import React, { FunctionComponent, ReactNode } from 'react';
import styled, { DefaultTheme } from 'styled-components';
import PropTypes from 'prop-types';

// Style du composant grille
const StyledGrid = styled.div<{ theme: DefaultTheme }>`
  display: grid;

  @media ${(props) => props.theme.mediaQueries.small} {
    grid-template-columns: repeat(1, 1fr);
    padding: 16px;
    grid-column-gap: 16px;
    grid-row-gap: 24px;
  }

  @media ${(props) => props.theme.mediaQueries.medium} {
    grid-template-columns: repeat(3, 1fr);
    padding: 72px;
    grid-column-gap: 16px;
    grid-row-gap: 64px;
  }
`;

// Style des item du composant grille
const StyledGridItem = styled.div<{ span: number }>`
  display: flex;
  flex-direction: column;
  grid-column: span ${(props) => props.span};
`;

export const Grid: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  return <StyledGrid>{children}</StyledGrid>;
};

Grid.propTypes = { children: PropTypes.node.isRequired };

export const GridItem: FunctionComponent<{
  children: ReactNode;
  span: string;
}> = ({ children, span }) => {
  return <StyledGridItem span={span}>{children}</StyledGridItem>;
};

GridItem.defaultProps = {
  span: '1',
};

GridItem.propTypes = {
  children: PropTypes.node.isRequired,
  span: PropTypes.string,
};
